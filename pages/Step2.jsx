import React from "react"
import Head from "next/head"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"

const Step2 = () => {
  return (
    <Layout>
        <Head>
            <title>Step 2 - Facial Identity</title>
        </Head>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-secondary"} />
      <div className='relative container mx-auto'>
        <h3 className='font-bold text-2xl'>Insert the sh!t here</h3>
        <div className='mx-auto max-w-6xl'>
              //insert the webcam here
        </div>
      </div>
    </Layout>
  )
}

export default Step2
