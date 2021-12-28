import {useRef,useCallback,useState} from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Webcam from "react-webcam"

const Step2 = () => {
  const webcamRef = useRef(null)
  const [imgsrc,setImgsrc] = useState(null)
  const capture = useCallback(
    () => {
      setImgsrc(webcamRef.current.getScreenshot())
    },
    [webcamRef]
  );
  return (
    <Layout>
      <Head>
        <title>Step 2 - Facial Identity</title>
      </Head>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-secondary"} />
      <div className='container mx-auto text-center space-y-4'>
        <h3 className='font-bold text-2xl text-left'>Let's take a picture of you</h3>
        <div className='mx-auto max-w-6xl'>
          <Webcam
            audio={false}
            mirrored={true}
            className='mx-auto'
            screenshotFormat='image/jpeg'
            ref={webcamRef}
            width={480}
          />
        </div>
        <button onClick={capture} className="bg-slate-700 p-3 text-white w-32">Capture</button>
      </div>
      <img src={imgsrc} alt="asdas" width={320} height={320}/>
    </Layout>
  )
}

export default Step2
