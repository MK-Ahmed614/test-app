import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-upper"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="sign d-flex align-items-center text-white">
                <img src="./images/newsletter.png" alt="newsletter" />
                <p>sign up for newsletter</p>
              </div>
            </div>
            <div className="col-7">
              <div className="Sub-email">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      subscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="footer-center"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="txt-footer-center">
                <h4>contact us</h4>
                <div className="footer-center-links">
                  <address style={{ color: "#dadada", fontSize: "14px" }}>
                    Al-Dnawiya <br /> Al-Ayyat, near Al-Nour Mosque, Giza
                  </address>
                  <a href="tel: +201154792430">+201154792430</a>
                  <a
                    style={{ textTransform: "lowercase" }}
                    href="mailto: mksalem614@gmail.com"
                  >
                    mksalem614@gmail.com
                  </a>
                  <div className="social_icons">
                    <a href="/">
                      <BsTwitter />
                    </a>
                    <a href="/">
                      <BsFacebook />
                    </a>
                    <a href="/">
                      <BsInstagram />
                    </a>
                    <a href="/">
                      <BsYoutube />
                    </a>
                    <a href="/">
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
                <h4>information</h4>
                <div className="footer-center-links">
                  <Link to="/privacy-policy">privacy policy</Link>
                  <Link to="/refund-policy">refund policy</Link>
                  <Link to="/shipping-policy">shipping policy</Link>
                  <Link to="/terms-service">terms of service</Link>
                  <Link to="/blogs">blogs</Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
                <h4>account</h4>
                <div className="footer-center-links">
                  <Link>search</Link>
                  <Link>about us</Link>
                  <Link>faq</Link>
                  <Link>contact</Link>
                  <Link>size chart</Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="txt-footer-center">
                <h4>quick links</h4>
                <div className="footer-center-links">
                  <Link>accessories</Link>
                  <Link>laptops</Link>
                  <Link>headphones</Link>
                  <Link>smart watches</Link>
                  <Link>tablets</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="txt-co">
                <p style={{ textTransform: "capitalize" }}>
                  &copy; {new Date().getFullYear()} : powered by mohamed kamal
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="cards d-flex justify-content-end">
                <div>
                  <img src="./images/discover-svgrepo-com.svg" alt="discover" />
                </div>
                <div>
                  <img
                    src="./images/master-card-svgrepo-com.svg"
                    alt="master-card"
                  />
                </div>
                <div>
                  <img src="./images/paypal-3-svgrepo-com.svg" alt="paypal" />
                </div>
                <div>
                  <img src="./images/wepay-svgrepo-com.svg" alt="wepay" />
                </div>
                <div>
                  <img src="./images/maestro-svgrepo-com.svg" alt="maestro" />
                </div>
                <div>
                  <img src="./images/shopify-svgrepo-com.svg" alt="shopify" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
