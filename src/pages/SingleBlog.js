import React from "react";
import "./SingleBlog.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"dinamicly blog name"} />
      <BreadCrumb title="A beautiful sunday morning renaissance" />
      <div className="single-blog-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card-blog">
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
            </div>
            <div className="col-9">
              <div className="single-blog-card">
                <div className="card-title">
                  <h4> A beautiful sunday morning renaissance</h4>
                </div>
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src="images/blog-1.jpg"
                    alt="blog"
                  />
                </div>
                <div className="card-description">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Imperdiet erat nullam tortor quis elit lacus blandit vitae.
                    Nostra dapibus bibendum; curae magnis commodo metus
                    vestibulum tristique. Tristique volutpat consectetur congue
                    lorem pharetra habitant. Sodales gravida egestas venenatis
                    dignissim molestie cursus porta. Massa lacus pulvinar
                    aliquam mi tristique.{" "}
                  </p>
                  <span style={{ padding: "0 10px 0 0" }}>11 jun, 22 </span>
                  <span
                    style={{ borderLeft: "1px solid #ccc", padding: "0 10px" }}
                  >
                    kajal korat
                  </span>
                </div>
              </div>
              <div className="back-to-blog">
                <Link to="/blogs">
                  {" "}
                  <HiOutlineArrowNarrowLeft /> back to blogs
                </Link>
                <div className="social-icons">
                  <a href="/">
                    <BsTwitter />
                  </a>
                  <a href="/">
                    <BsFacebook />
                  </a>
                  <a href="/">
                    <BsInstagram />
                  </a>
                </div>
              </div>
              <div className="single-blog-comment">
                <h4>leave a comment</h4>
                <form className="single-form">
                  <div className="form-group">
                    <input
                      placeholder="name*"
                      type="name"
                      name="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group" style={{ marginLeft: "4%" }}>
                    <input
                      placeholder="email*"
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group" style={{ width: "100%" }}>
                    <textarea placeholder="comment*"></textarea>
                  </div>

                  <div className="single-blog-buttons">
                    <button className="btn">post comment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
