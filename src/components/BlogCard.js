import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";
import { useLocation } from "react-router-dom";
const BlogCard = () => {
  const location = useLocation();
  return (
    <>
      <div className={`${location.pathname === "/blogs" ? "col-6" : "col-3"}`}>
        <div className="blog">
          <div className="image-blog">
            <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
          </div>
          <div className="content-blog">
            <span>11 june 2022</span>
            <h4>a beautiful sunday morning renaissance</h4>
            <p>
              you are as good as your last collection, which is an enomous
              pressure. i think there is something about...
            </p>
            <Link to="/singleBlog" className="btn-read">
              read more
            </Link>
          </div>
        </div>
      </div>
      <div className={`${location.pathname === "/blogs" ? "col-6" : "col-3"}`}>
        <div className="blog">
          <div className="image-blog">
            <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
          </div>
          <div className="content-blog">
            <span>11 june 2022</span>
            <h4>a beautiful sunday morning renaissance</h4>
            <p>
              you are as good as your last collection, which is an enomous
              pressure. i think there is something about...
            </p>
            <Link to="/singleBlog" className="btn-read">
              read more
            </Link>
          </div>
        </div>
      </div>
      <div className={`${location.pathname === "/blogs" ? "col-6" : "col-3"}`}>
        <div className="blog">
          <div className="image-blog">
            <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
          </div>
          <div className="content-blog">
            <span>11 june 2022</span>
            <h4>a beautiful sunday morning renaissance</h4>
            <p>
              you are as good as your last collection, which is an enomous
              pressure. i think there is something about...
            </p>
            <Link to="/singleBlog" className="btn-read">
              read more
            </Link>
          </div>
        </div>
      </div>
      <div className={`${location.pathname === "/blogs" ? "col-6" : "col-3"}`}>
        <div className="blog">
          <div className="image-blog">
            <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
          </div>
          <div className="content-blog">
            <span>11 june 2022</span>
            <h4>a beautiful sunday morning renaissance</h4>
            <p>
              you are as good as your last collection, which is an enomous
              pressure. i think there is something about...
            </p>
            <Link to="/singleBlog" className="btn-read">
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
