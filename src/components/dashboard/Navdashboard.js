import Image from 'next/image'
import React from 'react'
import pp from '/public/assets/pp.jpg';

export default function Navdashboard() {
  return (
    <div className="navbar bg-base-100 mr-9 items-start mt-3 border-b-[1px] border-base-300 h-[68px]">
        <div className="flex-1 dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
        <div className="flex justify-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-5">
                    <div className="w-10 rounded-full">
                        <Image src={ pp } width={0} height={40} alt="img"/>
                    </div>
                </label>
                <p className='mr-5'>Muhamad Yesus</p>
        </div>
    </div>
  )
}