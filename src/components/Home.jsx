import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Javwad Ali</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer speacializing in making responsive website. Currently,I'm
            focused on building front-end web application.
        </p>
        <div>
            <button>View Work <HiArrowNarrowRight/></button>
        </div>
        </div>
    </div>
  )
}

export default Home