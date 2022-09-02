import React, { useState } from 'react' 

import Form from 'react-bootstrap/Form' 

import Button from 'react-bootstrap/Button' 

import { NavLink } from 'react-router-dom' 

 

 

const Signin = () => { 

 

  const [inpval, setInpval] = useState({ 

    name: "", 

    date: "", 

    email: "", 

    password: "" 

  }) 

  const [data, setData] = useState([]); 

  console.log(inpval); 

 

  const getdata = (e) => { 

    // console.log(e.target.value) 

 

    const { value, name } = e.target 

 

    // console.log(value,name); 

 

    setInpval(() => { 

      return { 

        ...inpval, 

        [name]: value 

      } 

    }) 

 

 

  } 

  const addData = (e) => { 

    e.preventDefault(); 

    // console.log(inpval) 

    const { name, date, email, password } = inpval; 

    if (name === "") { 

      alert("name field is required") 

    } else if (email === "") { 

      alert("email field is required") 

    } else if (!email.includes("@")) { 

      alert("please enter valid email address") 

    } else if (date === "") { 

      alert("date field is required") 

    } else if (password === "") { 

      alert("password field is required") 

    } else if (password.length < 5) { 

      alert("password length greater five") 

    } else { 

      console.log("Data added succesfully"); 

 

      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval])); 

 

    } 

 

 

  } 

 

  return ( 

    <> 

      <div className="container mt-3"></div> 

      <section className='d-flex justify-content-between'> 

        <div className="left_data mt-3 p-5" style={{ width: "50vw" }}> 

          <h3 className='text-center col-lg-6'>Sign Up</h3> 

          <Form> 

 

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword"> 

              <Form.Label>Name</Form.Label> 

              <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your Name" /> 

            </Form.Group> 

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword"> 

              <Form.Label>DOB</Form.Label> 

              <Form.Control type="date" name='date' onChange={getdata} placeholder="Enter your DOB" /> 

            </Form.Group> 

 

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail"> 

              <Form.Label>Email address</Form.Label> 

              <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email address" /> 

              <Form.Text className="text-muted"> 

              </Form.Text> 

            </Form.Group> 

 

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword"> 

              <Form.Label>Password</Form.Label> 

              <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter your password" /> 

            </Form.Group> 

 

 

            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "#5796f3" }} type="submit"> 

              Submit 

            </Button> 

            <p className='mt-3 text-decoration-none'>Already have an account <span><NavLink to="/Login">Login</NavLink></span></p> 

          </Form> 

        </div> 

        <div className="right_data mt-5"></div> 

        <div className="sign_img mt-5 p-5"> 

          <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740843.png" alt="" /> 

 

        </div> 

 

      </section> 

    </> 

  ) 

} 

 

export default Signin 