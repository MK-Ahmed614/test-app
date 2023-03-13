import React from "react";
import "./Blogs.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
const Blogs = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blogs-wrapper">
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
              <div className="card-blog">
                <div className="row">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
