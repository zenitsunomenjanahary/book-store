import React from 'react'
import lightImg from "../images/casual-life-3d-idea-lamp 1.png";
import arrowImg from "../images/arrow.png";
import {AiFillClockCircle, AiFillCamera, AiOutlineDownload} from "react-icons/ai"
import { tracksData } from '../data/data';

const CardTrack = () => {
    return(
        
        <div className=' px-4 md:px-28 md:flex mb-20 md:justify-center md:space-x-4'>
            {
                tracksData.map((item)=>(
                    <div key={item.id} className="p-4 rounded-md shadow-lg w-full">
                        <div className='flex h-[250px]  shadow-lg rounded-lg'>
                            <img className='rounded-lg w-full' src={item.image} alt={item.title}/>
                        </div>
                        <div>
                            <h1 className='text-sm text-[#8a8a8a]'>{item.category}</h1>
                            <h1 className='text-xl font-medium'>{item.title}</h1>
                            <h1 className='text-2xl text-[#ffa135] font-bold'>${item.price}</h1>
                        </div>
                        <div className='md:flex md:space-x-5 my-2'>
                            <div className='flex items-center'>
                                <AiFillClockCircle/>
                                <span className='text-[#acacac] text-base'>{item.hours}</span>
                            </div>
                            <div className='flex items-center'>
                                <AiFillCamera/>
                                <span className='text-[#acacac] text-base'>{item.courses} courses </span>
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineDownload/>
                                <span className='text-[#acacac] text-base'>{item.sales} sales</span>
                            </div>
                        </div>
                        <button className='bg-[#ffa135] text-white font-medium px-4 py-2 rounded-full'>Join Course</button>
                    </div>
                ))
            }
        </div>
    )
}

const Tracks = () => {
  return ( 
    <>
    <div className='flex flex-wrap justify-around text-center items-center'>
        <div className='flex self-start'>
            <img src={lightImg} alt="light"/>
        </div>
        <div>
            <h1 className='text-3xl font-bold'>Our Tracks</h1>
            <p className='text-[#8a8a8a]'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div>
            <img src={arrowImg} alt="arrow"/>
        </div>
    </div>
    <CardTrack/>
    </> 
  )
}

export default Tracks