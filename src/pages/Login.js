import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomeInput from "../components/CustomeInput";
const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className=" text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomeInput type="email" name="email" placeholder="Email" />
                <CustomeInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center  align-items-center gap-15 ">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className=" button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
