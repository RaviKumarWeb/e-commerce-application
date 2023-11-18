import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-around align-items-center  py-3">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data mb-2 d-flex justify-content-around align-items-center py-3">
              <div className=" cart-col-1 d-flex gap-15 align-items-center ">
                <div className="w-25">
                  <img src={watch} alt="product image" className="img-fluid " />
                </div>
                <div className="w-75">
                  <h5>Lorem ipsum</h5>
                  <p>Size: S</p>
                  <p>Color: hgf</p>
                </div>
              </div>
              <div className=" cart-col-2">
                <h5 className="price">$100.00</h5>
              </div>
              <div className=" cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    className=" form-control "
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger fs-5" />
                </div>
              </div>
              <div className=" cart-col-4">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline  ">
              <Link to="/store" className="button">
                Continue To Shopping
              </Link>
              <div className=" d-flex flex-column align-items-end ">
                <h4>SubTotal: $100 </h4>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
