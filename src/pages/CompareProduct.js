import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative ">
              <img
                src="/images/cross.svg"
                alt="cross"
                className=" position-absolute cross img-fluid "
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="watch" className="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  APPLE Watch Series 2 – 42 Mm Stainless Steel Case
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
                <div>
                  <div className=" product-detail">
                    <h5 className="">Brand:</h5>
                    <p className="">Apple</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Type:</h5>
                    <p className="">Tablet Computer</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">SKU</h5>
                    <p className="">SKU033</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Availability:</h5>
                    <p className="">In Stock</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Color</h5>
                    <Color />
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Size</h5>
                    <div className=" d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative ">
              <img
                src="/images/cross.svg"
                alt="cross"
                className=" position-absolute cross img-fluid "
              />
              <div className="product-card-image">
                <img src="/images/watch.jpg" alt="watch" className="" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  APPLE Watch Series 2 – 42 Mm Stainless Steel Case
                </h5>
                <h6 className="price mb-3 mt-3">$100</h6>
                <div>
                  <div className=" product-detail">
                    <h5 className="">Brand:</h5>
                    <p className="">Apple</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Type:</h5>
                    <p className="">Tablet Computer</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">SKU</h5>
                    <p className="">SKU033</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Availability:</h5>
                    <p className="">In Stock</p>
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Color</h5>
                    <Color />
                  </div>
                  <div className=" product-detail">
                    <h5 className="">Size</h5>
                    <div className=" d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
