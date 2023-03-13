import React from "react";
import "./Login.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper">
        <div className="container">
          <div className="login-box">
            <h4>Login</h4>
            <form>
              <div className="form-group">
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group" style={{ marginBottom: "5px" }}>
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="forgotPassword">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
              <div className="login-buttons">
                <button type="submit" className="btn">
                  login
                </button>
                <Link to="/signup" className="btn">
                  sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
