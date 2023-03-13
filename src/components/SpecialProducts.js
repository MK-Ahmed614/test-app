import React from "react";
import "./SpecialProducts.scss";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  return (
    <div className="col-12">
      <div className="special-content">
        <div className="row">
          <div className="col-6" style={{ paddingRight: "0" }}>
            <div className="product-img">
              <div className="lover-icon">
                <Link>
                  <img src="./images/wish.svg" alt="wish" />
                </Link>
              </div>
              <div className="main-img-upper">
                <img
                  className="img-fluid main-img"
                  src="images/camera.jpg"
                  alt="camera"
                />
              </div>
              <div className="images-down">
                <img
                  className="img-fluid down-img"
                  src="images/camera.jpg"
                  alt="camera"
                />
                <img
                  className="img-fluid down-img"
                  src="images/camera.jpg"
                  alt="camera"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product-info">
              <span className="product-name">bajaj</span>
              <h4 className="product-desc">
                hero session action camera with 8mp...
              </h4>
              <div className="product-starts">
                <ReactStars
                  count={5}
                  size={15}
                  value={5}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="product-price">
                <span>$16.00</span> &nbsp; <strike>$30.00</strike>
              </p>
              <div className="product-timer">
                <b style={{ marginRight: "3px" }}>878</b> days{" "}
                <span>{new Date().getHours()}</span> :{" "}
                <span> {new Date().getMinutes()} </span> :{" "}
                <span>{new Date().getSeconds()}</span>
              </div>
              <div className="product-progress">
                <p>products: 100</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="option-btn">option</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
