import React, { useState } from 'react'
import { products } from '../assets/assets'
import Card from '../components/Card'
import Buttons from '../components/Buttons';


const Shop = () => {
  const [items, setItems] = useState(products);
  const filterItems = [...new Set(products.map((val)=> val.category))]
  const handleFilterItems = (cat) => {
    const newItems = products.filter((newval) => newval.category === cat)
    setItems(newItems)
  }



  return (
    <div className='container w-full flex md:flex-row flex-col gap-5  md:w-[90%] p-5 md:p-12 lg:p-24' id='shop'>
      <div className='md:w-1/4'>
        <h3 className='text-2xl mb-2'>Browse By</h3>
        <hr className='md:w-3/4 bg-black h-[2px]'/>
        <Buttons filterItems={filterItems} 
        handleFilterItems={handleFilterItems} 
        setItems={setItems} />
      </div>
      <div className='w-full flex justify-center gap-2'>
      <Card items={items} />
      </div>
    </div>
  )
}

export default Shop