import { useEffect, useContext } from "react"
import Image from "next/image"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Button from "../src/components/Button"




const Step3 = () => {
  return (
    <Layout title={"Step 3 - Succesfully Verified"}>
      <StepIndicator stepColor2={"bg-highlight"} stepColor3={"bg-highlight"} />
      <div className=' w-max sm:w-full h-max  absolute text-center inset-0 m-auto'>
            <Image
              src={"/success.webp"}
              alt='green checkmark'
              height={150}
              width={150}
            />
            <h3 className='text-3xl font-bold'>Verification Success</h3>
            <p className='text-lg'>
              You have been successfully verified. <br /> You can now go back to
              take your course.
            </p>
      </div>
      <Button
        btnType={"button"}
        btnText={"Go Back"}
        classname={"sm:absolute bottom-3 right-4"}
        link={
          "https://www.easylearn.ph/s/courses/61bc5b540cf2cc9c9c47f220/take"
        }
      />
    </Layout>
  )
}

export default Step3
