import Layout from "../../src/components/Layout"
import Image from "next/image"
import Button from "../../src/components/Button"

const Error = () => {
    return (
        <Layout title={"Verification Failed"}>
      <div className=' w-max h-max  absolute text-center inset-0 my-auto mx-auto'>
        <Image src={"/failed.webp"} alt='red error x mark' height={150} width={150} />
        <h3 className='text-3xl font-bold'>Verification Failed</h3>
        <p className='text-lg'>
          Verification Error, <br /> You can go back and try again to verify your identity.
        </p>
      </div>
      <Button btnType={'button'} btnText={'Verify Again'} link={"/Exam/Pre-Exam"}/>
    </Layout>
    )
}

export default Error
