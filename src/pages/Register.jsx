import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import "./auth.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  return (
      <div
        className="wrapper"
        style={{
          backgroundImage: 'url("/register/bg-registration-form-1.jpg")',
        }}
      >
        <div className="inner mt-40 max-sm:mt-16">
          <form 
          >
            <h3>Register Here</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>

            <div className="form-wrapper">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="text"
                placeholder="What is your favorite sports"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>
            <div 
            className=" flex flex-col gap-2 items-center justify-center"

            >
              <div className="">
              <button className="reg-btn pt-[11px] pb-[11px] pl-[60px] pr-[60px] bg-[rgb(253 13 47)]">
                <div className="">Submit</div>
              </button>
              </div>
              
              <div className="flex gap-2 items-center justify-center">
              {/* <NavLink
                className="reg-btn pt-[11px] pb-[11px] pl-[60px] pr-[60px] bg-[rgb(253 13 47)]"
                to="/forgot-password"
              >
                Forgot
              </NavLink>
              <NavLink
                className="reg-btn pt-[11px] pb-[11px] pl-[60px] pr-[60px] bg-r[rgb(37 158 50)]"
                to="/Register"
              >
                New User
              </NavLink> */}
              </div>

              
            </div>
          </form>
          
        </div>
      </div>
  );
};

export default Register;