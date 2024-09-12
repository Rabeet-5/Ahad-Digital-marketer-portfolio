import MainBtn from '@/Components/Buttons/MainBtn'
import MainHead from '@/Components/Headings/MainHead'
import React from 'react'

const Page2 = () => {
  return (
    <div className=' px-8  flex flex-col items-center gap-12 py-12 lg:px-12 '>
      <MainHead>Marketing Consultancy</MainHead>
      <div className=' text-start md:text-md text-sm md:text-center flex flex-col gap-3 '>






<p>      If you're looking to elevate your marketing strategy, my consultancy services are designed to give you the guidance you need. Whether you're a startup, SME, or established corporation, I offer tailored consultancy sessions—by the hour, half-day, or full-day—depending on your business requirements. As a Meta ads expert with deep knowledge in eCommerce and brand ads, I bring years of hands-on experience across multiple industries.
</p>
      <p>I collaborate with freelancers, small businesses, and large corporations, offering insights on marketing strategies, campaign challenges, or specific issues you're facing. Whether you're struggling with your digital presence, branding, Meta ads, or customer outreach, I provide actionable advice to help you overcome your marketing hurdles and boost your performance.
      </p>
      <p>My consultancy services are adaptable to your needs, whether it's a quick brainstorming session over Zoom, a strategy review via WhatsApp, or an on-site, half-day team session. I can work with you to assess new campaigns, audit your Meta ads, or help unlock your team's creative potential in eCommerce and brand advertising.
      </p>
      <p className='md:block hidden'>Consider me an extension of your team, bringing fresh ideas, a new perspective, and years of experience to help your business succeed. From crafting innovative campaigns to refining your Meta ad strategies, I’m here to help you navigate the complexities of modern marketing.
      </p>
      <p>Feel free to reach out anytime for more details or to schedule a consultation!</p>

      </div>
      <MainBtn className={"bg-black text-white"} href={"https://wa.me/923377507229"}>Get in Touch</MainBtn>
    </div>
  )
}

export default Page2
