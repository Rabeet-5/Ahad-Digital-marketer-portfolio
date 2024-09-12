import Nav from '@/Components/Nav/Nav'
import React from 'react'
import P1 from './compi/P1'
import P2 from './compi/P2'
import P3 from './compi/P3'
import Footer from '@/Components/Nav/Sections/Footer'

const page = () => {
  return (
    <div >
      <Nav/>
      <P1/>
      <P2/>
      <P3/>     
      <Footer/>
    </div>
  )
}

export default page
