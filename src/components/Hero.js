import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Hero() {
  //for loop
  return (
    <div className="hero min-h-[87vh] bg-[#E3F4F4] p-8 flex justify-center">
        <div className="hero-content flex lg:flex-row flex-col-reverse">
            <div>
            <h1 className="text-[52px] font-extrabold text-neutral-900">Perpendek link<br/> dengan sekali klik !</h1>
            <p className="py-6 text-2xl font-light text-neutral-700">Deskripsi singkat mengenai short link uhuy</p>
            <div className='flex'>
                <input type="text" placeholder="Masukkan link panjangmu" className="input input-bordered w-full  mb-5 " />
            </div>
            {/* <div className="alert alert-info bg-[#E3F4F4] border-black flex justify-center mb-8 w-[450px]">
              <span>Masukkan link panjangmu</span>
            </div> */}
            <div className='flex'>
                <span className='text-white alert alert-info bg-[#0C4C4C] flex justify-center w-[134px] h-[54px] rounded-r-none'>Linkmate/</span>
                <input type="text" placeholder="Masukkan link pendekmu" className="input input-bordered w-full max-w-xs mb-5 rounded-l-none h-[54px] focus:outline-none" />
            </div>
            <button className="btn bg-[#0C4C4C] text-white w-[153px] h-[59px] hover:bg-[#5c9f9f]">Potong !</button>   
            </div>
            <div className="">
              <div > //if

              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json" 
                style={{ height: '70vh', width: '30vw', }}>
              </Player>
              </div>
            </div>
        </div>
    </div>
  )
}
