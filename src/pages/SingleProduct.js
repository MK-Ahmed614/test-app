import React, { useState } from "react";
import "./SingleProduct.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Zoom from "react-img-hover-zoom";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCompare } from "react-icons/gr";
import ProductsCard from "../components/ProductsCard";
const SingleProduct = () => {
  const [addSize, setSize] = useState(1);
  const [useColor, setColor] = useState(1);
  const copyToClipboard = (text) => {
    let txetField = document.createElement("textarea");
    txetField.innerText = text;
    document.body.appendChild(txetField);
    txetField.select();
    document.execCommand("copy");
    txetField.remove();
  };
  return (
    <>
      <Meta title={"Product Name Later "} />
      <BreadCrumb title="Product Name Later" />
      <div className="slingle-product-wrapper">
        <div className="container">
          <div className="slingle-product-upper">
            <div className="row">
              <div className="col-6">
                <div className="main-images">
                  <div className="upper-image">
                    <Zoom
                      img="./images/head2.jpg"
                      zoomScale={3}
                      width={600}
                      height={500}
                      style={{}}
                      className="img-fluid img-show"
                    />
                  </div>
                  <div className="small-images">
                    <div className="row">
                      <div className="col-6">
                        <div className="xx-style mb-4">
                          <img
                            className="img-fluid"
                            src="./images/head3.jpg"
                            alt="headphone"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="xx-style mb-4">
                          <img
                            className="img-fluid"
                            src="./images/head4.jpg"
                            alt="headphone"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="xx-style">
                          <img
                            className="img-fluid"
                            src="./images/head5.jpg"
                            alt="headphone"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="xx-style">
                          <img
                            className="img-fluid"
                            src="./images/head6.jpg"
                            alt="headphone"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="product-info">
                  <div className="product-content">
                    <h4 className="product-title">
                      kids headPhones bulk 10 pack multi colored for...
                    </h4>
                    <p className="product-price">$100.00</p>
                    <div className="product-starts">
                      <ReactStars
                        count={5}
                        size={16}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <span className="review-no">(2 reviews)</span>
                    </div>
                    <a href="#review">Write a review</a>
                  </div>
                  <div className="about-product">
                    <div className="feat-product">
                      <h6>type : </h6>
                      <p>Headsets</p>
                    </div>
                    <div className="feat-product">
                      <h6>brand : </h6>
                      <p>Havells</p>
                    </div>
                    <div className="feat-product d-block" style={{}}>
                      <h6>categories : </h6>
                      <p>
                        airpods, cameras, computers & laptop, headphones,
                        speaker, store, portable speakers smart phones, smart
                        television, smart watches{" "}
                      </p>
                    </div>
                    <div className="feat-product">
                      <h6>tags : </h6>
                      <p>headphones - laptop - mobile - oppo - speaker</p>
                    </div>
                    <div className="feat-product">
                      <h6>SKU : </h6>
                      <p>SKU527</p>
                    </div>
                    <div className="feat-product">
                      <h6>availability : </h6>
                      <p>$41 in stock</p>
                    </div>
                    <div className="feat-product">
                      <div className="size">
                        <h6>size : </h6>
                        <ul>
                          <li
                            onClick={() => {
                              setSize(1);
                            }}
                            className={`${addSize === 1 ? "active" : ""}`}
                          >
                            S
                          </li>
                          <li
                            onClick={() => {
                              setSize(2);
                            }}
                            className={`${addSize === 2 ? "active" : ""}`}
                          >
                            L
                          </li>
                          <li
                            onClick={() => {
                              setSize(3);
                            }}
                            className={`${addSize === 3 ? "active" : ""}`}
                          >
                            XL
                          </li>
                          <li
                            onClick={() => {
                              setSize(4);
                            }}
                            className={`${addSize === 4 ? "active" : ""}`}
                          >
                            XXL
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="feat-product">
                      <div className="color">
                        <h6>color : </h6>
                        <ul>
                          <li
                            onClick={() => {
                              setColor(1);
                            }}
                            className={`${useColor === 1 ? "active" : ""}`}
                          ></li>
                          <li
                            onClick={() => {
                              setColor(2);
                            }}
                            className={`${useColor === 2 ? "active" : ""}`}
                          ></li>
                          <li
                            onClick={() => {
                              setColor(3);
                            }}
                            className={`${useColor === 3 ? "active" : ""}`}
                          ></li>
                          <li
                            onClick={() => {
                              setColor(4);
                            }}
                            className={`${useColor === 4 ? "active" : ""}`}
                          ></li>
                          <li
                            onClick={() => {
                              setColor(5);
                            }}
                            className={`${useColor === 5 ? "active" : ""}`}
                          ></li>
                        </ul>
                      </div>
                    </div>
                    <div className="quantity-product">
                      <h6>quantity : </h6>
                      <div style={{ alignItems: "center", display: "flex" }}>
                        <input
                          type="number"
                          name="number"
                          defaultValue={1}
                          min={1}
                        />
                        <Link to="">add to cart</Link>
                        <Link to="">buy it now</Link>
                      </div>
                    </div>
                    <div className="add-to-web">
                      <Link>
                        <AiOutlineHeart /> add to wishlist
                      </Link>
                      <Link>
                        <GrCompare /> add to compare
                      </Link>
                    </div>
                    <div className="copy-link-product d-flex align-items-center">
                      <h6>product linke : </h6>
                      <a
                        href="javascript:void(0)"
                        onClick={() => copyToClipboard("4444444444")}
                      >
                        copy product linke
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-description">
            <div className="row">
              <div className="col-12">
                <h4>description</h4>
                <div className="dec-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fug Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fug
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="review" className="product-reviews">
            <h4>reviews</h4>
            <div className="main-review-pro">
              <div className="product-customer">
                <h6>customer reviews</h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="star-review">
                    <ReactStars
                      count={5}
                      size={16}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <span>based on 2 reviews</span>
                  </div>
                  <div className="write-go">
                    <Link to="/">Write a review</Link>
                  </div>
                </div>
              </div>
              <div className="write-review">
                <h6>Write a Reviews</h6>
                <div className="star-review">
                  <ReactStars
                    count={5}
                    size={16}
                    value={4}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="type-a-comment">
                  <textarea
                    name="text"
                    type="text"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <div className="sub-review">
                  <button>submit review</button>
                </div>
              </div>
              <div className="comment-list">
                <div className="com-name">
                  <h6>navdeep</h6>
                  <ReactStars
                    count={5}
                    size={16}
                    value={4}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="com-dec">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s-p-c">
            <div className="row">
              <ProductsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
