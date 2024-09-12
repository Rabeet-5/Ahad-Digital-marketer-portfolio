import React from 'react'
import Sweep from "@/Components/OneTime/Sweep"
import MainHead from '@/Components/Headings/MainHead'
const Testimonials = () => {
  return (
    <div className="md:pl-12 pl-8 py-12 flex flex-col gap-12 ">
<MainHead>My Client's Reviews</MainHead>
    <div className="w-full ">
      <Sweep/>
    </div>
  </div>
  )
}

export default Testimonials
