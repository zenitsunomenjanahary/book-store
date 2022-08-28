import React from 'react'
import { heroFooterItems } from '../data/data'

const HeroFooter = () => {
  return (
    <div className=' mx-20 mb-4 px-6 bg-[#4D2C5E] text-white py-6 md:flex rounded-lg'>
        {
            heroFooterItems.map((item)=>(
                <div className='md:flex mb-6 text' key={item.title}>
                    <div className='flex justify-center bg-white bg-opacity-5 w-1/2 rounded-lg'>
                        <img className='w-[55px] h-[55px] flex self-center py-1' src={item.image} alt={item.title}/>
                    </div>
                    <div className='mx-4'>
                        <h1 className='text-2xl'>{item.title}</h1>
                        <p className='text-sm w-full text-gray-300'>{item.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HeroFooter