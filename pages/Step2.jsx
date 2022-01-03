import {useRef,useCallback,useState,useContext} from "react"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Button from '../src/components/Button'
import Webcam from "react-webcam"

import { Storage } from "aws-amplify"

import useUpdateEffect from '../src/hooks/useUpdateEffect'

import DataContext from "../src/context/DataContext"

const Step2 = () => {
  const webcamRef = useRef(null)
  const {enrollee} = useContext(DataContext)
  const [imgsrc,setImgsrc] = useState(null)
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
      getImg()
     /*  Storage.put(`Pre-Enrollment/Webcam/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`, webcamRef.current.getScreenshot()) */
    },
    [webcamRef]
  );

  const getImg = async () =>{
   /* const data = await Storage.get(`Pre-Enrollment/Webcam/DoeJohnMichael`,{expires:60})
   console.log(data)
   setImgsrc(data) */
  }

  
  
  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  } ,[counter])
 
  
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
      <img src={imgsrc} alt="asd" width={450} height={450}/>
    </Layout>
  )
}

export default Step2
