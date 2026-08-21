import React from 'react'
import { projectData } from '../assets/asstes'

const Work = () => {
  return (
    <div id='work' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        <div className='mb-16 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
                FEATURED
                <span className='text-teal-400'> 
                    PROJECTS
                </span>
          </h2>
          <p className='text-xl max-w-3xl mx-auto'>
            Cutting-edge web application built with modern technology...
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {projectData.map((project, index) => (
            <a key={index} href={project.link} target='_blank' rel='noopener noreferrer' className='group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-300 hover:-translate-y-1 duration-300'>
            <div className='relative flex items-center justify-center'>
                <img src={project.image} alt={project.title} className='w-full h-52 object-contain group-hover:opacity-90 transition'/>
                </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>
                  {project.title}
                </h3>
                <p className='text-slate-900 text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-3 mt-6'>
                  {project.tech.map((language, index) => (
                    <span key={index} className='px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full'>
                        {language}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work