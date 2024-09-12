import Nav from '@/Components/Nav/Nav'
import Footer from '@/Components/Nav/Sections/Footer'
import Page1 from '@/Components/Nav/Sections/Page1'
import Page2 from '@/Components/Nav/Sections/Page2'
import Page3 from '@/Components/Nav/Sections/Page3'
import Page4 from '@/Components/Nav/Sections/Page4'
import Testimonials from '@/Components/Nav/Sections/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Nav/>
            <Page1/>
            <Page2/>
            <Page3/>
            <Testimonials/>
            <Page4/>
            <Footer/>
    </div>
  )
}

export default page
