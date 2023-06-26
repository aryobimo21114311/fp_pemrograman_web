import React from 'react'
import Navdashboard from './Navdashboard'
import Sidebar from './Sidebar'
import ListSection from './ListSection'

export default function Dashboard() {
  return (
    <div className='flex w-[100vw] h-[100vh]'>
        <Sidebar/>
        <div className='w-full h-full'>
            <Navdashboard/>
            <ListSection/>
        </div>
    </div>
  )
}