import { useEffect } from "react"
import Layout from "../../src/components/Layout"
import Button from "../../src/components/Button"
import Image from  "next/image"


const ExamCoupon = () => {
  const couponCode = ['BPLLMAPW','HNFOTZJ1','RVERXTLT','YGQQYRAL','Y6F6KYXF','YDLYVBBR','J1WDRBMG','GSSWP3KK','VFTE4XJC']
  const randomNumber = () => {
    return Math.floor(Math.random() * couponCode.length)
  }
  
  return (
    <Layout title={'Exam Coupon Code'}>
      <div className=' w-max h-max  absolute text-center inset-0 my-auto mx-auto space-y-1'>
        <Image src={"/success.png"} alt="green checkmark" height={150} width={150} />
        <h3 className='text-4xl font-bold'>Verification Success</h3>
        <h4 className='text-3xl font-bold'>Your Coupon Code: </h4>
        <p className="text-2xl font-semibold text-blue-600">{couponCode[randomNumber()]}</p>
        <p className='text-base'>
           Copy the Code Above, this will use to Enroll for Final Exam
        </p>
      </div>
      <Button btnType={'button'} btnText={'Go Back'} link={"https://www.easylearn.ph/s/accesscode"}/>
    </Layout>
    )
}

export default ExamCoupon
