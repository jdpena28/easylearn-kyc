import React from "react"
import Layout from "../src/components/Layout"
import StepIndicator from "../src/components/StepIndicator"
import Input from "../src/components/Input"

const App = () => {
  const label = [
    {
      label: "Last Name",
      placeholder: "Doe",
    },
    {
      label: "First Name",
      placeholder: "John",
    },
    {
      label: "Middle Name",
      placeholder: "Michael",
    },
  ]
  return (
    <Layout>
      <StepIndicator stepColor2={"secondary"} stepColor3={"secondary"} />
      <div className='container mx-auto px-24'>
        <h3 className='font-bold text-2xl'>Personal Information</h3>
        <div className='mx-auto max-w-6xl'>
          <form action=''>
            <div className='flex justify-between mt-3'>
              {label.map((item) => {
                return (
                  <Input label={item.label} placeholder={item.placeholder} />
                )
              })}
            </div>
            <div>
              <div className='flex flex-col'>
                <label
                  className='text-xl font-semibold pl-1'
                  htmlFor='lastName'
                >
                  Email
                </label>
                <input
                  className='bg-gray-300 placeholder-slate-500 w-60 h-10 rounded-md pl-1'
                  type='email'
                  name='lastName'
                  id='lastName'
                  required
                  placeholder='johndoe@email.com'
                />
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default App
