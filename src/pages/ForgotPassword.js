import React from "react";
import "./Login.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-password-wrapper">
        <div className="container">
          <div className="forgot-password-box">
            <h4>reset your password</h4>
            <p>we will send you an email to reset your password</p>
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
              <div className="forgot-password-buttons">
                <button type="submit" className="btn">
                  submit
                </button>
                <Link to="/login" className="btn">
                  cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
