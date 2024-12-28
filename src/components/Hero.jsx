import React from 'react'
import { assets, categories } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <div className="flex flex-col items-center gap-5 justify-center mt-5 md:mt-0 md:m-[4.5rem] md:w-[90%]">
        <div className='w-full px-5 flex items-center gap-10 flex-col'>
            <h1 className='text-4xl md:text-5xl font-light font-raleway mt-10'>Shop Collections</h1>
            <div className='w-full md:px-0 mr-10 md:mr-0 px-5 gap-10 py-10 grid md:grid-cols-4 grid-cols-1'>
                {
                    categories.map((item,index)=>{
                      return (
                        <div key={index} className='transform transition-transform duration-300 hover:scale-105 w-full border border-1 border-black mx-5 flex flex-col'>
                        <div>
                            <img src={item.category_image} className='w-full object-cover' alt="" />
                        </div>
                        <div className='bg-black flex flex-col text-white text-center items-center justify-center p-5 gap-3'>
                            <h3 className='text-2xl'>{item.category_name}</h3>
                            <Link to='/shop' className='cursor-pointer underline decoration-1 font-roboto '>view All</Link>
                        </div>
                    </div>
                      )
                    })
                }
            </div>
        </div>
        <div className='w-full px-5 flex items-center gap-10 flex-col'>
        <h1 className='text-5xl font-light font-raleway'>What's New</h1>
        <div className='w-full md:px-0 px-5 gap-5 py-10 grid md:grid-cols-2 grid-cols-1'>
        <a href='/blog' className='flex flex-col gap-5 cursor-pointer'>
          <img src={assets.blog1} alt="" className='border border-black w-full h-[430px]'/>
          <div className='font-roboto  text-gray-700 flex items-center flex-col'>
          <h3 className='text-3xl font-semibold'>Stories & Guides</h3>
          <p>Read Our Blog</p>
          </div>
        </a>

        <a href='/shop' className='flex flex-col gap-5 cursor-pointer'>
          <img src={assets.note_cover1} alt="" className='border border-black w-full h-[430px]'/>
          <div className='font-roboto  text-gray-700 flex items-center flex-col'>
          <h3 className='text-3xl font-semibold'>Our Products</h3>
          <p>Shop Now</p>
          </div>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Hero