import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Timesheet from './components/Timesheet/Timesheet';
// import Empl from './Pages/Empl/Empl';
import {GlobalProvider} from './context/Globalstate';
import UserList from './components/Userlist/UserList';
import Edituser from './Pages/Edituser/Edituser';
import Leaveportal from "./Pages/Leave/Leaveportal";
import { useState } from 'react';
import Login from './components/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  const [login,setLogin]=useState("");
  const [logout,setLogout]=useState("")
  const [total,setTotal]=useState("")
  return (
    <div className="App">
     <Navbar/>
     <Sidebar/>
     
      <div className="container">
    
        <GlobalProvider value={{login,logout,total}}>
        <Routes>
        <Route exact path="/" element={<Login />} /> 
        <Route path="/user" element={<UserList />} />
        <Route path="/EditUser" element={<Edituser />} />
        <Route path="/time" element={<Timesheet />} />
        <Route path="/Leave" element={<Leaveportal />}/> 
        
       </Routes>
        </GlobalProvider>
     
      </div>
    </div>
  );
}

export default App;