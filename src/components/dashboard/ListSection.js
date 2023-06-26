import React from 'react'
import Image from 'next/image';
import copy from '/public/assets/copy.svg'
import deleteIcon from '/public/assets/deleteIcon.svg'

export default function ListSection() {
  return (
    <div className="overflow-x-auto mt-10 px-8">
        <h1 className='font-bold text-2xl mb-8'>List</h1>
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Link Panjang</th>
                <th>Link Pendek</th>
                <th>Copy</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>25-06-2023</td>
                <td>https://www.garuda-indonesia.com/id/id/index</td>
                <td>garuda</td>
                <td className='hover:bg-base-300'>
                    <Image src={copy} width={0} height={25} alt={'img'}/>
                </td>
                <td className='hover:bg-base-300 '>
                    <Image src={deleteIcon} width={0} height={25} alt={'img'}/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}