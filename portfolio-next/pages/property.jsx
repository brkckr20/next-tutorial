import Image from 'next/image'
import React from 'react'

const property = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <img className='absolute z-10' objectFit='cover' layout='fill'
                        src="https://images.unsplash.com/photo-1657299142018-4f7f33aea18c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="/" />
                </div>
            </div>
        </div>
    )
}

export default property