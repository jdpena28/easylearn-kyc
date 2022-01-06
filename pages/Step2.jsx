import { useRef, useCallback, useState, useContext, useEffect } from "react"
import Image from "next/image"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Webcam from "react-webcam"
import CircleLoader from "react-spinners/CircleLoader"

import { Storage } from "aws-amplify"

import useUpdateEffect from "../src/hooks/useUpdateEffect"

import DataContext from "../src/context/DataContext"

import rekognitionClient from "../awsconfig"
import { CompareFacesCommand } from "@aws-sdk/client-rekognition"

import { API, graphqlOperation } from "aws-amplify"
import { createEnrollees } from "../src/graphql/mutations"

import { useRouter } from "next/router"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Step2 = () => {
  const webcamRef = useRef("")
  const { enrollee } = useContext(DataContext)
  const [showBtnCapture, setShowBtnCapture] = useState(false)
  const [counter, setCounter] = useState(3)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const captureImg = () => {
    if (counter == 0) {
      setCounter(3)
    } else {
      setCounter(counter - 1)
    }
  }
  const fullName = `${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`.replace(/\s/g,"")
    
  const notify = () => toast("Image Captured",{
      icon:({theme, type}) =>  <h3 className="text-xl">📸</h3>
  })

  const screenshot = useCallback(() => {
    const based64Image = webcamRef.current.getScreenshot()
    const type = based64Image.split(";")[0].split("/")[1]
    const image = new Buffer.from(
      based64Image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    )
    Storage.put(`Pre-Enrollment/Webcam/${fullName}`, image, {
      contentType: `image/${type}`, // return a jpeg type
      contentEncoding: "base64",
    }).then(() => {
      notify()
    })
  }, [webcamRef])

  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  }, [counter])

  const params = {
    SourceImage: {
      S3Object: {
        Bucket: "easylearnkyc94849-dev",
        Name: `public/Pre-Enrollment/${fullName}`,
      },
    },
    TargetImage: {
      S3Object: {
        Bucket: "easylearnkyc94849-dev",
        Name: `public/Pre-Enrollment/Webcam/${fullName}`,
      },
    },
    SimilarityThreshold: 80,
  }

  const detectFaces = async () => {
    setIsLoading(true)
    const command = new CompareFacesCommand(params)
    await rekognitionClient
      .send(command)
      .then((data) => {
        if (data.FaceMatches.length == 0) {
          router.push("/Error")
        } else {
          addEnrollee()
          router.push("/Step3")
        }
      })
      .catch((err) => {
        router.push("/Error")
      })
  }

  const addEnrollee = async () => {
    await API.graphql(
      graphqlOperation(createEnrollees, {
        input: {
          ...enrollee,
        },
      })
    )
  }

  return (
    <Layout title={"Step 2 - Facial Identity"}>
      {!isLoading && (
        <>
          <StepIndicator
            stepColor2={"bg-highlight"}
            stepColor3={"bg-secondary"}
          />
          <div className='container mx-auto text-center space-y-4 sm:my-4'>
            <h3 className='font-bold text-2xl text-left sm:text-center'>
              Let&apos;s take a picture of you
            </h3>
            <div className='relative mx-auto w-max sm:w-full flex'>
              <Webcam
                audio={false}
                mirrored={true}
                className='mx-auto sm:w-full'
                screenshotFormat='image/jpeg'
                ref={webcamRef}
                width={480}
                onUserMedia={() => {
                  setShowBtnCapture(true)
                }}
              />
              {counter > 0 && (
                <div className='h-full w-full absolute flex justify-center items-center'>
                  <p className='font-extrabold text-white text-6xl'>
                    {counter}
                  </p>
                </div>
              )}
            </div>
            {showBtnCapture && (
              <button
                onClick={captureImg}
                className='bg-slate-700 p-3 text-white w-32'
              >
                Capture
              </button>
            )}
          </div>
          <div
            onClick={() => {
              detectFaces()
            }}
            className='sm:flex  justify-end'
          >
            <button
              className='bg-tertiary text-white w-52 sm:w-40 h-16 sm:h-14 rounded-md flex justify-evenly items-center absolute sm:static bottom-4 right-5'
              type='button'
            >
              <p className='text-center text-xl sm:text-lg font-semibold leading-[4rem]'>
                NEXT
              </p>
              <Image
                className='fill-white'
                src={"/icons/arrow-right-thin.svg"}
                height={30}
                width={30}
              />
            </button>
          </div>
        </>
      )}

      {isLoading && (
        <div className='z-50  absolute mx-auto inset-0 flex flex-col justify-center items-center gap-y-7'>
          <CircleLoader
            color={"#0000FF"}
            className='my-auto'
            loading={isLoading}
            size={150}
          />
          <h3 className='text-3xl sm:text-xl font-bold'>
            Face Cross Matching Please wait ...
          </h3>
        </div>
      )}
      <ToastContainer
        position='bottom-center'
        autoClose={1500}
        pauseOnHover={false}
        theme="dark"
      />
    </Layout>
  )
}

export default Step2
