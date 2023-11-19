import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import watch2 from "https://demo-digitic.myshopify.com/cdn/shop/products/09_00_260x.jpg?v=1655095991";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  let location = useLocation();

  return (
    <div
      className={`${
        location.pathname == "/store" ? `gr-${props.grid}` : "col-3"
      }`}
    >
      <Link
        to={`${location.pathname == "/" ? "product/:id" : ""}`}
        className="product-card position-relative "
      >
        <div className="wishlist-icon position-absolute ">
          <button className=" border-0 bg-transparent ">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className=" img-fluid" alt="product image" />
          <img src={watch} className=" img-fluid" alt="product image" />
        </div>
        <div className="product-deatails">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title text-truncate ">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={3}
            activeColor="#ffd700"
          />
          <p
            className={`description ${
              props.grid === 12 ? "d-block" : "d-none"
            }`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Similique,Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Velit, aliquid. et.
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className=" d-flex flex-column gap-15">
            <button className=" border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className=" border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className=" border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
