import React from 'react'

const Footer = () => {
  return (
    <div className="container font-raleway mx-auto py-8 px-4 md:px-16 lg:px-24" id='footer'>
        <hr className='bg-black h-[1px] outline-none border-none'/>
        <div className='flex flex-col justify-center items-center gap-3 my-10'>
        <h3 className='text-2xl'>Join The Paper Lovers Club</h3>
        <p className='font-roboto'>Get updates on what's new</p>
        <div className='flex flex-col w-full px-5 md:w-3/4 gap-2'>
            <label className='font-roboto'>Email *</label>
            <input type="email" name='email' className='border border-black w-full py-2' required/>
        </div>
        <div className='md:w-3/4 px-5 flex'>
            <div className='flex gap-2 items-center w-full md:w-3/4'>
                <input type="checkbox" className='w-4 h-4 outline-none' required />
                <span>Yes, subscribe me to your newsletter</span>
            </div>
            <button className='font-roboto border border-black bg-black text-white rounded-0 hover:bg-white hover:text-black duration-300 px-5 py-2 md:w-1/4'>Subscribe</button>
        </div>
        </div>
        <hr className='bg-black h-[1px] outline-none border-none'/>
        <div className='flex'>
        <div className='w-full flex md:flex-row flex-col gap-5 px-5 md:py-0 py-10 font-raleway'>
            <a href='shop' className='md:py-10 md:w-1/4 text-center md:px-10 md:border-r md:border-black'>
            <h3 className='text-2xl font-light'>Shop</h3>
            <div className='pt-3 flex flex-col gap-2'>
                <p>Note Covers</p>
                <p>Notebooks</p>
                <p>Prints</p>
                <p>Wrapping Papers</p>
                <p>Gift Cards</p>
            </div>
            </a>
            <div className='md:py-10 md:w-1/4 text-center  md:px-10 md:border-r md:border-black'>
            <h3 className='text-2xl font-light'>Store Policy</h3>
            <div className='cursor-pointer pt-3 flex flex-col gap-2'>
                <p>Shipping & Returns</p>
                <p>Store Policy</p>
                <p>Payment Methods</p>
                <p>FAQ</p>
            </div>
        </div>
        <div className='md:py-10 md:w-1/4 text-center md:px-10 md:border-r md:border-black'>
            <h3 className='text-2xl font-light'>Opening Hours</h3>
            <div className='pt-3 flex flex-col gap-2'>
                <p>Mon - Fri: 7am - 10pm</p>
                <p>Saturday: 8am - 10pm</p>
                <p>Sunday: 8am - 11pm</p>
            </div>
            </div>
            <div className='md:py-10 text-center md:w-1/4 md:px-10'>
            <h3 className='text-2xl font-light'>Come Visit</h3>
            <div className='cursor-pointer pt-3 flex flex-col gap-2'>
                <p>500 Terry Francine Street San Francisco, CA 94158</p>
                <p>info@mysite.com</p>
                <p>Tel: 123-456-7890</p>
            </div>
        </div>
        </div>
    
        </div>
        <hr className='bg-black h-[1px] outline-none border-none'/>
        <div className='flex mt-5 items-center text-[10px] md:text-lg justify-center'>
            <p>© 2025 by Lou Paperie. Developed by Musty and Designed by Wix</p>
        </div>
    </div>
  )
}

export default Footer