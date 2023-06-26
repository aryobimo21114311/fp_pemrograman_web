import React from 'react'
import TeamsCard from './TeamsCard'

export default function Teams() {
  return (
    <div className='min-h-screen w-full bg-[#0C4C4C] flex items-center flex-col'>
        <div className='flex flex-col items-center my-10'>
            <h1 className='font-extrabold text-3xl text-[#E9F5F5]'>Tim Kita</h1>
        </div>
        <div className='grid grid-cols-2 flex-wrap gap-5 max-w-[70vw] justify-center items-center'>
            <TeamsCard name={"Aryo Bimo Wicaksono"} nim={"21.11.4311"}/>
            <TeamsCard name={"Ameilia Nurcahyandari Sutomo"} nim={"21.11.4314"}/>
            <TeamsCard name={"Annisa Damayanti"} nim={"21.11.4260"}/>
            <TeamsCard name={"Mauhiba Salmaa Ghaisani"} nim={"21.11.4264"}/>
        </div>
    </div>
  )
}
