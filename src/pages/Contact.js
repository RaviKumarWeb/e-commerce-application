import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact US"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15358.057563614762!2d77.7948545477929!3d15.776808107775256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb67305f1ca53a7%3A0x70cd3dc8e3a5dc76!2sGudur%2C%20Andhra%20Pradesh%20518466!5e0!3m2!1sen!2sin!4v1699074359345!5m2!1sen!2sin"
              width="600"
              height="450"
              className=" border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div className="">
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form action="" className=" d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control "
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    />
                  </div>
                  <div>
                    <button className=" button border-0 ">Send</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title mb-4">Get in touch With Us</h3>
                <div>
                  <ul className=" ps-0">
                    <li className=" mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno:277 , Near village chopal,Sonipat, 20Haryana
                      </address>
                    </li>
                    <li className=" mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+91 123456781">+91 1234567891</a>
                    </li>
                    <li className=" mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:developerravi33@gmail.com">
                        developerravi33@gmail.com
                      </a>
                    </li>
                    <li className=" mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
