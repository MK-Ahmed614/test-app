import React from "react";
import "./Wishlist.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="Favourite Wishlist" />
      <BreadCrumb title="Favourite Wishlist" />
      <div className="wishlist-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="card-image">
                  <img className="img-fluid" src="images/tab1.jpg" alt="tab" />
                  <div className="cross">
                    <img src="images/cross.svg" alt="cross" />
                  </div>
                </div>
                <div className="card-details">
                  <h4 className="heading-title">
                    Kids HeadPhones Bulk 10 Pack Multi Colored For...
                  </h4>
                  <p className="card-price">$100</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="card-image">
                  <img className="img-fluid" src="images/tab1.jpg" alt="tab" />
                  <div className="cross">
                    <img src="images/cross.svg" alt="cross" />
                  </div>
                </div>
                <div className="card-details">
                  <h4 className="heading-title">
                    Kids HeadPhones Bulk 10 Pack Multi Colored For...
                  </h4>
                  <p className="card-price">$100</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="card-image">
                  <img className="img-fluid" src="images/tab1.jpg" alt="tab" />
                  <div className="cross">
                    <img src="images/cross.svg" alt="cross" />
                  </div>
                </div>
                <div className="card-details">
                  <h4 className="heading-title">
                    Kids HeadPhones Bulk 10 Pack Multi Colored For...
                  </h4>
                  <p className="card-price">$100</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="card-image">
                  <img className="img-fluid" src="images/tab1.jpg" alt="tab" />
                  <div className="cross">
                    <img src="images/cross.svg" alt="cross" />
                  </div>
                </div>
                <div className="card-details">
                  <h4 className="heading-title">
                    Kids HeadPhones Bulk 10 Pack Multi Colored For...
                  </h4>
                  <p className="card-price">$100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
