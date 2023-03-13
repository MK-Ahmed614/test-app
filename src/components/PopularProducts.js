import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./PopularProducts.scss";

const ProductsCard = () => {
  return (
    <div className="col-3">
      <div className="popular-card">
        <div className="lover-icon">
          <Link>
            <img src="./images/wish.svg" alt="wish" />
          </Link>
        </div>
        <div className="product-img">
          <img className="img-fluid tab1" src="./images/tab1.jpg" alt="tab" />
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
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
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
    </div>
  );
};

export default ProductsCard;
