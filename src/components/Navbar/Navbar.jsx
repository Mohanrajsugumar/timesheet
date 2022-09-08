import React from 'react'
import "./Navbar.css"
import {NotificationsNone,Language,Settings } from '@mui/icons-material';
import ZlendoImages from '../Images/ZlendoLogo.PNG'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarwrapper'>
            <div className='topLeft'>
               <img src={ZlendoImages} alt="Logo" className='zlendologo'/>
                </div>
            <div className='topRight'>
                <div className='topbariconContainer'>
                  <NotificationsNone />
                </div>
                <div className='topbariconContainer'>
                  <Language />
                </div>
                <div className='topbariconContainer'>
                  <Settings />
                </div>
                <img src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
