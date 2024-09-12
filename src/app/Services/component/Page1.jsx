import MainHead from '@/Components/Headings/MainHead'
import React from 'react'
import Card from './Card'

const Page1 = () => {
    let array = [
        {
            h1:"Facebook Ads",
            img:"/Images/fad.jpg"
        },
        {
            h1:"Instagram Ads",
            img:"/Images/insta.jpg"
        },
        {
            h1:"Shopify Ads",
            img:"/Images/shop.png"
        },
        {
            h1:"Brands Ads",
            img:"/Images/nike.jpg"
        },
        {
            h1:"E-Commerce Video Making",
            img:"/Images/video.jpg"
        },
        {
            h1:"Ads Script",
            img:"/Images/script.jpg"
        },
        {
            h1:"Lead Generation",
            img:"/Images/lead.png"
        },
    ]
  return (
    <div className='lg:px-12  flex flex-col gap-12 bg-grayish text-white py-[3rem] px-8'>
      <MainHead>My Services</MainHead>
      <div className='w-full flex flex-wrap justify-center gap-[4rem] md:gap-[5rem] lg:gap-[7rem] '>
      {
    array.map(function(elem){
        return <Card item={elem}/>
    })
}
      </div>
    </div>
  )
}

export default Page1
