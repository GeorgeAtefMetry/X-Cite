import React, { useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
import { useTranslation } from "react-i18next";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMess, setErrMess] = useState("");
  const navToHome = useNavigate();
  const { user, signin } = UserAuth();
  const {t } = useTranslation()
  // console.log(user);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navToHome("/home");
    } catch (e) {
      setErrMess( e.message);
      console.log(e.message);
    }
    console.log(email, password);
  };
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-6">
          <div className="log-inf">
            <h3>Existing User Login</h3>
            <p>Enter your email and password to log in:</p>
            <i class="fa fa-key ico"></i>
          </div>
          <div className="form-inp">
            <form onSubmit={handelSubmit}>
              <div class="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>{errMess}</div>
              <button type="submit" className="btn btn-warning my-1 w-100">
                {t("login")}
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="log-inf ">
            <h3>Don't have an account?</h3>
            <p>Create an account in less than 1 minute:</p>
            <i class="fa fa-user-plus ico"></i>
          </div>
          <div className="form-inp">
            <ul className="list-sign py-3">
              <li>1- Save your address for faster & easier ordering.</li>
              <li>
                2- Unlock special discounts (Secret Deals) reserved for
                registered customers only.
              </li>
              <li>3- Learn about new products & offers.</li>
              <li>4- Easily track your order.</li>
            </ul>
            <Link
              to="/SingUp"
              type="submit"
              className="btn btn-success   my-1 w-100"
            >
              create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;