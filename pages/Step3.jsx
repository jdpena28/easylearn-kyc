import React from "react"
import Head from "next/head"
import Image from "next/image"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Button from '../src/components/Button'

const Step3 = () => {
  return (
    <Layout>
      <Head>
        <title>Step 3 - Succesfully Verified</title>
      </Head>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-highlight"} />
      <div className=' w-max h-max  absolute text-center inset-0 my-auto mx-auto'>
        <Image src={"/success.png"} alt="green checkmark" height={150} width={150} />
        <h3 className='text-3xl font-bold'>Verification Success</h3>
        <p className='text-lg'>
          You have been successfully verified. <br /> You can now go back to
          take your course.
        </p>
      </div>
      <Button btnType={'button'} btnText={'Go Back'} link={"https://www.easylearn.ph/s/courses/61bc5b540cf2cc9c9c47f220/take"}/>
    </Layout>
  )
}

export default Step3
