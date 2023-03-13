import React from "react";
import "./Header.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <Container>
          <Row>
            <Col>
              <p className="text-left">
                free shopping over 100$ & free returns
              </p>
            </Col>
            <Col>
              <p className="text-right">
                hotline:
                <a className="text-white" href="tel: +201154792430">
                  {" "}
                  +201154792430
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </header>

      <header className="header-upper py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="digitic">digitic.</h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <BsSearch />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links">
                <div className="c-text">
                  <Link to="/compare">
                    <img src="./images/compare.svg" alt="camera" />
                    <p>
                      compare <br /> products{" "}
                    </p>
                  </Link>
                </div>
                <div className="c-text">
                  <Link to="/wishlist">
                    <img src="./images/wishlist.svg" alt="wishlist" />
                    <p>
                      favourite <br /> wishlist{" "}
                    </p>
                  </Link>
                </div>
                <div className="c-text">
                  <Link to="/login">
                    <img src="./images/user.svg" alt="user" />
                    <p>
                      login <br /> my account{" "}
                    </p>
                  </Link>
                </div>
                <div className="c-text">
                  <Link to="/shopping-cart">
                    <img src="./images/cart.svg" alt="cart" />
                    <p>
                      {" "}
                      <span className="count-no">0</span> <br />{" "}
                      <span className="count-price">$5.00</span>{" "}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="drob-bottom">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <span className="d-inline-block">
                      <img
                        style={{
                          width: "23px",
                          height: "23px",
                          marginRight: "10px",
                        }}
                        src="./images/menu.svg"
                        alt="menu"
                      />
                      shop categories
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item to="">Action</Dropdown.Item>
                    <Dropdown.Item to="">Another action</Dropdown.Item>
                    <Dropdown.Item style={{ borderBottom: "none" }} to="">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="col-9">
              <div className="menu-links">
                <NavLink to="/">home</NavLink>
                <NavLink to="/store">our store</NavLink>
                <NavLink to="/blogs">blogs</NavLink>
                <NavLink to="/contact">contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
