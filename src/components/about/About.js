import React from 'react'
import Card from './Card'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function About() {
  return (
    <div className='min-h-screen  bg-[#C4DFDF]  items-center flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='mb-20 mt-20 font-extrabold text-3xl'>Tentang LinkMate</h1>
            <p className='mb-24 text-center font-light text-2xl'>LinkMate adalah salah satu aplikasi shortlink yang<br/> ditujukan kepada para pengguna untuk<br/> memudahkan memperpendek link agar mudah<br/> untuk diingat atau mudah untuk dicari. </p>
        </div>
        {/* <div className='flex lg:gap-44 gap-6'>
            <Card/>
        </div> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide>Membuat link pendek dengan sekali klik.</SwiperSlide>
                    <SwiperSlide>Tidak dipungut biaya.</SwiperSlide>
                    <SwiperSlide>Melindungi link asli.</SwiperSlide>
                    <SwiperSlide>Melindungi link asli.</SwiperSlide>
                    <SwiperSlide>Melindungi link asli.</SwiperSlide>
              </Swiper>
    </div>
  )
}
