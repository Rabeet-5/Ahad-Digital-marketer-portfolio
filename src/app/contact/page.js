import Nav from '@/Components/Nav/Nav'
import React from 'react'
import Page1 from './compo/Page1'
import Page4 from '@/Components/Nav/Sections/Page4'
import Footer from '@/Components/Nav/Sections/Footer'
import Page2 from './compo/Page2'

const page = () => {
  return (
    <div className='w-full '>
      <Nav/>
      <Page1/>
      <Page2/>
      <Page4/>
      <Footer/>
    </div>
  )
}

export default page
