import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomeInput from "../components/CustomeInput";
const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className=" text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomeInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomeInput
                  type="password"
                  name="cofpassword"
                  placeholder="Confirm Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center  align-items-center gap-15 ">
                    <button className=" button border-0">Reset</button>
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

export default Resetpassword;
