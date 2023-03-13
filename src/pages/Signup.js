import React from "react";
import "./Login.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Create Account" />
      <div className="signup-wrapper">
        <div className="container">
          <div className="signup-box">
            <h4>create account</h4>
            <form>
              <div className="form-group">
                <input
                  placeholder="first name"
                  type="name"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="last name"
                  type="name"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="form-group" style={{ marginBottom: "5px" }}>
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="signup-buttons">
                <button type="submit" className="btn">
                  create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
