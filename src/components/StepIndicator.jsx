import React from "react"

const StepIndicator = ({stepColor2,stepColor3}) => {
  return (
    <div className='max-w-xl flex items-center justify-around mx-auto'>
      <div className='relative w-14 sm:w-10 h-14 sm:h-10 rounded-full bg-highlight'>
        <span className='absolute inset-0 m-auto text-3xl sm:text-2xl font-extrabold text-center leading-[3.5rem] sm:leading-[2.5rem]'>1</span>
      </div>
      <div className="w-32 sm:w-24 h-2 bg-line rounded-3xl" />
      <div className={`relative w-14 sm:w-10 h-14 sm:h-10 rounded-full ${stepColor2}`}>
        <span className='absolute inset-0 m-auto text-3xl sm:text-2xl font-extrabold text-center leading-[3.5rem] sm:leading-[2.5rem]'>2</span>
      </div>
      <div className="w-32 sm:w-24 h-2 bg-line rounded-3xl" />
      <div className={`relative w-14 sm:w-10 h-14 sm:h-10 rounded-full ${stepColor3}`}>
        <span className='absolute inset-0 m-auto text-3xl sm:text-2xl font-extrabold text-center leading-[3.5rem] sm:leading-[2.5rem]'>3</span>
      </div>
    </div>
  )
}

export default StepIndicator
