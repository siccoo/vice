import React, { useState } from "react";
import Footer from "../../components/footer/Footer";

import Success from "../success/Success";
import Failure from "../success/Failure";

import PayviceImg from "../../images/payvice-img.png";
import PayViceLogo from "../../images/payvice-logo.png";
import PayviceRec from "../../images/payvice-rectangle.png";

import "./Home.css";

const Home = () => {
  const [views, setViews] = useState(true);
  const [viewsSuccess, setViewsSuccess] = useState(false);
  const [viewsFailure, setViewsFailure] = useState(false);

  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    //   Make api call, if api call is successful do
    setViews(false); //it will hide the current homepage details
    setViewsSuccess(true); //it will show the success component.

    setViews(false);
    setViewsFailure(true)
  };

  const backHome = () => {
    setViews(true);
    setViewsSuccess(false);

    setViews(true);
    setViewsFailure(false)

    setValues({
      full_name: "",
      email: "",
      phone_number: "",
    });
  };

//   const homePage = () => {
//       setViews(true);
//       setViewsFailure(false);

//       setValues({
          
//       })
//   }

  const successComponent = viewsSuccess ? <Success onClick={backHome} /> : null;
  const failureComponent = viewsFailure ? <Failure onClick={backHome} /> : null;

  return (
    <div>
      <section className="payvice__navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                src={PayViceLogo}
                className="payvice__logo"
                alt="payvice__logo"
              />
            </div>
          </div>
        </div>
      </section>

      {views === true ? (
        <>
          <section className="payvice__header">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3>
                    Become an ITEX <span>PayVice agent</span> and earn more
                  </h3>
                  <div>
                    <img
                      src={PayviceRec}
                      className="payvice__rectangle"
                      alt="payvice__rectangle"
                    />
                  </div>
                  <p>
                    With over 45,000 POS terminals, 30,000 of them active in
                    Nigeria alone and over 15,000 deployed across Africa. We are
                    licensed by the Central Bank of Nigeria and we are all about
                    implementation of a “Cashless Nigeria”. Ready to become an
                    agent?
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="payvice__body">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={PayviceImg}
                    alt="payvice__img"
                    className="payvice__img"
                  />
                </div>
                <div className="col-md-6">
                  <form>
                    <p>
                      Please enter your details below and our support team will
                      reach out to you
                    </p>
                    <div className="form-group input-box">
                      <label for="exampleInputFullName1">
                        Full Name <span></span>
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group input-box">
                      <label for="exampleInputEmail1">
                        Email Address <span></span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group input-box">
                      <label for="exampleInputPhoneNumber1">
                        Phone Number <span></span>
                      </label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={values.phone_number}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      disabled={
                        !(values.full_name, values.email, values.phone_number)
                      }
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
      {successComponent}
      {failureComponent}

      <section className="payvice__footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
