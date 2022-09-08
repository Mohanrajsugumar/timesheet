import React from 'react'
import "./leaveportal.css"


export default function Leaveportal() 
{

 /*function show_alert() {
  alert("Your Leave Application is Submitted to Your Manager");
  
}*/

  return (
    <div className='LeavePage'>
       <p className="LeaveTitle">Leave Form</p>
       <form className="LeavePortalForm">
        <div className="LeavePortalItem">
            <label htmlFor="">Leave Code</label>
            <select name="LeaveType" id="LeaveType" className='LeavePdDrpDown' required>
                <option value="Select Leave type" selected> Select Leave Type</option>
                <option value="Personal Leave">Personal Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Compensatory Off">Compensatory Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
              </select>
        </div>
        <div className="LeavePortalItem">
            <label>Leave Duration</label>
            <select name="LeaveDuration" id="LeaveDuration" className='LeavePdDrpDown' required>
              <option value="Select Leave Duration" selected> Select Leave Duration</option>
              <option value="Full Day">Full Day</option>
              <option value="Half Day">Half Day</option>
            </select>
        </div>
        <div className="LeavePortalItem">
            <label>From Date</label>
            <input type="date" name="FromDate" id="FromDate" required />
        </div>
        <div className="LeavePortalItem">
            <label>To Date</label>
            <input type="date" name="ToDate" id="ToDate" required/>
        </div>
        <div className="LeavePortalItem">
            <label>Reason for Leave</label>
            <textarea name="LeaveReason" id="LeaveReason" cols="15" rows="5" required></textarea>
        </div>
        <div>
 
    <button className="LeavePortalButton" >Submit</button>
        </div>
       
       </form>
    </div>
  )
}
