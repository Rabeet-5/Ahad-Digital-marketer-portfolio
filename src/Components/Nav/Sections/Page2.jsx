import MainBtn from '@/Components/Buttons/MainBtn'
import React from 'react'

const Page2 = () => {
  return (
    <div className='lg:px-12 overflow-hidden bg-white px-8 py-12 items-center justify-center flex flex-col gap-9'>
      <h1 className='font-extrabold text-center text-3xl'>I'm Abdul Ahad, The Meta and Ecommerce Ads Expert</h1>
      <a className='underline decoration-[2px] underline-offset-8 ' href="mailto:ajmeryahad7@gmail.com">ajmeryahad7@gmail.com</a>
      <MainBtn href={"/work"} className={"bg-black text-white"}>See My Work</MainBtn>
    </div>
  )
}

export default Page2
