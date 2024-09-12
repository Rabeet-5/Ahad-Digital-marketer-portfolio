import MainHead from '@/Components/Headings/MainHead'
import React from 'react'

const P3 = () => {
  return (
    <div className='lg:px-12 px-8 flex flex-col gap-10 py-12'>
      <MainHead>Some Dropshipping videos that I have created</MainHead>
      <div className='w-full justify-center flex-wrap gap-6 flex '>
        <video className='h-[40rem] mt-6' controls autoPlay loop  src="/Videos/vid1.mp4"></video>
        <video className='h-[40rem] mt-6' controls autoPlay loop   src="/Videos/vid2.mp4"></video>
        <video className='h-[40rem] mt-6' controls autoPlay loop   src="/Videos/vid3.mp4"></video>
      </div>
    </div>
  )
}

export default P3
