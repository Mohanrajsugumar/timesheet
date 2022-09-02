import React from 'react'
import "./Navbar.css"
import {NotificationsNone,Language,Settings } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarwrapper'>
            <div className='topLeft'>
               <span className='logo'>Timesheet</span>
                </div>
                <div className='topLeft'>
               <span className='logo'></span>
                </div>
            <div className='topRight'>
              <div>
                <Link  to="/"className='login'>Login</Link>
                <Link to="/sign" className='singin'>Signup</Link>
              </div>
                <div className='topbariconContainer'>
                  <NotificationsNone />
                  <span className='iconBadge'>2</span>
                </div>
                <div className='topbariconContainer'>
                  <Language />
                  <span className='iconBadge'>2</span>
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
