import { Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import flag1 from "../../assests/flag-1.png";
import flag2 from "../../assests/flag-2.png";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../fontawesome-free-6.1.1-web/css/all.css";
// import "../fontawesome-free-6.1.1-web/css/fontawesome.css";
import "./header.css";

import { useCookies, Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import cartAction from './../../Redux/action';
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import {onSnapshot, orderBy, query, where,  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  startAt,
  endAt,
  getDocs, } from "firebase/firestore"      
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate  } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import db from '../../firebase'
import React from "react";

const Header = () => {
  // Search products
  
  const [value, setValue] = useState('')
  const [result, setResult] = useState([])
  const prdIDS = [];
  const [categories, setCats] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const navigate = useNavigate()
  // his(`/search${value}`, { replace: true })

  // useEffect(() => {
  //   if(value.length > 0){
  //     const catCollection = collection(db, "Products");
  //     onSnapshot(catCollection,(snapshot)=>{
  //         setCats(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
  //         // setResult([])
  //         let searchQuery = value.toLowerCase()
  //         for(let key in categories){
  //           let data = categories[key].name.toLowerCase()
  //           if(data.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
  //             setResult(prevResult =>{
  //               return [...prevResult, categories[key].name]
  //             })
  //           }
  //         }
  //       })
  //   }else{
  //     setResult([])
  //   }
  // }, [value]);
// *****************************************************************************

  // const proCollection = collection(db,'Products');
  // const q_tvsProds = query(proCollection, where('brandName','==', 'Apple'));
  // onSnapshot(q_tvsProds,(snapshot)=>{
  //     setResult(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
  // })

  useEffect(() => {
  const catCollection = collection(db, "Products");
  // let dataValue = value.toLowerCase()
  // const q_tvsProds = query(catCollection, where('name','==',value));  
  if(value.length>0){
    navigate('/search',{state:{name:value}})
    }else{
      setResult([])
      setFilteredContacts([])
      navigate('/home')
    }
  
}, [value]);
// //************************************************************************ */
  // useEffect(() => {
  // if (value.length > 0) {
  //   setResult([]);
  //   const colRef = collection(db, "Products");
  //   //name
  //   var searchnamequery = query(
  //     colRef,
  //     orderBy("brandName"),
  //     startAt(value.toLowerCase()),
  //     endAt(value.toLowerCase() + "\uf8ff")
  //   );
  //   console.log(searchnamequery)
  //   getDocs(searchnamequery).then((q) => {
  //     console.log(q);
  //       q.forEach((res) => {
  //         // console.log(res)
  //         if (res.exists() && !prdIDS.includes(res.id)) {
  //           setResult((products) => [
  //             ...products,
  //             console.log(products),
  //             { ...res.data(), productID: res.id },
  //           ]);
  //           console.log(result);
  //           prdIDS.push(res.id);
  //         }
  //       });
  //     })
  
  // }
  // },[value])
// ************************************************************************************************************
  // const [contacts, setContacts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [filteredContacts, setFilteredContacts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await collection(db,"Products").orderBy("name").get();
  //     setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   setFilteredContacts(
  //     contacts.filter(
  //       (user) =>
  //         user.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, contacts]);


  // get status of current language

  
  const [lang, setLang] = useState(false);
  const [cookies, setCookies]= useCookies("Cart");
  const cartCounter = useSelector(state=> state.cartCounter);
  const dispatch = useDispatch()
  // get status of their is user or not and handel logout
  const { user, logout } = UserAuth();
  const navTologin = useNavigate();
  
  useEffect(()=>{
    if(user)
    {
      const usrDoc = doc(db, 'users/', `${user.uid}`)
      onSnapshot(usrDoc,(snapshot)=>{
          const cart = snapshot.data().cart;
          dispatch(cartAction(cart.length))
        })
    }
    else
    {
      dispatch(cartAction(cookies.Cart?(cookies.Cart.length?cookies.Cart.length:0):0))
    }
  },[user])


  // change the diraction of the page based on the value of the lang
  document.body.dir = lang ? "rtl" : "ltr";
  const { t, i18n } = useTranslation();
  
  // add the current lang to localStorage and get when application run another time and sit as defulit
  localStorage.setItem("language", i18n.language);
  
  const changeLanguage = () => {
    setLang(!lang);
    i18n.changeLanguage(lang ? "en" : "ar");
  };
  
  // handel when user logout and navigate him to login component
  const handleLogIn = async () => {
    try {
      await logout();
      navTologin("/Login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Navbar className="bgMainCol px-0 pt-0 pb-1" expand="lg" key="lg">
        {/* <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" /> */}

        <div className="top-nav d-none d-md-block p-0 d-flex">
          <ul className="nav-pills hd-top-head-menu">
            <li className="nav-item-top">
              <a href="https://www.xcite.com/tradein/">{t("trade")}</a>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("Pay Installment")}</Link>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("Help Services")}</Link>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("X-cite Stores")}</Link>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("Weekly Flyer")}</Link>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("Order Status")}</Link>
            </li>
            <li className="nav-item-top">
              <Link to={"/test"}>{t("Contact Us")}</Link>
            </li>
            <li className="nav-item-top text-end ps-1 pe-0">
              <img src={flag1} alt="KSa" width="70%" className="p-0" />
            </li>

            <li className="nav-item-top country-switch bgMainCol pe-lg-5">
              <NavDropdown title={t("Xcite Kuwait")} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <a
                    className="nav-sub-item"
                    href="https://m.xcite.com//skin/frontend/xvii/default/images/flags.png"
                  >
                    <img src={flag1} alt="flag" className="flag pe-0" />
                    {t("Xcite Kuwait")}
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <a
                    className="nav-sub-item"
                    href="https://m.xcite.com//skin/frontend/xvii/default/images/flags.png"
                  >
                    <img src={flag2} alt="flag" className="flag pe-1" />
                    {t("Xcite KSA")}
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </Navbar>

      {/* NavBar in the Middle */}
      <Navbar
        sticky="top"
        key="md"
        className="nav-middle d-flex flex-wrap p-0 align-items-center justify-content-around py-1 my-0 mx-0"
        style={{ minHeight: "50px", boxShadow: "none" }}
      >
        <div className="col-md-2 col-5 order-md-1 order-1 text-center ps-2">
          <Navbar.Brand>
            <Link to="/home">
              <img
                width="80%"
                // height="10%"
                src="https://m.xcite.com/skin/frontend/xvii/default/images/xcite-logo-en.png"
                alt="Xcite.com"
                title="Xcite.com"
              />
            </Link>
          </Navbar.Brand>
        </div>
        <div className="col-md-6 col-12 order-md-2 order-3">
          <Form>
            <FormControl
              type="search"
              placeholder="Search for products, categories, ..."
              className="search px-3"
              aria-label="Search"
              onChange={(e)=>setValue(e.target.value)}
            />
          </Form>
        </div>
        <div
          className="col-md-4 col-5 order-md-3 order-2 d-flex align-items-center py-1 ps-sm-3 pe-3 ps-2"
          style={{ height: "50px" }}
        >
          <div className="col-4 text-center minHead h-100">
            <button
              onClick={() => changeLanguage()}
              href="https://www.xcite.com/ar/"
              className="text-light w-100 lang-change"
            >
              {lang ? "English" : "العربية"}
            </button>
          </div>

          <div className="col-4 text-center minHead h-100 nav-pills ">
            <div className="nav-item account-drop w-100" id="ajax-nav">
              <div className="login nav-item account-drop w-100 d-flex align-items-center justify-content-center">
                <Link
                  type="button"
                  className="d-flex align-items-center justify-content-center"
                  data-tracking-title="Header Login Accessed - LoggedOut"
                  data-tracking-type="Navigation"
                  rel="nofollow"
                  to="/UserProfile"
                  title="Sign Up / Login"
                >
                  <i
                    className="fa-solid fa-user m-0 p-0"
                    style={{ fontSize: "1.1rem" }}
                  ></i>
                  <span
                    className="d-none d-lg-block py-0 ps-1 pe-0 m-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {user ? user?.email?.slice(0, 6) : t("login")}
                  </span>
                  <i
                    className="fa-solid fa-angle-down py-0 ps-1 pe-0 m-0"
                    style={{ fontSize: "0.8rem" }}
                  ></i>
                </Link>
              </div>

              <div className="hd-dropdown-content px-sm-3 pb-2 shadow">
                {user ? (
                  <button
                    type="submit"
                    onClick={() => {
                      handleLogIn();
                    }}
                    className="btn btn-warning my-1 w-100"
                  >
                    {t("logout")}
                  </button>
                ) : (
                  <Link to="/Login" className=" h-auto">
                    <button
                      type="submit"
                      className="btn btn-warning my-1 w-100"
                    >
                      {t("login")}
                    </button>
                  </Link>
                )}
                  <Link to={`/wishlist`} className="my-1">{t("wishlist")}</Link>
                <a rel="nofollow" className="xc-cursor-pointer my-1">
                  {t("Compare")}
                </a>
              </div>
            </div>
          </div>

          <div className="col-4 text-center minHead h-100">
            <Link
              className=" login d-flex text-light minHead text-center mx-auto"
              to="/Cart"
            >
              <i
                className="fa-solid fa-cart-shopping fs-4"
                style={{ position: "relative" }}
              >
                <span className="text-light cartCounter" id="header-count">
                  {cartCounter}
                </span>
              </i>
              <span
                className="d-none d-md-none d-lg-block ps-1"
                style={{ fontSize: "0.73rem" }}
              >
                {t("My Cart")}
              </span>
            </Link>
          </div>
        </div>
      </Navbar>

      {/* Navbar in the Bottom */}
      {/* <Navbar.Offcanvas
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >  */}
      <Navbar className="bgMainCol px-0 pb-0 pt-1" expand="lg" key="sm">
        <div className="nav-bottom d-none d-lg-block container-fluid py-0 m-0">
          <div className="row">
            <div className="col-md-2">
              <div className="meganav-btn m-auto">
                <span className="hd-all-dept hidden-xs hidden-sm">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    style={{ fontSize: "0.8rem" }}
                    title={t("All Categories")}
                  >
                    <div className="items row">
                      <div
                        className="categories shadow-lg px-0 pt-0 pb-2 m-0"
                        style={{ width: "21%" }}
                      >
                        <div className="col-md-12 category category-computers d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="computers p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Computer & Tablets")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="computers-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">{t("Laptops")}</li>
                              <li>{t("Apple")}</li>
                              <li>{t("Windows")}</li>
                              <li>{t("Business Computers")}</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adapters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-iphones d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="iphones p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Phones & Personal Audio")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="iphones-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-itunes d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="itunes p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("iTunes & Game Cards")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="itunes-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-home d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="home p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Home Entertainment")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="home-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windfsdasafasdows</li>
                              <li>Businfsdafasdess Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-gaming d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="gaming p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Gaming")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="gaming-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-camera d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="camera p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Cameras & Drones")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="camera-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windfsdasafasdows</li>
                              <li>Businfsdafasdess Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-small-home d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="small-home p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Small Home Appliances")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="small-home-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-large-home d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="large-home p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Large Home Appliances")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="large-home-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windfsdasafasdows</li>
                              <li>Businfsdafasdess Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-health d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="health p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Health, Gym & Personal Care")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="health-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-outdoor d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="outdoor p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Outdoor & Travel")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="outdoor-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windfsdasafasdows</li>
                              <li>Businfsdafasdess Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-air-conditioners d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="air-conditioners p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Air Conditioners")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="air-conditioners-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-home-furniture d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="home-furniture p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Home Furniture")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="home-furniture-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">sadasdasd</li>
                              <li>Apple</li>
                              <li>Windfsdasafasdows</li>
                              <li>Businfsdafasdess Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-12 category category-toys d-flex py-1 px-3 m-0">
                          <NavDropdown.Item
                            className="toys p-0 m-0"
                            href="#action/3.1"
                          >
                            {t("Toys & Baby")}
                          </NavDropdown.Item>
                          <i class="fa-solid fa-caret-right"></i>
                        </div>

                        <div className="toys-items col-md-8 ps-4 py-3">
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Laptops</li>
                              <li>Apple</li>
                              <li>Windows</li>
                              <li>Business Computers</li>
                            </ul>
                            <ul>
                              <li className="main">Projectors & Screens</li>
                              <li>Projectors</li>
                              <li>Screen</li>
                              <li>Projector Accessories</li>
                            </ul>
                            <ul>
                              <li className="main">Networking</li>
                              <li>Adpaters & Extenders</li>
                              <li>4G & 5G Routers</li>
                              <li>Wifi Routers</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Tablets</li>
                              <li>Apple iPad</li>
                              <li>Android</li>
                              <li>Huawei</li>
                              <li>Other</li>
                            </ul>
                            <ul>
                              <li className="main">Apple Accessories</li>
                              <li>For Macbooks</li>
                              <li>Screen</li>
                              <li>For iPads</li>
                            </ul>
                            <ul>
                              <li className="main">Power</li>
                              <li>Cables</li>
                              <li>Powerbanks</li>
                              <li>Electrical extensions</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">Monitors & Dektops</li>
                              <li>iMacs</li>
                              <li>Desktops & All in One</li>
                              <li>Monitors</li>
                              <li>Desktops</li>
                            </ul>
                            <ul>
                              <li className="main">Storage Devices</li>
                              <li>Hard Drivers & SSDs</li>
                              <li>Network Attached Storage</li>
                              <li>Flash Devices</li>
                            </ul>
                            <ul>
                              <li className="main">PC Accessories</li>
                              <li>Headsets & Speackers</li>
                              <li>Screen Protectors</li>
                              <li>Cases & Pens</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories ps-0 pe-2">
                            <ul>
                              <li className="main">
                                Mice, Keyboards and Pointing Devices
                              </li>
                              <li>Keyboard & Mouse</li>
                              <li>Presenter</li>
                              <li>Webcam</li>
                            </ul>
                            <ul>
                              <li className="main">Software</li>
                              <li>Microsoft</li>
                              <li>Internet Security</li>
                              <li>Computer Infrastructure</li>
                              <li>Dictionary</li>
                            </ul>
                            <ul>
                              <li className="main">Office Equipment</li>
                              <li>Printing Papers</li>
                              <li>Laminators</li>
                              <li>Shredders</li>
                              <li>Stationary</li>
                            </ul>
                          </div>
                          <div className="float-left subcategories px-0">
                            <ul>
                              <li className="main">Printers, Inks & Papers</li>
                              <li>Printers</li>
                              <li>Inks & Toners</li>
                            </ul>
                            <ul>
                              <li className="main">Bags</li>
                              <li>Top Loaders</li>
                              <li>Backpacks</li>
                              <li>Sleeves</li>
                            </ul>
                            <ul>
                              <li className="main">Home Automation</li>
                              <li>Lighting</li>
                              <li>Environmental Control</li>
                              <li>Hubs</li>
                              <li>Security</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavDropdown>
                </span>
              </div>
            </div>

            <div className="col-md-6 cal-xs-12 col-lg-7 col-xl-7 pad10-l pad10-r">
              <div className="header-highlights">
                <ul>
                  <li>
                    <Link className="brands me-3 ps-2" to="/dailydeals">
                      {t("Daily Deals")}
                    </Link>
                  </li>
                  <li>
                    <Link className="giftCards mx-3" to="/GiftCard">
                      {t("Gift Cards")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Brand/Apple" className="AppleProducts mx-3">
                      {t("Apple Products")}
                    </Link>
                  </li>
                  <li>
                    <Link className="brandStore ms-3" to="/Brands">
                      {t("Brand Stores")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="down-app">
                <a href="https://www.xcite.com/mob-apps/">
                  <span>
                    <i className="fa fa-mobile" aria-hidden="true">
                      ‍
                    </i>
                    <span>{t("Download Our App")}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      {/* </Navbar.Offcanvas> */}
      {/* <div>
        {filteredContacts.map(cat => (
          <div className='col-lg-3 col-md-6 col-10 p-2 m-0' key={cat.id}>
              <div className="card p-0 m-0" style={{width: '100%', height:'17rem'}}>
                  <img className="card-img-top h-75" src={cat.images[1]} alt="Card image cap"/>
                  <div className="card-body py-2 px-3 w-100">
                      <span className="card-text first float-left col-lg-9 text-start" >{cat.name}</span>
                      <span className="card-text second float-right col-lg-3 h-100">
                          Save Up to
                          <span className='float-right disc'>
                              {cat.discount}%
                          </span>
                      </span>
                  </div>
              </div>
          </div>
        ))}
        </div> */}
    </>
  );
};
export default Header;
