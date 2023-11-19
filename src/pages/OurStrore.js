import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStrore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Strore" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="">
                <ul className=" ps-0">
                  <li className="">Watch</li>
                  <li className="">Tv</li>
                  <li className="">Camera</li>
                  <li className="">Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div className=" middle-filter">
                <h5 className="sub-title">Avaliablity</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="stock"
                  />
                  <label className="form-check-label" htmlFor="stock">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="outStock"
                  />
                  <label className="form-check-label" htmlFor="outStock">
                    Out of Stock (0)
                  </label>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className=" d-flex align-items-center gap-10">
                  <div class="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Color</h5>
                <div className="">
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div className="">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="s"
                    />
                    <label className="form-check-label" htmlFor="s">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="m"
                    />
                    <label className="form-check-label" htmlFor="m">
                      M (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="l"
                    />
                    <label className="form-check-label" htmlFor="l">
                      L (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="xl"
                    />
                    <label className="form-check-label" htmlFor="xl">
                      XL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="xxl"
                    />
                    <label className="form-check-label" htmlFor="xxl">
                      XXL (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap  align-items-center gap-10">
                  <span className=" badge bg-light text-secondary  rounded-3 py-2 px-3">
                    HeadPhone
                  </span>
                  <span className=" badge bg-light text-secondary  rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className=" badge bg-light text-secondary  rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className=" badge bg-light text-secondary  rounded-3 py-2 px-3">
                    Vivo
                  </span>
                  <span className=" badge bg-light text-secondary  rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="/images/watch.jpg"
                      alt="watch"
                      className=" img-fluid "
                    />
                  </div>
                  <div className="w-50">
                    <h5 className="">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={5}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="/images/watch.jpg"
                      alt="watch"
                      className=" img-fluid "
                    />
                  </div>
                  <div className="w-50">
                    <h5 className="">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={5}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center ">
                <div className=" d-flex align-items-center gap-10">
                  <p className="mb-0">Sort By:</p>
                  <select
                    name="sort_by"
                    class="facet-filters__sort select__select caption-large"
                    id="SortBy"
                    aria-describedby="a11y-refresh-page-message"
                    fdprocessedid="uoa99u"
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>

                <div className=" d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="/images/gr4.svg"
                      alt="grid"
                      className=" d-block  img-fluid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="/images/gr3.svg"
                      alt="grid"
                      className=" d-block  img-fluid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="/images/gr2.svg"
                      alt="grid"
                      className=" d-block  img-fluid"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="/images/gr.svg"
                      alt="grid"
                      className=" d-block  img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap gap-10 ">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStrore;
