import React from "react";
import "./RefundPolicy.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <div className="refund-policy-wrapper">
        <div className="container">
          <div className="refund-policy-box"></div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
