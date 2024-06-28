"use client"
import React from 'react'
import Sidebar from '../_components/sidebar/Sidebar'

const Dashboard = () => {

  return (
    <div className='flex'>

    <Sidebar/>

    <div className='p-7'>
     <h1 className='text-2xl font-semibold'>Dashboard</h1>
    </div>
          </div>
  )
}

export default Dashboard