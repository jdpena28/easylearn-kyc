import { useState, useEffect, useContext } from "react"
import Layout from "../../src/components/Layout"
import Button from "../../src/components/Button"
import Image from "next/image"
import DataContext from "../../src/context/DataContext"
import { listVouchers } from "../../src/graphql/queries"
import { updateVoucher } from "../../src/graphql/mutations"
import { API, graphqlOperation } from "aws-amplify"

const ExamCoupon = () => {
  const { id } = useContext(DataContext)
  const [voucher, setVoucher] = useState("")

 const addEnrolleeVoucher = async () => {
    API.graphql(
      graphqlOperation(listVouchers, {
        filter: {
          Enrollee_ID: {
            eq: null,
          },
        },
      })
    ).then((res) => {
      setVoucher(res.data.listVouchers.items[0])
      attachID()
    }).catch((err) =>{})
  }


  //update one voucher with enrollee id
  const attachID = async () => {
    await API.graphql(
      graphqlOperation(updateVoucher, {
        input: {
          id: voucher.id,
          Enrollee_ID: id,
          VoucherCode: voucher.VoucherCode
        },
      })
    ).then((res) => {
      console.log(res)
    })
    .catch ((err) => {})
  }

  const enrolleeVoucherIsExist = async () => {
    API.graphql(
      graphqlOperation(listVouchers, {
        filter: {
          Enrollee_ID: {
            eq: id
          },
        },
      })
    ).then((res) => {
      if (res.data.listVouchers.items.length > 0) {
        setVoucher(res.data.listVouchers.items[0])
      } else {
        addEnrolleeVoucher()
      }
    })
    .catch((err) => {
      
    })
  }

  useEffect(() => {
    enrolleeVoucherIsExist()
  }, [])

  return (
    <Layout title={"Exam Coupon Code"}>
      <div className=' w-max sm:w-full h-max  absolute  text-center inset-0 my-auto mx-auto space-y-1'>
        <Image
          src={"/success.webp"}
          alt='green checkmark'
          height={150}
          width={150}
        />
        <h3 className='text-4xl font-bold'>Verification Success</h3>
        <h4 className='text-3xl font-bold'>Your Coupon Code: </h4>
        <p className='text-2xl font-semibold text-blue-600'>
          {voucher.VoucherCode}
        </p>
        <p className='text-base'>
          Copy the Code Above, this will use to Enroll for Final Exam
        </p>
      </div>
      <Button
        btnType={"button"}
        btnText={"Go Back"}
        classname={"sm:absolute bottom-3 right-4"}
        link={"https://www.easylearn.ph/s/accesscode"}
      />
    </Layout>
  )
}

export default ExamCoupon
