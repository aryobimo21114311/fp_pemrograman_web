import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function About() {
  return (
      <div className='min-h-screen bg-gradient-to-t from-[#0C4C4C] to-[#E9F5F5] items-center flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='mb-20 mt-20 font-extrabold text-3xl'>Tentang LinkMate</h1>
            <p className='mb-24 text-center font-light text-2xl'>LinkMate adalah salah satu aplikasi shortlink yang<br/> ditujukan kepada para pengguna untuk<br/> memudahkan memperpendek link agar mudah<br/> untuk diingat atau mudah untuk dicari. </p>
        </div>
        {/* <div className='flex lg:gap-44 gap-6'>
            <Card/>
        </div> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide>
                      <div className="card w-96 p-5 glass flex justify-center items-center">
                        <div className="card-body">
                          <h2 className="card-title">Membuat link pendek dengan sekali klik.</h2>
                          <p> Dapatkan link pendek sesuka kalian hanya dengan satu   kali klik saja.</p>
                          <div className="card-actions justify-end">
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="card max-w-96 p-5 glass justify-center items-center">
                          <div className="card-body">
                            <h2 className="card-title">Tidak dipungut biaya.</h2>
                            <p> Membuat link dengan nama sesuka hati dan tidak dipungut biaya.</p>
                            <div className="card-actions justify-end">
                            </div>
                          </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="card max-w-96 p-5 glass justify-center items-center ">
                        <div className="card-body">
                          <h2 className="card-title">Melindungi link asli.</h2>
                          <p> Melindungi asli dari pemblokiran sebuah sistem yang dianggap spam.</p>
                          <div className="card-actions justify-end">
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
              </Swiper>
    </div>
  )
}
