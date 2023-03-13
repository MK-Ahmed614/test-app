import React from "react";
import "./TermsService.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const TermsService = () => {
  return (
    <>
      <Meta title={"Terms Service"} />
      <BreadCrumb title="Terms Service" />
      <div className="TermsService-wrapper">
        <div className="container">
          <div className="TermsService-box"></div>
        </div>
      </div>
    </>
  );
};

export default TermsService;
