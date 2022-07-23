import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './fontawesome-free-6.1.1-web/css/all.css';
import './fontawesome-free-6.1.1-web/css/fontawesome.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import { Navbar } from 'react-bootstrap';
import NavDropdown  from 'react-bootstrap/esm/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import flag1 from './assests/flag-1.png';
import flag2 from './assests/flag-2.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import BrandStore from './Components/BrandStore/BrandStore';
import BrandDetailes from './Components/BrandStore/BrandDetailes';
import Samsung from './Components/BrandStore/Samsung';
import Acer from './Components/BrandStore/acer';
import favicon from './assests/xCitefavicon.PNG';
import DigitalCardDetails from './digitalCardDetails/digitalCardDetails';
import Wishlist from './wishlist/wishlist';


function getFavIconElement()
{
    return document.getElementById('favicon');
}
function App() {
  const favEle = getFavIconElement();
  favEle.href = favicon;
  return (
    <>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" exact  element={<Home/>} ></Route>
            <Route path="home" exact  element={<Home/>} ></Route>
            <Route path="Brands" exact  element={<BrandStore/>} ></Route>
            <Route path="Brand/:id" exact  element={<BrandDetailes/>} ></Route>
            <Route path="Brand/Samsung" exact  element={<Samsung/>} ></Route>
            <Route path="Brand/Acer" exact  element={<Acer/>} ></Route>
            <Route path="/digitalcarddetails/:id" exact  element={<DigitalCardDetails/>} ></Route>
            <Route path="/wishlist/" exact  element={<Wishlist/>} ></Route>
          </Routes>
          <Footer></Footer>
        </Router>
    </>
  );
}

export default App;
