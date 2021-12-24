import React from "react"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Input from "../src/components/Input"
import { useState } from "react"
import { nanoid } from "nanoid"

const App = () => {
  const [enrollee, setEnrollee] = useState({
    LastName: "",
    FirstName: "",
    MiddleName: "",
    Email:""
  })
  return (
    <Layout>
      <StepIndicator stepColor2={"bg-secondary"} stepColor3={"bg-secondary"} />
      <div className='relative container mx-auto'>
        <h3 className='font-bold text-2xl'>Personal Information</h3>
        <div className='mx-auto max-w-6xl'>
          <form action='' className='space-y-5'>
            <div className='flex justify-between mt-3'>
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
            <div className='flex w-full'>
              <label className='text-xl font-semibold pl-1' htmlFor='lastName'>
                Email <br />
                <input
                  className='bg-gray-300 text-base placeholder-slate-500 w-60 h-10 rounded-md pl-1'
                  type='email'
                  name='lastName'
                  id='lastName'
                  onChange={(e) => {setEnrollee({ ...enrollee, Email: e.target.value })}}
                  required
                  placeholder='johndoe@email.com'
                />
              </label>
              <div className='w-full pl-48'>
                <h4 className='font-semibold text-2xl'>Example</h4>
                <div className='absolute h-52 w-[40%] bg-gray-200'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-2xl font-bold'>Image Upload</p>
              <p className='text-sm w-64 leading-none'>
                *This will be used for final exam to verify your identity. See
                the sample image for reference.
              </p>
              <input type='file' id='img' name='img' accept='image/*'></input>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default App
