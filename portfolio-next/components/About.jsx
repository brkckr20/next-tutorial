import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-blue-500'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi nemo error asperiores beatae adipisci corrupti. Tenetur molestiae in, eum enim unde officia at, ipsam distinctio non aspernatur totam consectetur!
                    </p>
                    <p className='py-2 text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vel possimus commodi similique harum laboriosam facilis consectetur ab voluptate sed ratione fugiat expedita tempora vero hic illo quidem molestiae voluptatem optio minus, eos officiis iusto? Possimus culpa aspernatur consequuntur cupiditate accusamus facere, adipisci inventore necessitatibus!
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my latest projects
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500'>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About