import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-[#E3F4F4] p-8">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Beranda</a></li>
                <li>
                <a>Tentang</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>List</a></li>
                <li><a>Kontak</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl font-bold">LinkMate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-10 text-2xl">
            <li><a>Beranda</a></li>
            <li tabIndex={0}>
                <details>
                <summary>Tentang</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>List</a></li>
            <li><a>Kontak</a></li>
            </ul>
        </div>
        <div className="navbar-end gap-5">
            <Link href="/login" className='btn text-2xl font-normal rounded-[34px] border-black'>Masuk</Link>
            <a className="btn text-2xl font-normal rounded-[34px] bg-[#0C4C4C] text-white">Daftar</a>
        </div>
    </div>
  )
}
