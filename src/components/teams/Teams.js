import React from 'react'
import TeamsCard from './TeamsCard'

export default function Teams() {
  return (
    <div className='min-h-screen w-full bg-white flex items-center flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='mb-20 mt-20 font-extrabold text-3xl'>Tim Kita</h1>
        </div>
        <div className='flex flex-wrap gap-36 max-w-[70vw] justify-center items-center'>
            <TeamsCard name={"Annisa Damayanti"} nim={"21.11.4260"}/>
            <TeamsCard name={"Aryo Bimo Wicaksono"} nim={"21.11.4311"}/>
            <TeamsCard name={"Mauhiba Salmaa Ghaisani"} nim={"21.11.4264"}/>
            <TeamsCard name={"Ameilia Nurcahyandari Sutomo"} nim={"21.11.4314"}/>
        </div>
    </div>
  )
}
