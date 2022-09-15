import React from 'react'
import "./UserList.css";
import {LocationSearching, CalendarToday, MailOutline, PermIdentity, PhoneAndroid,Publish} from '@mui/icons-material';
import {Link} from 'react-router-dom';


export default function UserList() {
  return (
     <div className='user'>
    <div className="userTitleContainer">
        <h3 className="userTitle">User Information</h3>
      
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://simg.nicepng.com/png/small/7-78595_asian-businessman-png-professional-man-images-png.png" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Jon</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">Jondoy78</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">01-01-2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTitle">9876543210</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">Jon@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTitle">India,Chennai</span>
                </div>
                <Link to="/editUser" className='editbtntxt'>
        <button className="UserAddButton">Edit</button>
        </Link> 
           </div>
               
        </div>
 
    </div>
    </div>
  )
}
