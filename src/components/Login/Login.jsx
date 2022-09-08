import React from 'react'
import ZlendoImages from '../Images/ZlendoLogo.PNG'
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='Container'>

        <div className='LeftImage'>

            <img src={ZlendoImages} alt="ZlendoLogo" />

            <div className='LoginDetails'>

                <div className='LoginItems'>

                <h3>Sign In</h3>

                <label>Email Address</label>

                <input type="email" name="email" id="" required/>

                <label>Password</label>

                <input type="password" name="password" id="" />
                <Link to={"/Home" } className="submitbtn">
                <button type="submit">Submit</button>
                </Link>

                </div>

            </div>

        </div>

    </div>
  )
}
export default Login;