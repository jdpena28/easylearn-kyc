import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Input from "../src/components/Input"
import Button from "../src/components/Button"
import Image from "next/image"
import {useContext,useRef} from "react"
import DataContext from "../src/context/DataContext"

import { API, graphqlOperation, Storage } from 'aws-amplify'
import {createEnrollees} from '../src/graphql/mutations'


const App = () => {
  const {enrollee,setEnrollee} = useContext(DataContext)
  const imgRef = useRef('')
  
  const addEnrollee = async () => {
    /* await API.graphql(graphqlOperation(createEnrollees, {
      input: {
        ...enrollee
      }
    })) */
   /*  Storage.put(`Pre-Enrollment/${enrollee.LastName}${enrollee.FirstName}${enrollee.MiddleName}`, imgRef.current.files[0]) */
  }
  

  return (
    <Layout title={'Step 1 - Personal Information'}>
      <StepIndicator stepColor2={"bg-secondary"} stepColor3={"bg-secondary"} />
      <div className='container mx-auto'>
        <h3 className='font-bold text-2xl sm:text-center sm:mt-4'>Personal Information</h3>
        <div className='mx-auto max-w-6xl sm:max-w-full'>

          <form  className='space-y-2'>
            <div className='flex sm:block justify-between mt-3 sm:space-y-2'>
              <Input
                label='Last Name'
                placeholder='Doe'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, LastName: e.target.value })
                }}
              />
              <Input
                label='First Name'
                placeholder='John'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, FirstName: e.target.value })
                }}
              />
              <Input
                label='Middle Name'
                placeholder='Michael'
                onChange={(e) => {
                  setEnrollee({ ...enrollee, MiddleName: e.target.value })
                }}
              />
            </div>
            
            <div className='grid sm:block grid-cols-5 justify-end sm:space-y-2'>
              <div className='space-y-2'>
                <div className='flex sm:block w-full'>
                  <label
                    className='text-xl font-semibold pl-1 mb-5'
                    htmlFor='lastName'
                  >
                    Email <br />
                    <input
                      className='bg-gray-300 text-base placeholder-slate-500 w-60 sm:w-full h-10 rounded-md pl-1'
                      type='email'
                      name='lastName'
                      id='lastName'
                      onChange={(e) => {
                        setEnrollee({ ...enrollee, Email: e.target.value })
                      }}
                      required
                      placeholder='johndoe@email.com'
                    />
                  </label>
                </div>
                <p className='text-2xl font-bold'>Image Upload</p>
                <p className='text-sm w-64 leading-none'>
                  *This will be used for final exam to verify your identity. See
                  the sample image for reference.
                </p>
                <input ref={imgRef} type='file' id='img' name='img' accept='image/*'></input>
              </div>
              <div className='col-span-3 col-start-3'>
                <h4 className='font-semibold text-2xl'>Example</h4>
                <div className='h-max w-[66%] sm:w-full p-2 sm:p-0 bg-gray-200'>
                  <Image src={'/sample_id.webp'} alt="Sample ID Pic" width={441} height={282}/>
                </div>
              </div>
            </div>
            <div onClick={addEnrollee}>
            <Button link={'/Step2'} btnText="NEXT" btnType={"button"}/>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default App
