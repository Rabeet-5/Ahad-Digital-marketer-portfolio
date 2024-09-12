import MainHead from '@/Components/Headings/MainHead'
import Image from 'next/image'
import React from 'react'

const P2 = () => {
  return (
    <div className='lg:px-12 flex flex-col gap-8 px-8'>
   <div className='flex flex-col gap-3'>
   <MainHead>What Makes me Unique</MainHead>
   <p className='text-center'>Ans: My Results</p>
   </div>
<div className='flex flex-wrap gap-12  justify-center '>
<Image width={500} height={100} src="/Images/Img1.jpg" alt="" />
<Image width={500} height={100} src="/Images/Img2.jpg" alt="" />
<Image width={500} height={100} src="/Images/Img3.jpg" alt="" />
<Image width={500} height={100} src="/Images/Img4.jpg" alt="" />
<Image width={500} height={100} src="/Images/Img6.jpg" alt="" />
</div>


    </div>
  )
}

export default P2
