import Image from 'next/image'
import React from 'react'
import pp from '/public/assets/pp.jpg'

export default function TeamsCard({name, nim}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-52 items-center">
        <div className="avatar p-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src={pp} width={0} height={0} alt="img"/>
            </div>
        </div>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">{nim}</h2>
            <p>Click the button to watch on Jetflix app.</p>
        </div>
    </div>
  )
}
