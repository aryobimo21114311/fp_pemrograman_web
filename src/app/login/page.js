import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white min-h-screen flex justify-center items-center'>
      <div className="card bg-[#E3F4F4] shadow-2xl shadow-[#E3F4F4] w-[90%] max-w-[420px] h-auto rounded-[53px]">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title my-8">Masuk</h2>
          <input type="text" placeholder="Nama Pengguna" className="input input-bordered w-full max-w-xs mb-5" />
          <div className="form-control w-full max-w-[320px] mb-5">
            <input type="password" placeholder="Kata Sandi" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text-alt underline hover:cursor-pointer">Lupa Password?</span>
            </label>
          </div>
          <div className='flex flex-col items-center'>
            <button className="btn rounded-full border-[0.3px] border-slate-400 bg-transparent w-[70%] h-8 mb-5 hover:bg-white">Masuk</button>
            <p>Tidak punya akun? <Link href={'/register'} className="font-medium text-base">
              <span className='font-bold underline hover:cursor-pointer'>Daftar</span>
            </Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}