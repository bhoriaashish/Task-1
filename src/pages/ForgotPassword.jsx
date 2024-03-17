import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import "./auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <div
        className="wrapper"
        style={{
          backgroundImage: 'url("/register/bg-registration-form-1.jpg")',
        }}
      >
        <div className="inner  mt-40 max-sm:mt-16">
          <form className="w-[59w]"
          >
            <h3>Forgot Password</h3>

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

            <div 
            className=" flex flex-col gap-2 items-center justify-center"

            >
              <div className="">
                <NavLink to="/">
              <button className="reg-btn pt-[11px] pb-[11px] pl-[60px] pr-[60px] bg-[rgb(253 13 47)]">
                <div className="">Submit</div>
                
              </button>
              </NavLink>
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
    // </Layout>
  );
};

export default Login;