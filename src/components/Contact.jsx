import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setStatus('Sending...')

    emailjs
      .sendForm(
        'service_zzyd6ur',
        'template_yd53ewc',
        form.current,
        {
          publicKey: '7u5qwkFwhfelsNUgA',
        }
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
          setStatus('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <div id='contact' className='py-20'>
      <div className='max-w-7xl mx-auto px-6'>

        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
            GET IN <span className='text-teal-900'>TOUCH</span>
          </h1>

          <p className='mb-2'>
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>

          <form
            ref={form}
            onSubmit={sendEmail}
            className='space-y-6'
          >

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

              <div>
                <input
                  type='text'
                  name='name'
                  required
                  className='px-4 py-3 w-full border border-zinc-500 rounded-xl outline-none'
                  placeholder='Enter Name'
                />
              </div>

              <div>
                <input
                  type='email'
                  name='email'
                  required
                  className='px-4 py-3 w-full border border-zinc-500 rounded-xl outline-none'
                  placeholder='Enter Email'
                />
              </div>

            </div>

            <div>
              <input
                type='text'
                name='subject'
                required
                className='px-4 py-3 w-full border border-zinc-500 rounded-xl outline-none'
                placeholder='Enter Subject'
              />
            </div>

            <div>
              <textarea
                name='message'
                required
                className='px-4 h-40 py-3 w-full border border-zinc-500 rounded-xl outline-none'
                placeholder='Enter Message'
              />
            </div>

            <div className='flex items-center justify-center'>

              <button
                type='submit'
                disabled={status === 'Sending...'}
                className='flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white text-center cursor-pointer hover:bg-zinc-900 transition rounded-full disabled:opacity-50'
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}

                <FaArrowRight className='text-sm' />
              </button>

            </div>

            {status && (
              <p className='text-center mt-4'>
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact