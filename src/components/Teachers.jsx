import React from 'react'
import planetImg from "../images/planet.png";
import arrowImg from "../images/arrow2.png";
import { teachersTracksData } from '../data/data';

const CardTrack = () => {
    return(
        
        <div className=' px-4 md:px-28 md:flex mb-20 md:justify-center md:space-x-4'>
            {
                teachersTracksData.map((item)=>(
                    <div key={item.id} className="p-4 rounded-md shadow-lg w-full">
                        <div className='flex h-[250px]  shadow-lg rounded-lg'>
                            <img className='rounded-lg w-full' src={item.image} alt={item.name}/>
                        </div>
                        <div className='my-4'>
                            <h1 className='text-xl font-medium'>{item.name}</h1>
                            <h1 className='text-sm text-[#8a8a8a]'>{item.email}</h1>
                            <h1 className='text-md text-[#8a8a8a] '>{item.bio}</h1>
                        </div>
                        <span className='text-[#ffa135]  font-medium '>J{item.degree}</span>
                    </div>
                ))
            }
        </div>
    )
}

const TeachersTracks = () => {
  return ( 
    <>
    <div className='flex flex-wrap justify-around text-center items-center'>
        <div className='flex self-start'>
            <img src={arrowImg} alt="light"/>
        </div>
        <div>
            <h1 className='text-3xl font-bold'>Our Tracks</h1>
            <p className='text-[#8a8a8a]'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div>
            <img src={planetImg} alt="planet"/>
        </div>
    </div>
    <CardTrack/>
    </> 
  )
}

export default TeachersTracks