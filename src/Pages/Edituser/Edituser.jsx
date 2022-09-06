import React from 'react'
import "./Edituser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
       <h1 className="newUserTitle">Edit your information</h1>
       <form className="newUserForm">
       
        <div className="newUserItem">
            <lable>Email</lable>
            <input type="email" placeholder='Jon@gmail.com' />
        </div>
       
        <div className="newUserItem">
            <lable>Phone</lable>
            <input type="text" placeholder='9876543210' />
        </div>
        <div className="newUserItem">
            <lable>Address</lable>
            <input type="text" placeholder='India,Chennai' />
        </div>
       
        <button className="newUserButton">Submit</button>
       </form>
    </div>
  )
}
