import "./CheckOut.scss";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const CheckOut = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <div className="checkOut-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="product-info">
                <h4 className="title">digitic</h4>
                <p className="dir-p">
                  {" "}
                  <Link style={{ color: "#555" }} to="/shopping-cart">
                    cart
                  </Link>{" "}
                  {`>`} <b>information</b> {`>`} shipping {`>`} payment
                </p>
                <h6 className="contact-info">contact information</h6>
                <p className="e-m"> Mohamed Kamal (mksalem614@gmail.com)</p>
                <input type="checkbox" name="checkbox" />
                <span className="ch-ck">email me with news and offers</span>
                <div className="shipping-form">
                  <h6>shipping address</h6>
                  <form action="">
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                    />
                    <div
                      className="name-input"
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <input
                        className="w-50"
                        type="text"
                        name="name"
                        placeholder="First name (optional)"
                      />
                      <input
                        className="w-50"
                        type="text"
                        name="name"
                        placeholder="Last name"
                      />
                    </div>
                    <input
                      className="w-100"
                      type="text"
                      name="text"
                      placeholder="Address"
                    />
                    <input
                      className="w-100"
                      type="text"
                      name="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <input
                        style={{ width: "32%" }}
                        type="text"
                        name="text"
                        placeholder="City"
                      />
                      <input
                        style={{ width: "32%" }}
                        type="text"
                        name="text"
                        placeholder="State"
                      />
                      <input
                        style={{ width: "32%" }}
                        type="number"
                        name="number"
                        placeholder="ZIP code"
                      />
                    </div>
                  </form>
                  <div
                    className="btn-go"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 0 0",
                    }}
                  >
                    <Link
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        textTransform: "capitalize",
                        fontSize: "13px",
                        color: "#777",
                      }}
                      className="co-to-cart"
                      to="/shopping-cart"
                    >
                      <BsArrowLeft />
                      return to cart
                    </Link>
                    <Link className="btn-cont" to="/cart">
                      {" "}
                      continue to shipping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="sidebar-product">
                <div className="main-product">
                  <div className="product-img">
                    <img src="./images/head2.jpg" alt="headPhone" />
                    <span className="number-product">1</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <h6>
                      Kids headphone bulk 10 pack multi colored for students
                    </h6>
                    <span>S / #A85A5A</span>
                  </div>
                  <div>
                    <p>$100.00</p>
                  </div>
                </div>
                <div className="totle-price">
                  div
                  <div style={{ marginBottom: "10px" }}>
                    <p style={{ color: "#555" }}>subtotal</p>
                    <p style={{ fontWeight: "600" }}>$100.00</p>
                  </div>
                  <div>
                    <p style={{ color: "#555" }}>shipping</p>
                    <p style={{ fontWeight: "600" }}>$8.00</p>
                  </div>
                </div>
                <div className="pro-price-totle">
                  <p>total</p>
                  <h6>
                    <span>usd</span> $108.00
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
