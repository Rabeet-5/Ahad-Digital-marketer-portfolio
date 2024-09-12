import React from 'react'

const Page1 = () => {
  return (
    <div className='w-full  lg:h-screen h-[50vh] flex items-center justify-center text-white overflow-hidden relative lg:px-12 px-8 bg-black '>
      <img className='w-full absolute opacity-60 top-0 left-0 h-full object-cover' src="/Images/book.jpg" alt="" />

<div className='relative flex items-end gap-3  text-center flex-col z-[2]'>
<p className='text-2xl md:text-4xl lg:text-6xl'>"Facebook is the ultimate marketing tool if used properly."</p>
<h1 className=' text-md  lg:text-xl'>- Mari Smith</h1>


</div>



    </div>
  )
}

export default Page1
