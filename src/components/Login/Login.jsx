import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ZlendoImages from "../Images/ZlendoLogo.PNG";
import "./Login.css";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",

    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value)

    const { value, name } = e.target;

    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,

        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");

    console.log(getuserArr);

    // console.log(inpval)

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);

        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid details");
        } else {
          console.log("user login succesfully");

          localStorage.setItem("user_login", JSON.stringify(getuserArr));

          history("/home");
        }
      }
    }
  };

  return (
    <>
      {/* <div className="container mt-4 f-4 "></div> */}

      <section className="d-flex justify-content-between">
        <div className="right_data mt-3 " style={{ width: "35vw" }}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <h1>Login</h1>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Enter email address"
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                onChange={getdata}
                placeholder="enter your password"
              />
            </Form.Group>

            <Button
              variant="primary"
              className="col-lg-6"
              onClick={addData}
              style={{ background: "#5796f3" }}
              type="submit"
            >
              Submit
            </Button>

            <p className="mt-3">
              New user ?{" "}
              <span>
                <NavLink to="/sign">SignUp here</NavLink>
              </span>
            </p>
          </Form>
        </div>

        <div className="signinPgImg">
          <div className="right_data mt-5"></div>

          <div className="sign_img">
            <img src={ZlendoImages} alt="Logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
