import {useRef,useEffect,useCallback,useState} from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Button from '../src/components/Button'
import Webcam from "react-webcam"

import useUpdateEffect from '../src/hooks/useUpdateEffect'

const Step2 = () => {
  const webcamRef = useRef(null)
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
      setImgsrc(webcamRef.current.getScreenshot())
    },
    [webcamRef]
  );
  
  useUpdateEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter == 0 && screenshot()
  } ,[counter])
 
  
  return (
    <Layout>
      <Head>
        <title>Step 2 - Facial Identity</title>
      </Head>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-secondary"} />
      <div className='container mx-auto text-center space-y-4'>
        <h3 className='font-bold text-2xl text-left'>Let's take a picture of you</h3>
        <div className='relative mx-auto w-max flex'>
          <Webcam
            audio={false}
            mirrored={true}
            className='mx-auto'
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
      <Button link={'/Step3'} btnText={'NEXT'} btnType={'button'}/>
      <img src={imgsrc} alt="asd" width={450} height={450}/>
    </Layout>
  )
}

export default Step2
