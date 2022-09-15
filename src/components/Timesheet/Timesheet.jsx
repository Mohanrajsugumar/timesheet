import React from 'react'
import './Timesheet.css'

const Timesheet = () => {
  return (
    <div className='container'>
        <div className='table'>
            <table className='tatable'>
                <tr className='tableHeading'>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Login Time</th>
                    <th>LogOut Time</th>
                    <th>Total Hours</th>    
                </tr>
                <tr className='tableHeading'>
                    
                    <td>

                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                        <p>Monday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls' ></input>
                    </td>
                </tr>
                <tr className='tableHeading'>
                    <td>
                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                    <p>Tuesday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls'></input>
                    </td>
                </tr>
                <tr className='tableHeading'>
                    <td>
                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                   <p>Wednesday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls'></input>
                    </td>
                </tr>
                <tr className='tableHeading'>
                    <td>
                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                        <p>Thursday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls'></input>
                    </td>
                </tr>
                <tr className='tableHeading'>
                    <td>
                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                    <p>Friday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls'></input>
                    </td>
                </tr>
                <tr className='tableHeading'>
                    <td>
                        <input type='date' className='incls'></input>
                    </td>
                    <td>
                    <p>Saturday</p>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type= 'time' className='incls'></input>
                    </td>
                    <td>
                        <input type="number" className='incls'></input>
                    </td>
                </tr>
            </table>
            <div className='savebut'>
            <button type="submit" className='savetime'>Save Timesheet</button>
        <button type="submit" className='subtime'>Submit Timesheet</button>
        </div>
        </div>
       <div>
       
       </div>
    </div>
    

  )
}
export default Timesheet;