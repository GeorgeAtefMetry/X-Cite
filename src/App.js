import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import "./fontawesome-free-6.1.1-web/css/all.css";
import "./fontawesome-free-6.1.1-web/css/fontawesome.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import flag1 from "./assests/flag-1.png";
import flag2 from "./assests/flag-2.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./home/home";
import GiftCard from './Components/GiftCards/GiftCard';
import ITunesCard from './Components/ITuensCards/ITunesCard';
import GooglePlayCards from './Components/GooglePlayCards/GooglePlayCards';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import BrandStore from "./Components/BrandStore/BrandStore";
import BrandDetailes from "./Components/BrandStore/BrandDetailes";
import Samsung from "./Components/BrandStore/Samsung";
import Acer from "./Components/BrandStore/acer";
import favicon from "./assests/xCitefavicon.PNG";
import DigitalCardDetails from "./digitalCardDetails/digitalCardDetails";
import Wishlist from "./wishlist/wishlist";
import SingUp from "./Components/SingUp/SingUp";
import Login from "./Components/Login/Login";
import { AuthContextProvider } from "./context/AuthContext";
import AppleProds from "./Components/AppleProds/AppleProds";
import PrivateRoure from "./Components/PrivateRoure/PrivateRoure";
import Cart from "./Components/Cart/Cart";


import IphoneDetiles from './Components/AppleProds/Cards/iphone/iphoneDetiles/IphoneDetiles'
import Iphone from './Components/AppleProds/Cards/iphone/Iphone'
import Mac from "./Components/AppleProds/Cards/mac/Mac";
import Ipad from "./Components/AppleProds/Cards/ipad/Ipad";
function getFavIconElement() {
  return document.getElementById("favicon");
}
function App() {
  const favEle = getFavIconElement();
  favEle.href = favicon;
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Header></Header>
         
          <Routes>

            <Route path="/" exact  element={<Home/>} ></Route>
            <Route path="/home" exact  element={<Home/>} ></Route>
            <Route path="/GiftCard" exact  element={<GiftCard/>} ></Route>
            <Route path="/ITunesCard" exact  element={<ITunesCard/>} ></Route>
            <Route path="/GooglePlayCards" exact  element={<GooglePlayCards/>} ></Route>
            <Route path="*" exact  element={<NotFoundPage/>} ></Route>
            <Route path="Brands" exact  element={<BrandStore/>} ></Route>
            <Route path="Brand/:id" exact  element={<BrandDetailes/>} ></Route>
            <Route path="Brand/Samsung" exact  element={<Samsung/>} ></Route>
            <Route path="Brand/Acer" exact  element={<Acer/>} ></Route>
            <Route path="/digitalcarddetails/:id" exact  element={<DigitalCardDetails/>} ></Route>
            <Route path="/wishlist/" exact  element={<Wishlist/>} ></Route>
            <Route path="/Login" exact element={<Login />}></Route>       
            <Route path="/SingUp" exact element={<SingUp />}></Route>
            <Route path="/AppleProds" exact element={<AppleProds />}></Route>
            <Route path="/iphone" exact element={<Iphone />} />
            <Route path="/iphone/:iphoneId" exact element={<IphoneDetiles />} />
            <Route path="/mac" exact element={<Mac />}></Route>
            <Route path="/ipad" exact element={<Ipad />}></Route>
            <Route path="/Cart" exact element={ <PrivateRoure> <Cart /></PrivateRoure>}></Route>
          </Routes>
      
        <Footer></Footer>
          </AuthContextProvider>
      </Router>

    </>
  );
}

export default App;
