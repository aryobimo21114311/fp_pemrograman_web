import React from 'react'
import Image from 'next/image';
import copy from '/public/assets/copy.svg'
import deleteIcon from '/public/assets/deleteIcon.svg'

export default function DashSection() {
  return (

    <div className="overflow-x-auto mt-10 px-8"> 
        <h1 className='font-bold text-2xl mb-8'>Dashboard</h1>
        <table className="table table-zebra">
            <div className='flex'>
                <span className='text-black alert alert-info bg-[#5c9f9f] flex justify-center w-[150px] h-[54px] rounded-r-none'>Email</span>
                <input type="text" placeholder="" className="input bg-[#C4DFDF] input-bordered-black w-full max-w-xl mb-5 rounded-l-none h-[54px] focus:outline-none" />
            </div>
            <div className='flex'>
                <span className='text-black alert alert-info bg-[#5c9f9f] flex justify-center w-[150px] h-[54px] rounded-r-none'>Nama Pengguna</span>
                <input type="text" placeholder="" className="input bg-[#C4DFDF] input-bordered-black w-full max-w-xl mb-5 rounded-l-none h-[54px] focus:outline-none" />
            </div>
            <div className='flex'>
                <span className='text-black alert alert-info bg-[#5c9f9f] flex justify-center w-[150px] h-[54px] rounded-r-none'>Nomor Telepon</span>
                <input type="text" placeholder="" className="input bg-[#C4DFDF] input-bordered-black w-full max-w-xl mb-5 rounded-l-none h-[54px] focus:outline-none" />
            </div>
            <div>
                <button className="btn bg-[#0C4C4C] text-white w-[153px] h-[59px] hover:bg-[#5c9f9f]">Submit</button>   
            </div>
        </table>  
    </div>
  )
}