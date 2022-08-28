import React from 'react'
import heroImg from "../images/hero-image.png"
const Hero = () => {
  return (
    <div className="px-24 py-12 flex items-center flex-col md:flex-row lg:flex-row bg-hero-pattern bg-cover bg-[#FDF8EE]">
        <div className=''>
            <h1 className='text-[#001529] font-bold text-3xl'>The <span className='text-[#ff7426]'>Smart</span></h1>
            <h1 className='text-[#001529] font-bold text-3xl'>Choice for <span className='text-[#ff7426]'>future</span></h1>
            <p className='text-[#8a8a8a] w-full'>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
            <div>
                <input type="text"/>
                <button>Continue</button>
            </div>
        </div>
        <img src={heroImg} alt="hero"/>
    </div>
  )
}

export default Hero