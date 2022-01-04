import {useRef,useCallback,useState,useContext} from "react"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Button from '../src/components/Button'
import Webcam from "react-webcam"

import { Storage } from "aws-amplify"

import useUpdateEffect from '../src/hooks/useUpdateEffect'

import DataContext from "../src/context/DataContext"

import rekognitionClient from "../awsconfig"
import { CompareFacesCommand } from "@aws-sdk/client-rekognition"


const Step2 = () => {
  const webcamRef = useRef(null)
  const {enrollee} = useContext(DataContext)
  const [showBtnCapture,setShowBtnCapture] = useState(false)
  const [counter,setCounter] = useState(3)

  const captureImg = () => {
    if (counter==0){
      setCounter(3)
    } else {
      setCounter(counter-1)
    }
  }
  
  const screenshot = useCallback(
     () => {
      const based64Image =  webcamRef.current.getScreenshot()
      const type = based64Image.split(';')[0].split('/')[1];
      const image = new Buffer.from(based64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
      Storage.put(`Pre-Enrollment/Webcam/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`,image,{
        contentType: `image/${type}`, // return a jpeg type
        contentEncoding: 'base64'
      }).then(() => {
        detectFaces()
      })
    },
    [webcamRef]
  );
  

 
  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  } ,[counter])
 



  const params = {
    SourceImage: {
      S3Object: {
        Bucket: 'easylearnkyc94849-dev',
        Name: `public/Pre-Enrollment/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`
      },
    },
    TargetImage: {
      S3Object: {
        Bucket: 'easylearnkyc94849-dev',
        Name: `public/Pre-Enrollment/Webcam/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`,
    }   
  }
}

  const detectFaces = async () => {
    const command = new CompareFacesCommand(params)
    await rekognitionClient.send(command)
    .then(data => {
      console.log(data)
      if (data.FaceMatches.length == 0){
        alert("No Match")
      } else {
        alert("Match")
      }
    }).catch(err => {
      alert('No match')
    })
  }
  
  
  return (
    <Layout title={'Step 2 - Facial Identity'}>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-secondary"} />
      <div className='container mx-auto text-center space-y-4 sm:my-4'>
        <h3 className='font-bold text-2xl text-left sm:text-center'>Let&apos;s take a picture of you</h3>
        <div className='relative mx-auto w-max sm:w-full flex'>
          <Webcam
            audio={false}
            mirrored={true}
            className='mx-auto sm:w-full'
            screenshotFormat='image/jpeg'
            ref={webcamRef}
            width={480}
            onUserMedia={()=>{setShowBtnCapture(true)}}
          />
         {counter>0 && <div className="h-full w-full absolute flex justify-center items-center">
            <p className="font-extrabold text-white text-6xl">{counter}</p>
          </div>}
        </div>
        {showBtnCapture&&<button onClick={captureImg} className="bg-slate-700 p-3 text-white w-32">Capture</button>}
      </div>
      <Button link={'/Step3'}  btnText={'NEXT'} btnType={'button'}/>
    </Layout>
  )
}

export default Step2
