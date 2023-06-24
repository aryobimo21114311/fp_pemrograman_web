import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-[87vh] bg-[#E3F4F4] flex p-8">
        <div className="hero-content">
            <div>
            <h1 className="text-[52px] font-extrabold">Perpendek link<br/> dengan sekali klik !</h1>
            <p className="py-6 text-2xl font-light">Deskripsi singkat mengenai short link uhuy</p>
            <div className="alert alert-info bg-[#E3F4F4] border-black flex justify-center mb-8 w-[450px]">
              <span>Masukkan link panjangmu</span>
            </div>
            <div className='flex'>
                <span className='text-white alert alert-info bg-[#0C4C4C] flex justify-center w-[134px] h-[54px] rounded-r-none'>Linkmate/</span>
                <input type="text" placeholder="Masukkan link panjangmu" className="input input-bordered w-full max-w-xs mb-5 rounded-l-none h-[54px] focus:outline-none" />
            </div>
            <button className="btn bg-[#0C4C4C] text-white w-[153px] h-[59px] hover:bg-[#5c9f9f]">Potong !</button>   
            </div>
        </div>
    </div>
  )
}
