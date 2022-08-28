import React from 'react'
import { headerItems } from '../data/data'
import logoImg from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='sm:flex sm:flex-col md:flex-row md:justify-between px-24 py-4 bg-[#FDF8EE]'>
        <img className='h-9 w-32' src={logoImg} alt="logo"/>
        <div className='md:flex items-center'>
            <ul className='font-medium md:flex'>
                {
                    headerItems.map((item)=>(
                        <li key={item.id} className="mx-4">
                            {item.label}
                        </li>
                    ))
                }
            </ul>
            <button className='bg-[#4D2C5E] text-white px-6 py-2 rounded-full'>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar