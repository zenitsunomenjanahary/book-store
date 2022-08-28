import React from 'react'
import { premiumData } from '../data/data'
import premiumImg from "../images/premium.png";

const Premium = () => {
  return (
    <div className='bg-[#FDF8EE] px-4 py-24 md:flex md:justify-around items-center'>
        <img  src={premiumImg} alt='premium'/>
        <div className=''>
            <h1 className='text-5xl font-bold text-[#050C26]'>Premium <span className='text-[#FF7426]'>Learning</span> </h1>
            <h1 className='text-5xl font-bold text-[#050C26]'>Experience</h1>
            <div className='my-6'>
                {
                    premiumData.map((item)=>(
                        <div key={item.id} className="flex mb-2">
                            <div className='bg-[#4d2c5e] p-4 rounded'>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div className='px-2'>
                                <h1 className='text-[#050C26] text-xl font-medium '>{item.title}</h1>
                                <h1 className='text-[#8a8a8a] text-base '>{item.description}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Premium