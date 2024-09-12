import MainBtn from '@/Components/Buttons/MainBtn'
import React from 'react'

const Page3 = () => {
  return (
    <div className='w-full bg-grayish overflow-hidden text-white items-center py-12 justify-between lg:px-12 px-8 flex lg:flex-row flex-col lg:gap-0 gap-5'>
      <div className='lg:w-[48%] w-[100%] flex items-center flex-col gap-8'>
<h1 className='text-3xl font-bold'>Meet Abdul Ahad</h1>

<p className='text-center text-sm  lg:text-md leading-6'>
I am Abdul Ahad, an expert in Meta and eCommerce advertising, dedicated to driving unparalleled results in the digital marketing arena. With a deep understanding of Meta's powerful advertising tools and a strategic approach to eCommerce, I craft campaigns that not only reach but resonate with your target audience. My expertise lies in transforming data-driven insights into actionable strategies, ensuring every ad is optimized for maximum engagement and conversion. From elevating brand visibility to boosting sales, my mission is to deliver exceptional value and achieve extraordinary success for your business.
</p>
<MainBtn href={"/services"} className={"bg-black text-white"}>See My Services</MainBtn>

      </div>
      <div className='w-[48%] flex justify-end'>

        <img className='' src="/Images/MyPic2.png" alt="" />
      </div>
    </div>
  )
}

export default Page3
