import MainBtn from '@/Components/Buttons/MainBtn'
import React from 'react'

const Card = ({item}) => {

  return (
<div className='flex flex-col items-center gap-2'>
    <div className='bg-gray-600 item   overflow-hidden rounded-[50%] w-32 h-32 '>
        <img className='w-full rounded-[50%] img   h-full object-cover' src={item.img} alt="" />
    </div>
<h1 className='text-xl '>{item.h1}</h1>
<MainBtn href={"https://wa.me/923377507229"} className={"bg-white text-black"} >Contact for details</MainBtn>
</div>
  )
}

export default Card 
