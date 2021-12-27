import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Button = () => {
    return (
        <Link href={'/Step2'} className='cursor-pointer'> 
            <div className='bg-tertiary text-white w-52 h-16 rounded-md cursor-pointer flex justify-evenly absolute bottom-4 right-5'>
                <p className='text-center text-xl font-semibold leading-[4rem]'>NEXT</p>
                <Image className='fill-white'   src={'/icons/arrow-right-thin.svg'} height={10} width={30}/>
            </div>
        </Link>
    )
}

export default Button
