import React, { useState } from "react";
import {   useNavigate } from "react-router-dom";
import "./singup.css";
import { UserAuth } from "../../context/AuthContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../../firebase";

const SingUp = (props) => {
  const { title  } = props
  const navigate = useNavigate()
  const {createUser} = UserAuth()
  
  // values of inps
  const [inpValue, setINpValue] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    rePassword: "",
    nation: "",
    gander: "",
    location : "egypt",
    cart: []
  });
  // inps erros
  const [err, setErr] = useState({
    fullNameErr: null,
    emailErr: null,
    mobileErr: null,
    passwordErr: null,
    rePasswordErr: null,
    nationErr: null,
    ganderErr: null,
  });

  // handel change values
  const handelChange = (e) => {
    // set values
    setINpValue({
      ...inpValue,
      [e.target.name]: e.target.value,
    });
    console.log(inpValue);
    //validation
    //full name
    if (e.target.name === "fullName") {
      setErr({
        ...err,
        fullNameErr:
          e.target.value.length === 0
            ? "faild is requird"
            : e.target.value.length < 3
            ? "value must be at least 3 char"
            : "",
      });
    } else if (e.target.name === "email") {
      const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
      setErr({
        ...err,
        emailErr:
          e.target.value.length === 0
            ? "the email is requrid"
            : !emailReg.test(e.target.value)
            ? "invalid pattern"
            : "",
      });
    } else if (e.target.name === "password") {
      let repass =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
      setErr({
        ...err,
        passwordErr:
          e.target.value.length === 0
            ? "the input is requrid"
            : !repass.test(e.target.value)
            ? "wrong password"
            : "",
      });
    } else if (e.target.name === "rePassword") {
      let repass =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
      setErr({
        ...err,
        rePasswordErr:
          e.target.value !== inpValue.password
            ? "the password dont match"
            : !repass.test(e.target.value)
            ? "wrong password"
            : "",
      });
    } else if (e.target.name === "nation") {
      setErr({
        ...err,
        nationErr:
          e.target.value === "" ? "please select your nationality" : "",
      });
    } else if (e.target.name === "gander") {
      setErr({
        ...err,
        nationErr: e.target.value === "" ? "please select your gander" : "",
      });
    } else if (e.target.name === "mobile") {
      const mobReg = /^01[0125][0-9]{8}$/gm;
      setErr({
        ...err,
        mobileErr:
          e.target.value.length === 0
            ? "input is required"
            : !mobReg.test(e.target.value)
            ? "please enter mobile number starts with 01 and must be 11 numbers"
            : "",
      });
    }
  };

  // handel submit
  const handelsubmit = async (e) => {
    e.preventDefault()
    console.log(inpValue);
    try {
      await createUser(inpValue.email , inpValue.password).then((res)=>{
          console.log(res.user);
          const userCollec = doc(db, `users/${res.user.uid}`)
          setDoc(userCollec, inpValue).then(()=>{
            navigate('/home')
          })
      })
    } catch (e) {
      console.log(e.message);
    }
  };
  
  return (
    <div className="container-fluid">
      <div>
        <h3 className="py-2">{title || "create new account"} </h3>
      </div>
      <div className="row  mx-2 my-2">
        <div className="col-12">
          <form
            onSubmit={(e) => {
              handelsubmit(e);
            }}
          >
            <div className="row mx-2 my-2">
              <div className="col-lg-6 singup">
                <div className="mb-3">
                  <label htmlFor="Fullname" className="form-label">
                    Full Name
                  </label>
                  {/* ***************** full name ************** */}
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    id="Fullname"
                    placeholder="Full Name"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                    value={inpValue.fullName}
                  />
                  <div className="text-danger">{err.fullNameErr}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  {/* ***************** email ************** */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    name="email"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                    value={inpValue.email}
                  />
                  <div className="text-danger">{err.emailErr}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Mobile" className="form-label">
                    Mobile number
                  </label>
                  {/* ***************** Mobile ************** */}
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    placeholder="Mobile"
                    name="mobile"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                    value={inpValue.mobile}
                  />
                  <div className="text-danger">{err.mobileErr}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  {/* ***************** Password ************** */}
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder=" Password"
                    name="password"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                    value={inpValue.password}
                  />

                  <div className="text-danger">{err.passwordErr}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="rePassword" className="form-label">
                    *Confirm Password
                  </label>
                  {/* ***************** confirm Password ************** */}
                  <input
                    type="password"
                    className="form-control"
                    id="rePassword"
                    placeholder="re enter password"
                    name="rePassword"
                    onChange={(e) => {
                      handelChange(e);
                    }}
                    value={inpValue.rePassword}
                  />
                  <div className="text-danger">{err.rePasswordErr}</div>
                </div>
              </div>
              <div className="col-lg-6 singup left">
                <div className="warpper">
                  <div>
                    <p>Nationality</p>
                    <select
                      name="nation"
                      class="form-select"
                      aria-label="Default select example"
                      defaultValue={"select" + inpValue.nation}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                    >
                      {/* ***************** Nationalty ************** */}

                      <option></option>
                      <option value="egypt">egypt</option>
                      <option value="Kuweit">Kuweit</option>
                      <option value="Saudi">Saudi</option>
                      <option value="dubia">dubia</option>
                    </select>
                    <div className="text-danger">{err.nationErr}</div>
                  </div>
                  <div className="py-1">
                    <p>Gander</p>
                    <select
                      name="gander"
                      class="form-select"
                      aria-label="Default select example"
                      defaultValue={"select" + inpValue.gander}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                    >
                      {/* ***************** Gander ************** */}
                      <option></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div className="text-danger">{err.ganderErr}</div>
                  </div>
                  <div>
                    <label className="d-block py-2" htmlFor="birthday">
                      Birthday:
                    </label>
                    {/* ***************** birthday ************** */}
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      className="form-control"
                      onChange={(e) => {
                        handelChange(e);
                      }}
                    />
                  </div>
                  {/* ***************** submit ************** */}
                  <button
                   
                    type="submit"
                    className="btn btn-sub my-5 w-100"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
