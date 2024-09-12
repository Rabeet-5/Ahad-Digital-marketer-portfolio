import React from 'react'

const P1 = () => {
  return (
    <div className='lg:px-12 flex-wrap gap-4 flex justify-between  px-8 py-24 '>
      <div className=''>
        <h1>Total Clients:</h1>
        <h1 className='lg:text-9xl text-8xl md:text-8xl leading-none font-bold'>100+</h1>
      </div>
      <div>
        <h1>Active Clients:</h1>
        <h1 className='lg:text-9xl text-8xl md:text-8xl leading-none font-bold'>10+</h1>
      </div>
      <div>
        <h1>Average Rating:</h1>
        <h1 className='lg:text-9xl text-8xl md:text-8xl leading-none font-bold'>4.5</h1>
      </div>
    </div>
  )
}

export default P1
