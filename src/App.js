import './App.css';
import { Routes, Route } from "react-router-dom";
import UserList from './components/Userlist/UserList';
import Home from './Pages/Home/Home';
import Timesheet from './components/Timesheet/Timesheet';
import Empl from './Pages/Empl/Empl';
import {GlobalProvider} from './context/Globalstate';
import Edituser from './Pages/Edituser/Edituser'
import Leaveportal from "./Pages/Leave/Leaveportal"
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
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/time" element={<Timesheet />} />
        <Route path="/editUser" element={<Edituser />} />
        <Route path="/empl" element={<Empl />} />
        <Route path="/leave" element={<Leaveportal />} />
       </Routes>
        </GlobalProvider>
        
      </div>
    </div>
  );
}

export default App;