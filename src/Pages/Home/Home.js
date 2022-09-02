import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
     <Navbar />
     <Sidebar />
    
    </div>
  )
}
