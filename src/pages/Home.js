import { Link } from "react-router-dom";
import "./Home.scss";
import Marquee from "react-fast-marquee";
import ProductsCard from "../components/ProductsCard";
import SpecialProducts from "../components/SpecialProducts";
import PopularProducts from "../components/PopularProducts";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
const Home = () => {
  return (
    <>
      <Meta title="E Commercs App" />
      <section className="home-wrapper-1">
        <div className="container">
          <div className="row">
            <div className="col-6" style={{ paddingRight: "0" }}>
              <div className="home-baner">
                <img
                  className="img-fluid"
                  src="./images/main-banner.jpg"
                  alt="main-banner"
                />
                <div className="text-baner">
                  <h4>supercharged for pros</h4>
                  <h2>spacial sale</h2>
                  <p>
                    from $999.00 or $41.62/mo. <br /> for 24 mo. footnote*{" "}
                  </p>
                  <Link className="btn-buy">buy now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div
                  className="col-6"
                  style={{ marginBottom: "15px", paddingRight: "0" }}
                >
                  <div className="home-baner">
                    <img
                      className="img-fluid"
                      src="./images/catbanner-01.jpg"
                      alt="not found"
                    />
                    <div className="text-baner-small">
                      <h4>best sale</h4>
                      <h2>laptops max</h2>
                      <p>
                        from $1699.00 or <br /> $64.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ marginBottom: "15px" }}>
                  <div className="home-baner">
                    <img
                      className="img-fluid"
                      src="./images/catbanner-03.jpg"
                      alt="not found"
                    />
                    <div className="text-baner-small">
                      <h4>new arrival</h4>
                      <h2>buy ipad air</h2>
                      <p>
                        from $599 or <br /> $49.91/mo. for 12 mo. *
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ paddingRight: "0" }}>
                  <div className="home-baner">
                    <img
                      className="img-fluid"
                      src="./images/catbanner-02.jpg"
                      alt="not found"
                    />
                    <div className="text-baner-small">
                      <h4>15% off</h4>
                      <h2>smart watch 7</h2>
                      <p>
                        shop the latest band <br /> style and colors
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="home-baner">
                    <img
                      className="img-fluid"
                      src="./images/catbanner-04.jpg"
                      alt="not found"
                    />
                    <div className="text-baner-small">
                      <h4>free engraving</h4>
                      <h2>airpods max</h2>
                      <p>
                        high-fidelity playback & <br /> ultra-low distortion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-services">
                <div className="services">
                  <div className="services-image">
                    <img src="./images/service.png" alt="shipping" />
                  </div>
                  <div className="txt-services">
                    <h6>free shipping</h6>
                    <p>from all orders over 100$</p>
                  </div>
                </div>
                <div className="services">
                  <div className="services-image">
                    <img src="./images/service-02.png" alt="surprise" />
                  </div>
                  <div className="txt-services">
                    <h6>daily surprise offers</h6>
                    <p>save up to 25% off</p>
                  </div>
                </div>
                <div className="services">
                  <div className="services-image">
                    <img src="./images/service-03.png" alt="support" />
                  </div>
                  <div className="txt-services">
                    <h6>support 24/7</h6>
                    <p>shop with an expert</p>
                  </div>
                </div>
                <div className="services">
                  <div className="services-image">
                    <img src="./images/service-04.png" alt="prices" />
                  </div>
                  <div className="txt-services">
                    <h6>affordable prices</h6>
                    <p>get factory direct price</p>
                  </div>
                </div>
                <div className="services">
                  <div className="services-image">
                    <img src="./images/service-05.png" alt="payments" />
                  </div>
                  <div className="txt-services">
                    <h6>secure payments</h6>
                    <p>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3">
        <div className="container">
          <div className="categories-upper">
            <div className="row">
              <div className="col-12">
                <div
                  className="categories"
                  style={{ borderBottom: "1px solid #e7e7e7" }}
                >
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>computers & laptop</h6>
                      <p>8 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/laptop.jpg" alt="laptop" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>cameras & videos</h6>
                      <p>10 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/camera.jpg" alt="camera" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>smart television</h6>
                      <p>12 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/tv.jpg" alt="tv" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>smart watches</h6>
                      <p>13 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/camera.jpg" alt="watches" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>music & gmaing</h6>
                      <p>4 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/laptop.jpg" alt="laptop" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="categories">
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>mobailes & tablets</h6>
                      <p>5 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/laptop.jpg" alt="laptop" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>headPhones</h6>
                      <p>6 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/headphone.jpg" alt="headphone" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>accessories</h6>
                      <p>10 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/acc.jpg" alt="accessories" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>portable speakers</h6>
                      <p>8 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/speaker.jpg" alt="speaker" />
                    </div>
                  </div>
                  <div className="feat">
                    <div className="txt-feat">
                      <h6>home appliances</h6>
                      <p>6 items</p>
                    </div>
                    <div className="img-feat">
                      <img src="./images/homeapp.jpg" alt="homeapp" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper">
        <div className="container">
          <div className="heading-title">
            <h4>featured collection</h4>
          </div>
          <div className="row">
            <ProductsCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="famous-products">
                <div className="proudct-image">
                  <img
                    className="img-fluid"
                    src="images/appel3.jpg"
                    alt="appel watch"
                  />
                </div>
                <div className="product-content">
                  <span>big screen</span>
                  <h4 style={{ color: "white" }}>smart watch series 7</h4>
                  <p>from $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-products">
                <div className="proudct-image">
                  <img
                    className="img-fluid"
                    src="images/laptop1.jpg"
                    alt="laptop1"
                  />
                </div>
                <div className="product-content">
                  <span>studio display</span>
                  <h4 style={{ color: "white" }}>600 nits of brightness.</h4>
                  <p>27-inch 5k retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-products">
                <div className="proudct-image">
                  <img
                    className="img-fluid"
                    src="images/iphone.jpg"
                    alt="iphone"
                  />
                </div>
                <div className="product-content">
                  <span>smartphone</span>
                  <h4>smartphone 13 pro.</h4>
                  <p>
                    mpw in green from $999.00 or $41.62/mo.for24 mo. footnote
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-products">
                <div className="proudct-image">
                  <img
                    className="img-fluid"
                    src="images/speaker1.jpg"
                    alt="speaker1"
                  />
                </div>
                <div className="product-content">
                  <span>home speakers</span>
                  <h4>room-filling sound.</h4>
                  <p>from $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper">
        <div className="container">
          <div className="heading-title">
            <h4>special products</h4>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
                <SwiperSlide>
                  <SpecialProducts />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper">
        <div className="container">
          <div className="heading-title">
            <h4>our popular products</h4>
          </div>
          <div className="row">
            <PopularProducts />
            <PopularProducts />
            <PopularProducts />
            <PopularProducts />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Marquee
                  className="marquee-edi"
                  style={{ borderRadius: "6px" }}
                >
                  <div className="brand-marq">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="brand-marq">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-cards">
        <div className="container">
          <div className="title-blog">
            <h4>our latest news</h4>
          </div>
          <div className="row">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
