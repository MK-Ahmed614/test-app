import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./ProductsCard.scss";
import { useLocation } from "react-router-dom";

const ProductsCard = (props) => {
  const { grid } = props;
  const location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/store"
            ? `col-${grid} col-${grid}-grider`
            : "col-3"
        }`}
      >
        <Link className="go-to" to="/single-product">
          <div className="product-card">
            <div className="lover-icon">
              <Link>
                <img src="./images/wish.svg" alt="wish" />
              </Link>
            </div>
            <div className="product-img">
              <img
                className="img-fluid tab1"
                src="./images/tab1.jpg"
                alt="tab"
              />
              <img className="img-fluid tab" src="./images/tab.jpg" alt="tab" />
            </div>
            <div className="product-info">
              <span className="product-name">Product Name</span>
              <h4 className="product-title">
                kids headPhones bulk 10 pack multi colored for...
              </h4>
              <div className="product-starts">
                <ReactStars
                  count={5}
                  size={18}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p
                className={`pro-description ${
                  grid === 12 ? "d-block" : "d-none"
                }`}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
              <p className="product-price">$100.00</p>
            </div>

            <div className="action-bar">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store"
            ? `col-${grid} col-${grid}-grider`
            : "col-3"
        }`}
      >
        <Link className="go-to" to="/single-product">
          <div className="product-card">
            <div className="lover-icon">
              <Link>
                <img src="./images/wish.svg" alt="wish" />
              </Link>
            </div>
            <div className="product-img">
              <img
                className="img-fluid tab1"
                src="./images/tab1.jpg"
                alt="tab"
              />
              <img className="img-fluid tab" src="./images/tab.jpg" alt="tab" />
            </div>
            <div className="product-info">
              <span className="product-name">Product Name</span>
              <h4 className="product-title">
                kids headPhones bulk 10 pack multi colored for...
              </h4>
              <div className="product-starts">
                <ReactStars
                  count={5}
                  size={18}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p
                className={`pro-description ${
                  grid === 12 ? "d-block" : "d-none"
                }`}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
              <p className="product-price">$100.00</p>
            </div>

            <div className="action-bar">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store"
            ? `col-${grid} col-${grid}-grider`
            : "col-3"
        }`}
      >
        <Link className="go-to" to="/single-product">
          <div className="product-card">
            <div className="lover-icon">
              <Link>
                <img src="./images/wish.svg" alt="wish" />
              </Link>
            </div>
            <div className="product-img">
              <img
                className="img-fluid tab1"
                src="./images/tab1.jpg"
                alt="tab"
              />
              <img className="img-fluid tab" src="./images/tab.jpg" alt="tab" />
            </div>
            <div className="product-info">
              <span className="product-name">Product Name</span>
              <h4 className="product-title">
                kids headPhones bulk 10 pack multi colored for...
              </h4>
              <div className="product-starts">
                <ReactStars
                  count={5}
                  size={18}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p
                className={`pro-description ${
                  grid === 12 ? "d-block" : "d-none"
                }`}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
              <p className="product-price">$100.00</p>
            </div>

            <div className="action-bar">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store"
            ? `col-${grid} col-${grid}-grider`
            : "col-3"
        }`}
      >
        <Link className="go-to" to="/single-product">
          <div className="product-card">
            <div className="lover-icon">
              <Link>
                <img src="./images/wish.svg" alt="wish" />
              </Link>
            </div>
            <div className="product-img">
              <img
                className="img-fluid tab1"
                src="./images/tab1.jpg"
                alt="tab"
              />
              <img className="img-fluid tab" src="./images/tab.jpg" alt="tab" />
            </div>
            <div className="product-info">
              <span className="product-name">Product Name</span>
              <h4 className="product-title">
                kids headPhones bulk 10 pack multi colored for...
              </h4>
              <div className="product-starts">
                <ReactStars
                  count={5}
                  size={18}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p
                className={`pro-description ${
                  grid === 12 ? "d-block" : "d-none"
                }`}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
              <p className="product-price">$100.00</p>
            </div>

            <div className="action-bar">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductsCard;
