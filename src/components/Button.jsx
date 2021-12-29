import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Button = ({btnText,btnType,link}) => {
    return (
        <Link href={link}> 
        <div className='hidden sm:flex  justify-end'>
            <button className='bg-tertiary text-white w-52 sm:w-40 h-16 sm:h-14 rounded-md flex justify-evenly items-center absolute sm:static bottom-4 right-5' type={btnType}>
                <p className='text-center text-xl font-semibold leading-[4rem]'>{btnText}</p>
                <Image className='fill-white'   src={'/icons/arrow-right-thin.svg'} height={30} width={30}/>
            </button>
        </div>
        </Link>
    )
}

export default Button
