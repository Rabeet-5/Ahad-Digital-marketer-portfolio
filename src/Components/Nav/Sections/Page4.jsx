import MainHead from '@/Components/Headings/MainHead'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const Page4 = () => {
  return (
    <div className='lg:px-12 bg-grayish text-white flex flex-col items-center gap-12 px-8 py-12'>
      <MainHead>Let's Connect</MainHead>

      <div className='flex md:flex-row gap-8 flex-col w-full justify-between px-12'>
<div className='flex flex-col gap-4 items-center'>
    <FaWhatsapp className='text-6xl border-white border-[1px] rounded-[50%] p-2  '/>
    <Link target='_blank' href={"https://wa.me/923377507229"}>+92 337 750 7229</Link>
</div>
<div className='flex flex-col md:ml-10 gap-4 items-center'> 
    <FaFacebook className='text-6xl border-white border-[1px] rounded-[50%] p-2  '/>
    <Link target='_blank' href={"https://www.facebook.com/profile.php?id=61563163037369&mibextid=kFxxJD"}>Abdul Ahad</Link>
</div>
<div className='flex flex-col gap-4 items-center'>
<MdEmail className='text-6xl border-white border-[1px] rounded-[50%] p-2  ' />
<Link target='_blank' href={"mailto:ajmeryahad7@gmail.com"}>ajmeryahad7@gmail.com</Link>
</div>

      </div>
    </div>
  )
}

export default Page4
