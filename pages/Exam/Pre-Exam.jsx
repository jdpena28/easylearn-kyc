import { useRef, useState, useCallback, useContext } from "react"
import DataContext from "../../src/context/DataContext"
import Layout from "../../src/components/Layout"
import Input from "../../src/components/Input"
import Button from "../../src/components/Button"
import Webcam from "react-webcam"
import CircleLoader from "react-spinners/CircleLoader"

import useUpdateEffect from "../../src/hooks/useUpdateEffect"

import {API,graphqlOperation} from 'aws-amplify'
import { listEnrollees } from "../../src/graphql/queries"

import rekognitionClient from "../../awsconfig"
import { CompareFacesCommand } from "@aws-sdk/client-rekognition"

import {useRouter} from 'next/router'

import { Storage } from "aws-amplify"

const App = () => {
  const {enrollee,setEnrollee} = useContext(DataContext)
  const webcamRef = useRef(null)
  const [openCamera, setOpenCamera] = useState(false)
  const [showBtnCapture, setShowBtnCapture] = useState(false)
  const [counter, setCounter] = useState(3)
  const [imgsrc, setImgsrc] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  

  const router = useRouter()

  const captureImg = () => {
    if (counter == 0) {
      setCounter(3)
    } else {
      setCounter(counter - 1)
    }
  }
  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  }, [counter])

  const screenshot = useCallback(() => {
    setImgsrc(webcamRef.current.getScreenshot())
  }, [webcamRef])

  const imageUpload = async () => {
    setIsLoading(true)
    const type = imgsrc.split(";")[0].split("/")[1]
    const image = new Buffer.from(
      imgsrc.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    )
    Storage.put(
      `Pre-Exam-Webcam/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`,
      image,
      {
        contentType: `image/${type}`, // return a jpeg type
        contentEncoding: "base64",
      }
    ).then(() => {
      detectFaces()
    })
  }

  // fetch data from API and check if enrollee is already in the database
  const checkEnrollee = async () => {
    await API.graphql(
      graphqlOperation(listEnrollees, {
        filter: {
          LastName: {
            eq: enrollee.LastName,
          },
          FirstName: {
            eq: enrollee.FirstName,
          },
          MiddleName: {
            eq: enrollee.MiddleName,
          },
        },
      })
    )
      .then((res) => {
        if (res.data.listEnrollees.items.length > 0) {
          imageUpload()
        } else {
          alert("It seems you are not verified enrollee")
        }
      })
      .catch((err) => console.log(err))
  }

  const params = {
    SourceImage: {
      S3Object: {
        Bucket: "easylearnkyc94849-dev",
        Name: `public/Pre-Exam-Webcam/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`,
      },
    },
    TargetImage: {
      S3Object: {
        Bucket: "easylearnkyc94849-dev",
        Name: `public/Pre-Enrollment/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`,
      },
    },
    SimilarityThreshold: 80
  }


  const detectFaces = async () => {
    const command = new CompareFacesCommand(params)
    await rekognitionClient
      .send(command)
      .then((data) => {
        console.log(data)
        if (data.FaceMatches.length == 0) {
          router.push('/Exam/Error')
        } else {
          router.push("/Exam/ExamCoupon")
        }
      })
      .catch((err) => { 
        router.push("/Exam/Error")
      })
  }

  
  return (
    <Layout title={"Pre-exam Identification"}>
     {!isLoading && <div className='container mx-auto'>
        <h3 className='font-bold text-2xl'>Pre-exam Identification</h3>
        <div className='mx-auto max-w-6xl sm:max-w-full'>
          <form className='space-y-5'>
            <div className='flex sm:block justify-between mt-3 sm:space-y-2'>
              <Input
                label='Last Name'
                placeholder='Doe'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, LastName: e.target.value })
                }}
              />
              <Input
                label='First Name'
                placeholder='John'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, FirstName: e.target.value })
                }}
              />
              <Input
                label='Middle Name'
                placeholder='Michael'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, MiddleName: e.target.value })
                }}
              />
            </div>

            <div className='grid sm:block grid-cols-5 justify-end'>
              <div className='space-y-3'>
                <div className='flex w-full'></div>
                <p className='text-2xl font-bold'>
                  Lets take a picture of you.
                </p>
                <p className='text-sm w-64 sm:w-full leading-none'>
                  *This will be used for identification purposes. The picture
                  will cross match from the pre enrollment ID you provided.
                </p>
                <p className='w-44 sm:w-full h-12 truncate'>
                  Image:&nbsp;{imgsrc}
                </p>
                <div className='relative mx-auto w-max sm:w-full hidden sm:flex'>
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
                  type='button'
                    onClick={captureImg}
                    className='bg-slate-700 p-3 text-white w-32 hidden sm:block'
                  >
                    Capture
                  </button>
                )}

                {/* WEBCAM CAMERA FUNCTION FOR DESKTOP VIEW */}
                <button
                  type='button'
                  className='sm:hidden font-semibold bg-tertiary text-white p-2'
                  onClick={() =>
                    openCamera ? setOpenCamera(false) : setOpenCamera(true)
                  }
                >
                  {openCamera ? "Close" : "Open"} Camera
                </button>
              </div>
              <div className='sm:hidden col-span-3 col-start-3'>
                <h4 className='font-semibold text-2xl'>CAMERA</h4>
                <div className='h-max w-max space-y-2  bg-gray-200'>
                  {openCamera && (
                    <div className='relative mx-auto w-max flex'>
                      <Webcam
                        audio={false}
                        mirrored={true}
                        className='mx-auto'
                        screenshotFormat='image/jpeg'
                        ref={webcamRef}
                        width={450}
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
                  )}
                  {showBtnCapture && openCamera && (
                    <button
                      type='button'
                      onClick={captureImg}
                      className='bg-slate-700 p-3 text-white w-32'
                    >
                      Capture
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div onClick={checkEnrollee}>
              <Button
                link={"/Exam/Pre-Exam"}
                btnText='NEXT'
                btnType={"submit"}
              />
            </div>
          </form>
        </div>
      </div>}
      {isLoading && <div className='z-50  absolute mx-auto inset-0 flex flex-col justify-center items-center gap-y-7'>
        <CircleLoader
          color={"#0000FF"}
          className='my-auto'
          loading={isLoading}
          size={150}
        />
        <h3 className='text-3xl sm:text-xl font-bold'>
          Face Cross Matching Please wait ...
        </h3>
      </div>}
    </Layout>
  )
}

export default App
