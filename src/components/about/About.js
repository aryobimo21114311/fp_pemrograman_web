import React from 'react'
import Card from './Card'

export default function About() {
  return (
    <div className='min-h-screen w-full bg-[#C4DFDF] flex items-center flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='mb-20 mt-20 font-extrabold text-3xl'>Tentang LinkMate</h1>
            <p className='mb-24 text-center font-light text-2xl'>LinkMate adalah salah satu aplikasi shortlink yang<br/> ditujukan kepada para pengguna untuk<br/> memudahkan memperpendek link agar mudah<br/> untuk diingat atau mudah untuk dicari. </p>
        </div>
        <div className='flex gap-44'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
