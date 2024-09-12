import React from 'react'

const MainHead = ({className,children}) => {
  return (
    <div>
      <h1 className={`${className} font-bold text-5xl text-center  `}>{children}</h1>
    </div>
  )
}

export default MainHead
