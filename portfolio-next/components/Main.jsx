import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import {FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center'>
                <div className=''>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Burak</span></h1>
                    <h1 className='py-4 text-gray-700'>
                        A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam architecto possimus quis, alias eaque sit inventore sapiente natus quia nesciunt consectetur facere sequi! Tempora repudiandae molestiae est cupiditate. Suscipit?
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonBadgeFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main