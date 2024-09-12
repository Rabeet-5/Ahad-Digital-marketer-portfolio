import Link from 'next/link'
import React from 'react'

const MainBtn = ({href,className,children}) => {
  return (
    <div>
      <Link  href={href}>
      <button className={`${className} px-6 relative py-2 overflow-hidden btn rounded-full `}>
        <div className='absolute top-0 left-0 w-full h-full upper rounded-full bg-bluish '></div>
        <h1 className='z-[2] relative ' >{children}</h1></button>
        </Link>
    </div>
  )
}

export default MainBtn
