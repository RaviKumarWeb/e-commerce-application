import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomeInput from "../components/CustomeInput";
const Signup = () => {
  return (
    <>
      <Meta title={"Create Account"} />
      <BreadCrumb title="Create Account" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className=" text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomeInput type="text" name="name" placeholder="Name" />
                <CustomeInput type="email" name="email" placeholder="Email" />
                <CustomeInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomeInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center  align-items-center gap-15 ">
                    <button className=" button border-0">Create</button>
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

export default Signup;
