import React from 'react';
import ProjectItem from './ProjectItem';
import zillowPic from '../public/assets/zillow.png'
import crypto from '../public/assets/crypto.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title="Property Finder" projectUrl="/property" backgroundImg={zillowPic} />
                    <ProjectItem title="Crypto App" projectUrl="/crypto" backgroundImg={crypto} />

                </div>
            </div>
        </div>
    )
}

export default Projects