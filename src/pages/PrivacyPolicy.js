import React from "react";
import "./PrivacyPolicy.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <div className="privacy-policy-wrapper">
        <div className="container">
          <div className="privacy-policy-box"></div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
