import React from "react";
import "./Contact.scss";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillHome } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { TbExclamationMark } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <Meta title="Contact" />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6929.810568594426!2d31.25626487714897!3d29.72250274534452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1678321132531!5m2!1sar!2seg"
                height="450"
                style={{ width: "100%", border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="parent-box">
            <div className="row">
              <div className="col-6">
                <div className="contact-form all-edit">
                  <h4>contact</h4>
                  <form>
                    <div className="form-group">
                      <input
                        type="name"
                        name="name"
                        placeholder="name"
                        className="form-control"
                        id="inputName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="email *"
                        className="form-control"
                        id="inputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="phone"
                        name="phone"
                        placeholder="phone number"
                        className="form-control"
                        id="inputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="comment"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      send
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-6">
                <div className="contact-address all-edit">
                  <h4>get in touch with us</h4>
                  <ul>
                    <li>
                      {" "}
                      <AiFillHome />{" "}
                      <address>
                        Al-Dnawiya Al-Ayyat, near Al-Nour Mosque, Giza
                      </address>
                    </li>
                    <li>
                      {" "}
                      <FaPhoneAlt />{" "}
                      <a href="tel: +201154792430">+201154792430</a>
                    </li>
                    <li>
                      {" "}
                      <GrMail />{" "}
                      <a
                        style={{ textTransform: "lowercase" }}
                        href="mailto: mksalem614@gmail.com"
                      >
                        mksalem614@gmail.com
                      </a>
                    </li>
                    <li>
                      {" "}
                      <TbExclamationMark />{" "}
                      <p className="mb-0">monday - friday 10 am - 8 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
