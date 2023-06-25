import React from 'react'
import Image from 'next/image'
import img from '/public/assets/img.jpg'

export default function Card() {
  return (
    <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full">
            <Image src={img} width={328} height={493} alt="img"/>
        </div> 
    </div>
  )
}
