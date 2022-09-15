import React from 'react'
import './Edituser.css'
import {LocationSearching, CalendarToday, MailOutline, PermIdentity, PhoneAndroid,Publish} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function UserList() {
  return (
     <div className='user'>
    <div className="userTitleContainer">
        <h3 className="userTitle">Update Your Information</h3>
      
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
                {/* <span className="userShowInfoTitle">9876543210</span> */}
                <input type="tel" name="PhoneNumber" id="" placeholder='Enter Your Mobile Number'/>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                {/* <span className="userShowInfoTitle">Jon@gmail.com</span> */}
                <input type="email" name="Email" id="" placeholder='Enter your Emaid ID'/>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                {/* <span className="userShowInfoTitle">India,Chennai</span> */}
                <textarea plcaceholder='Enter Your Address' name="" id="" cols="35" rows="2" ></textarea>
                </div>
        {/* <button className="UserAddButton">Confirm</button> */}
        

        <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
        
          <Button className="UserAddButton" variant="contained" {...bindTrigger(popupState)}>
            Confirm
          </Button>
         
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The user details updated successfully.
             <Link to="/user" className='editbtntxt'>
            <button>Ok</button>
             </Link>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
           </div>
               
        </div>
 
    </div>
    </div>
  )
}
