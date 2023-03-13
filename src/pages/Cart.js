import React from "react";
import "./Cart.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Shopping Cart "} />
      <BreadCrumb title="Your Shopping Cart" />
      <div className="cart-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card-header">
                <h4>product</h4>
              </div>
              <div className="cart-content">
                <div className="about-product">
                  <div className="cart-img">
                    <img
                      className="img-fluid"
                      src="./images/head2.jpg"
                      alt="headphone"
                    />
                  </div>
                  <div className="cart-description">
                    <p>
                      Kids headphone bulk 10 pack multi colored for students
                    </p>
                    <p>Size : S</p>
                    <p>Color : #A85A5A</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card-header">
                <h4>price</h4>
              </div>
              <div className="cart-content">
                <h6>$100.00</h6>
              </div>
            </div>
            <div className="col-2">
              <div className="card-header">
                <h4>quantity</h4>
              </div>
              <div className="cart-content">
                <input type="number" name="number" defaultValue={1} min={1} />
              </div>
            </div>
            <div className="col-2">
              <div className="card-header">
                <h4>total</h4>
              </div>
              <div
                className="cart-content"
                style={{ justifyContent: "space-between" }}
              >
                <h6>$100.00</h6>
                <div className="delet-pro">
                  <RiDeleteBin5Line />
                </div>
              </div>
            </div>
          </div>
          <div className="another-options-cart">
            <div className="row">
              <div className="col-12">
                <div className="continue-shop">
                  <Link to="/store">continue Shopping</Link>
                </div>
              </div>
              <div className="col-12">
                <div className="check-out">
                  <h6>
                    <span>subtotal : </span> $100.00
                  </h6>
                  <p>taxes and shipping calculated at checkout</p>
                  <Link to="/checkout"> check out </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
