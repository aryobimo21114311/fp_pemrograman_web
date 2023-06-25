import React from 'react'

export default function page() {
  return (
    <div className='bg-white w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className="card bg-[#E3F4F4] shadow-2xl shadow-[#E3F4F4] w-[540px] h-[646px] rounded-[53px]">
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title my-8">LinkMate</h2>
          <input type="text" placeholder="Nama Pengguna" className="input input-bordered w-full max-w-xs mb-5" />
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-5" />
          <div className="form-control w-full max-w-xs mb-5">
            <input type="password" placeholder="Kata Sandi" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text-alt">Kata sandi minimal 6 karakter</span>
            </label>
          </div>
          <div className='flex flex-col items-center'>
            <button className="btn rounded-full border-[0.3px] border-slate-400 bg-transparent w-32 h-8 mb-5 hover:bg-white">Daftar</button>
            <p className='mb-5'>Atau</p>
            <button className="btn rounded-full border-[0.3px] border-slate-400 bg-transparent w-32 h-8 mb-5 hover:bg-white">
              <div>
                <span className='text-[#3686F7]'>G</span>
                <span className='text-[#FF302F] lowercase'>oo</span>
                <span className='text-[#3686F7] lowercase'>g</span>
                <span className='text-[#20B15A] lowercase'>l</span>
                <span className='text-[#FFBA40] lowercase'>e</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
