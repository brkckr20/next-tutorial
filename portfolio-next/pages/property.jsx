import Image from 'next/image'
import React from 'react';
import propertyImage from '../public/assets/property.jpg';

const property = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh]  bg-black/70 z-10'>
                    <Image className='absolute z-10' objectFit='cover' layout='fill'
                        src={propertyImage}
                        alt="/" />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <h2 className='py-2 text-black'>Property</h2>
                        <h3>React JS / Tailwind / Firebase</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default property