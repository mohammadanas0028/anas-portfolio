import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='py-12 border-t border-zinc-200'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='mb-6 md:mb-0'>
                    <span className='uppercase text-2xl font-bold'>THE - MOHAMMAD ANAS</span>
                </div>
                <div className='flex space-x-6 mb-6 md:mb-0'>
                    <a href="https://www.linkedin.com/in/mohammad-anas0028?utm_source=share_via&utm_content=profile&utm_medium=member_android" className='text-teal-800 hover:text-teal-950 transition'>
                        <CiLinkedin className='w-8 h-8'/>
                    </a>
                    <a href="https://github.com/mohammadanas0028" className='text-teal-800 hover:text-teal-950 transition'>
                        <FiGithub className='w-8 h-8'/>
                    </a>
                    <a href="https://www.instagram.com/cypher_anas?igsh=MTByOW9pYmlmczJsaw==" className='text-teal-800 hover:text-teal-950 transition'>
                        <CiInstagram className='w-8 h-8'/>
                    </a>
                    <a href="https://www.facebook.com/share/1DF5gPxeEJ/" className='text-teal-800 hover:text-teal-950 transition'>
                        <CiFacebook className='w-8 h-8'/>
                    </a>
                </div>
                <div className='text-zinc-500 text-sm'>
                    @ 2026 The - Anas Devloper, All rights reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer