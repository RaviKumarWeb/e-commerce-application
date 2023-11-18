import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="/images/main-banner-1.jpg"
                alt="main banner"
                className=" img-fluid  rounded-3 "
              />
              <div className="main-banner-content position-absolute ">
                <h4>UPERCHARGED FOR PROS.</h4>
                <h5>Special Sale</h5>
                <p>
                  From $999.00 or $41.62/mo.
                  <br /> for 24 mo. Footnote*
                </p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-01.jpg"
                  alt="main banner"
                  className=" img-fluid  rounded-3 "
                />
                <div className="small-banner-content position-absolute">
                  <h4>Bestsale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br /> for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-02.jpg"
                  alt="main banner"
                  className=" img-fluid  rounded-3 "
                />
                <div className="small-banner-content position-absolute ">
                  <h4>New Arrivals</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br /> for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-03.jpg"
                  alt="main banner"
                  className=" img-fluid  rounded-3 "
                />
                <div className="small-banner-content position-absolute ">
                  <h4>New Arrivals</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br /> for 24 mo. Footnote*
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="/images/catbanner-04.jpg"
                  alt="main banner"
                  className=" img-fluid  rounded-3 "
                />
                <div className="small-banner-content position-absolute ">
                  <h4>New Arrivals</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 or $41.62/mo.
                    <br /> for 24 mo. Footnote*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between ">
              {services?.map((i, j) => {
                return (
                  <div key={j} className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className=" mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap  align-items-center ">
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/headphone.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/laptop.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/headphone.jpg" alt="camera" />
              </div>
              <div className=" d-flex gap-30 align-items-center ">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/laptop.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-01.jpg?v=1655701528"
                alt=" famous"
                className=" img-fluid "
              />
              <div className="famous-content position-absolute ">
                <h5 className="">Big Screen</h5>
                <h6 className=" text-truncate ">Smart Watch Series 7</h6>
                <p className="">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-02.jpg?v=1654920168"
                alt=" famous"
                className=" img-fluid "
              />
              <div className="famous-content position-absolute ">
                <h5 className=" text-dark">Big Screen</h5>
                <h6 className=" text-dark text-truncate ">
                  Smart Watch Series 7
                </h6>
                <p className=" text-dark">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-03.jpg?v=1654920181"
                alt=" famous"
                className=" img-fluid "
              />
              <div className="famous-content position-absolute ">
                <h5 className=" text-dark">Big Screen</h5>
                <h6 className=" text-dark text-truncate ">
                  Smart Watch Series 7
                </h6>
                <p className=" text-dark">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                src="https://demo-digitic.myshopify.com/cdn/shop/files/subbanner-04.jpg?v=1654920192"
                alt=" famous"
                className=" img-fluid "
              />
              <div className="famous-content position-absolute ">
                <h5 className=" text-dark">Big Screen</h5>
                <h6 className=" text-dark text-truncate ">
                  Smart Watch Series 7
                </h6>
                <p className=" text-dark">From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className=" d-flex ">
                <div className=" mx-4 w-25">
                  <img src="/images/brand-01.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-02.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-03.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-04.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-05.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-06.png" alt="brand" />
                </div>
                <div className=" mx-4 w-25">
                  <img src="/images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
