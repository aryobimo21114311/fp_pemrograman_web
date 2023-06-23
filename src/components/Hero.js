import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-[85vh] bg-[#E3F4F4] flex p-8">
        <div className="hero-content">
            <div>
            <h1 className="text-[52px] font-extrabold">Perpendek link<br/> dengan sekali klik !</h1>
            <p className="py-6 text-2xl font-light">Deskripsi singkat mengenai short link uhuy</p>
            <input type="text" placeholder="Masukkan link panjangmu" className="input input-bordered w-full max-w-xs mb-5" />
            <div className='flex'>
                <div className="bg-[#0C4C4C]">linkmate/</div>
                <input type="text" placeholder="Masukkan link panjangmu" className="input input-bordered w-full max-w-xs mb-5" />
            </div>
            <button className="btn bg-[#5c9f9f] text-white w-[153px] h-[59px]">Potong !</button>
            
            </div>
        </div>
    </div>
  )
}
