import React from 'react'

const Page1 = () => {
  return (
    <div className='w-full lg:px-12 px-8  bg-black relative flex items-center justify-center  flex-col text-white lg:h-screen h-[50vh] '>
              <img className='w-full absolute opacity-60 top-0 left-0 h-full object-cover' src="/Images/book.jpg" alt="" />

      <div className='relative text-center z-[2]'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl'>Feel Free To Contact Me</h1>
      <h1 className='text-md  lg:text-xl '>I am Easy To Find</h1>
      </div>
    </div>
  )
}

export default Page1
