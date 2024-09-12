"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function App() {
    let array = [
     
        {
            text: `"I’m thrilled with the exceptional service Ahad provided for our eCommerce ads. Their support is incredibly user-friendly and efficient!"`,
            img: "/Images/photo1.jpg",
            name: "Waylon Lyons",
            location: "Successful Store Owner"
        },
        {
            text: `"Ahad has been a game-changer for our eCommerce store. The service is fantastic, and their customer support is incredibly helpful!"

`,
            img: "/Images/photo2.jpg",
            name: "Megan Huber",
            location: "Successful Store Owner"
        },
        {
            text: `"Our experience with Ahad has been outstanding. Their expertise in eCommerce ads and their supportive team have made a huge difference!"

`,
            img: "/Images/photo3.jpg",
            name: "Jarrett Perkins",
            location: "Successful Store Owner"
        },
        {
            text: `"I am happier with the results from Ahad’s eCommerce ad services. Their customer support is top-notch and incredibly easy to work with!"`,
            img: "/Images/photo4.jpg",
            name: "Ignacio Briggs",
            location: "Successful Store Owner"
        },
        {
            text: `"Ahad’s eCommerce ad solutions are impressive. The service is reliable, and the customer support is friendly and responsive!"`,
            img: "/Images/photo5.jpg",
            name: "Gary Hogan",
            location: "Successful Store Owner"
        },
        {
            text: `"Thanks to Ahad, our eCommerce ads have never performed better. Their service and support are truly exceptional and user-friendly!"`,
            img: "/Images/photo6.jpg",
            name: "Blake Dillon",
            location: "Successful Store Owner"
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 25
                    },
                    1280: {
                        slidesPerView: 3.4,
                        spaceBetween: 30
                    }
                }}
                className="mySwiper"
            >
                {
                    array.map((elem, index) => (
                        <SwiperSlide key={index} className='border-grayish cursor-grab slider h-full !flex md:gap-8 gap-5 flex-col justify-between items-center px-5 md:py-6 py-5 rounded-xl border-[1px]'>
                               <div className='w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-orange-100 overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={elem.img} alt="" />
                                </div>
                            
                            <p className='text-xs text-grayish sm:text-sm'>{elem.text}</p>
                            <div className='!flex items-start justify-between w-full'>
                            <div>
                                    <h1 className='font-bold text-sm sm:text-base'>{elem.name}</h1>
                                    <h1 className='opacity-60 text-xs sm:text-sm'>{elem.location}</h1>
                                </div>
                            <img className='w-20' src="/Images/stars.png" alt="" />
                              
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}