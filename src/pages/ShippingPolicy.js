import React from "react";
import "./ShippingPolicy.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <div className="shipping-policy-wrapper">
        <div className="container">
          <div className="shipping-policy-box"></div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
