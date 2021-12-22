import React from "react"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"

const Step2 = () => {
  return (
    <Layout>
      <StepIndicator stepColor2={"highlight"} stepColor3={"secondary"} />
      <div className='relative container mx-auto'>
        <h3 className='font-bold text-2xl'>Insert the sh!t here</h3>
        <div className='mx-auto max-w-6xl'>
              //insert input field or anything here
        </div>
      </div>
    </Layout>
  )
}

export default Step2
