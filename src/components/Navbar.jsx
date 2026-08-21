import React from 'react'
import { navMenu } from '../assets/asstes.js'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='fixed w-full py-4 z-50 backdrop-blur-3xl'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center'>
          {/* LOGO */}
          <div className='text-2xl font-bold text-zinc-800'>
            <span>THE - </span>
            <span className='text-teal-600 font-orbitron'>ANAS</span>
          </div>
          {/* MENU */}
          <div className='hidden md:flex space-x-8 border-gray-200 rounded-full px-10 py-4 border'>
            {navMenu.map((item, index)=>(
              <a key={index} href={`#${item.toLowerCase()}`} className="cursor-pointer">{item}</a>
            ))}
          </div>
          {/* BUTTONS */}
          <div>
            <button className='px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-900 hover:translate-y-1 transition duration-300'>
              <a href="https://drive.google.com/file/d/1uPTKXvKeqH5vf4EWMMFSC946MliiRa_6/view?usp=drivesdk">Resume</a>
                <FaArrowRight className='text-gray-500 text-sm'/>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar