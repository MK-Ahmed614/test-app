import React from "react";
import "./Login.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="resetPassword-wrapper">
        <div className="container">
          <div className="resetPassword-box">
            <h4>Reset Password</h4>
            <form>
              <div className="form-group">
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="confirm password"
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="resetPassword-buttons">
                <button type="submit" className="btn">
                  done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
