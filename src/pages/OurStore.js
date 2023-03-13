import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OurStore.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductsCard from "../components/ProductsCard";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="ourstore-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card">
                <div className="title-card">
                  <h4>shop by categories</h4>
                </div>
                <div className="card-links-upper">
                  <Link to="/">home</Link>
                  <Link to="/store">our store</Link>
                  <Link to="/blogs">blogs</Link>
                  <Link to="/contact">contact</Link>
                </div>
              </div>
              <div className="fillter-card">
                <div className="title-card">
                  <h4>fliter by</h4>
                </div>
                <div className="filter-by">
                  <h6>availability</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      in stock (21)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      out of stock (1)
                    </label>
                  </div>
                  <div className="price-part">
                    <h6>price</h6>
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="From"
                        />
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="To"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="colors-part">
                    <h6>color</h6>
                    <ul className="colors-styles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="size-part">
                    <h6>size</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        M (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        L (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        XL (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        XXL (0)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fillter-card">
                <div className="title-card">
                  <h4>product tag</h4>
                </div>
                <div className="services">
                  <ul>
                    <li>headphones</li>
                    <li>labtop</li>
                    <li>mobile</li>
                    <li>oppo</li>
                    <li>speaker</li>
                    <li>tabliet</li>
                    <li>vivo</li>
                    <li>write</li>
                  </ul>
                </div>
              </div>
              <div className="fillter-card">
                <div className="title-card">
                  <h4>random products</h4>
                </div>
                <div
                  className="random-products"
                  style={{
                    borderBottom: "1px solid #e6e6e6",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="img-card">
                    <img src="images/headphone.jpg" alt="headphone" />
                  </div>
                  <div className="card-content">
                    <h4 className="product-title">
                      kids headPhones bulk 10 pack multi colored for...
                    </h4>
                    <div className="product-starts">
                      <ReactStars
                        count={5}
                        size={13}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="product-price">$100.00</p>
                  </div>
                </div>
                <div
                  className="random-products"
                  style={{
                    paddingTop: "10px",
                  }}
                >
                  <div className="img-card">
                    <img src="images/appleWatch2.jpg" alt="appleWatch" />
                  </div>
                  <div className="card-content">
                    <h4 className="product-title">
                      apple watch series 2 - 42 mm stainless steel...
                    </h4>
                    <div className="product-starts">
                      <ReactStars
                        count={5}
                        size={13}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="product-price">$100.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="select-part">
                  <p>sort by : </p>
                  <select className="form-control" name="" id="">
                    <option value="manual">featured</option>
                    <option value="best-selling" selected>
                      best selling
                    </option>
                    <option value="title-ascending">alphabetically, A-Z</option>
                    <option value="title-descending">
                      alphabetically, A-Z
                    </option>
                    <option value="price-ascending">price, low to high</option>
                    <option value="price-descending">price, high to low</option>
                    <option value="created-ascending">date, old to new</option>
                    <option value="created-descending">date, new to old</option>
                  </select>
                </div>
                <div className="sort-img-ch">
                  <p>21 products</p>
                  <div className="sort-img-part">
                    <img
                      className={grid === 3 ? "active" : " "}
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 4 ? "active" : " "}
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 6 ? "active" : " "}
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 12 ? "active" : " "}
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt="sort"
                    />
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  <ProductsCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
