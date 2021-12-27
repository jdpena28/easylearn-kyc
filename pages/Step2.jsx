import React from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Webcam from "react-webcam"

const Step2 = () => {
  return (
    <Layout>
      <Head>
        <title>Step 2 - Facial Identity</title>
      </Head>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-secondary"} />
      <div className='relative container mx-auto text-center space-y-4'>
        <h3 className='font-bold text-2xl text-left'>Let's take a picture of you</h3>
        <div className='mx-auto max-w-6xl'>
          <Webcam
            audio={false}
            mirrored={true}
            className='mx-auto'
            screenshotFormat='image/jpeg'
            width={480}
          />
        </div>
        <button className="bg-slate-500 p-3 text-white w-32">Capture</button>
      </div>
    </Layout>
  )
}

export default Step2
