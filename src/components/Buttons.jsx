import React, { useState } from 'react'
import { products } from '../assets/assets'

const Buttons = ({filterItems, handleFilterItems, setItems}) => {
    
  return (
    <div className='cursor-pointer flex flex-col text-md font-roboto'>
        <p onClick={()=>setItems(products)}>All Products</p>
        {
            filterItems.map(val => (
                <p onClick={() => handleFilterItems(val)} className=''>{val}</p>
            ))
        }
    </div>
  )
}

export default Buttons