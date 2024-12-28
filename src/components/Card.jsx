import React from 'react'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';


const Card = ({items}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, val) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(val))
    toast.success('Product Added Successfully');
    // alert("Product Added Successfully!")
  }
  
  return (
    <div>
      <ToastContainer />
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {items.map((val)=>(
                <div key={val.id} className='w-[16rem] lg:w-[13rem] sm:w-full md:w-[15rem] border border-black md:ml-5'>
                    <div className='border border-b-1 border-t-0 border-r-0 border-l-0 border-black'>
                    <img className='object-contain' src={val.image} alt={val.name} />
                    </div>
                  <div className='my-5 px-3 flex flex-col justify-center gap-3 items-center font-roboto'>
                  <h3 className='text-2xl font-semibold '>{val.name}</h3>
                  <p className='text-lg text-gray-600 font-medium'>${val.price}</p>
                  <button onClick={(e)=> handleAddToCart(e, val)} 
                  className='px-10 py-2 border border-black bg-black text-white hover:bg-white text-[15px] hover:text-black duration-300'>Add To Cart</button>
                  </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card