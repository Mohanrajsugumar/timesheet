import React,{useContext} from 'react'
import "./Timesheet.css";
import { DataGrid } from '@mui/x-data-grid';
import { GlobalContext } from '../../context/Globalstate';
import {timeSheet} from '../../Data';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Timesheet() {
  const [name,setName]=useState('');
  const [login,setLogin]=useState('');
  const [logout,setLogout]=useState('');
  const [total,setTotal]=useState('');

  const {addTimesheet} = useContext(GlobalContext);

const onSubmit =()=>{
  const newTimesheet ={
    id: 1,
    name:"use",
    login,
    logout,
    total

  }
 addTimesheet(newTimesheet);
}

/*const onSubmit =()=>{
  e.preventDefault();
  addTimesheet(prevTimesheet=>[...prevTimesheet,{login:login,logout:logout,total:total}]);
}*/
    const [data,setData] = useState(timeSheet);
  

    const updateLogin= (e) =>{
      setLogin(e.target.value);
    }

    const updateLogout= (e) =>{
      setLogout(e.target.value)
    }
    const updateTotal= (e) =>{
      setTotal(e.target.value)
    }


    const columns = [
 
        {
          field: 'date',
          headerName: 'Date',
          width: 120,
        },
    
        {
            field: 'login',
            headerName: 'Login Time',
            width: 120,renderCell:()=>{
              return(
                  <div className='userText'>
                     <input type="text" value={login} onChange={updateLogin} className='input' />
                  </div>
              )
          }
          },
          {
            field: 'logout',
            headerName: 'Logout Time',
            width: 120,renderCell:()=>{
              return(
                  <div className='userText'>
                     <input type="text" className='input'  onChange={updateLogout} />
                  </div>
              )
          }
          },
          {
            field: 'hours',
            headerName: 'Working Hours',
            width: 120,renderCell:()=>{
              return(
                  <div className='userText'>
                     <input type="text" className='input' onChange={updateTotal}/>
                  </div>
              )
          }
          },
          {
            field: 'workingstatus',
            headerName: 'Status',
            width: 150,
          },
          

      ];
      

  return (
    <>
    
   
    <div className='emp'>
    <label>Employee Name: Janani</label>
    <label>Employee ID: ZLO89946</label>
    <label>Project ID:  PRO8763</label>
    </div>
    <div className='userlist'>

        <DataGrid
        rows={data} 
        columns={columns}     
      />
      <div className='userlink'>
    <Link to={"/empl/" } >
    <button className="userListEdit" onSubmit={onSubmit}>Save</button>
    </Link>
    </div>
    </div>
  

    </>
  )
}

