import React from 'react'
import Navlist from './Navlist'
import Sidebar from './Sidebar'
import ListSection from './ListSection'

export default function List() {
  return (
    <div className='flex w-[100vw] h-[100vh]'>
        <Sidebar/>
        <div className='w-full h-full'>
            <Navlist/>
            <ListSection/>
        </div>
    </div>
  )
}