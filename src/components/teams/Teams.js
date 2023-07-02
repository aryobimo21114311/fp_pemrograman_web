import React from 'react'
import TeamsCard from './TeamsCard'

export default function Teams() {
  return (
    <div className='min-h-screen w-full bg-[#0C4C4C] flex items-center flex-col'>
        <div className='flex flex-col items-center my-10'>
            <h1 className='font-extrabold text-3xl text-[#E9F5F5]'>Tim Kami</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7 max-w-screen-lg mx-auto justify-center items-center'>
            <TeamsCard name={"Aryo Bimo Wicaksono"} nim={"21.11.4311"} />
            <TeamsCard name={"Ameilia Nurcahyandari S."} nim={"21.11.4314"} />
            <TeamsCard name={"Annisa Damayanti"} nim={"21.11.4260"} />
            <TeamsCard name={"Mauhiba Salmaa G."} nim={"21.11.4264"} />
        </div>

    </div>
  )
}