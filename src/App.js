import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import "./fontawesome-free-6.1.1-web/css/all.css";
import "./fontawesome-free-6.1.1-web/css/fontawesome.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Home from "./Components/home/home";
import GiftCard from './Components/GiftCards/GiftCard';
import ITunesCard from './Components/ITuensCards/ITunesCard';
import GooglePlayCards from './Components/GooglePlayCards/GooglePlayCards';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import BrandStore from "./Components/BrandStore/BrandStore";
import BrandDetailes from "./Components/BrandStore/BrandDetailes";
import Samsung from "./Components/BrandStore/Samsung";
import Acer from "./Components/BrandStore/acer";
import favicon from "./assests/xCitefavicon.PNG";
import ProductDetails from "./Components/ProductDetails/ProductDetailes";
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
import Test from './test';
import AppleWatch from "./Components/AppleProds/Cards/AppleWatch/AppleWatch";
import AirPods from "./Components/AppleProds/Cards/AirPods/AirPods";
import AppleTv from "./Components/AppleProds/Cards/AppleTv/AppleTv";
import AirTag from "./Components/AppleProds/Cards/AirTag/AirTag";
import Beats from "./Components/AppleProds/Cards/Beats/Beats";
import MacDetiles from "./Components/AppleProds/Cards/mac/MacDetiles/MacDetiles";
import UserProfile from './Components/UserProfile/UserProfile';

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
            <Route path="Brand/Apple" exact element={<AppleProds />}></Route>
            <Route path="/ProductDetails/:id" exact  element={<ProductDetails/>} ></Route>
            <Route path="/wishlist/" exact  element={<Wishlist/>} ></Route>
            <Route path="/Login" exact element={<Login />}></Route>       
            <Route path="/SingUp" exact element={<SingUp />}></Route>
            <Route path="/iphone" exact  element={<Iphone />} />
            <Route path="/mac" exact element={<Mac />}></Route>
            <Route path="/ipad" exact element={<Ipad />}></Route>
            <Route path="/AppleWatch" exact element={<AppleWatch />} />
            <Route path="/AirPods" exact element={<AirPods />} />
            <Route path="/AppleTv" exact element={<AppleTv />} />
            <Route path="/AirTag" exact element={<AirTag />} />
            <Route path="/Beats" exact element={<Beats />} />
            <Route path="/iphone/:iphoneId" exact element={<IphoneDetiles />} />
            <Route path="/mac/:macId" exact element={<MacDetiles />} />
            <Route path="/Cart" exact element={<Cart />}></Route>
            <Route path="/UserProfile" exact element={ <PrivateRoure> <UserProfile /></PrivateRoure>}></Route>
            <Route path="/test" exact element={<Test />}></Route>
          </Routes>
          <Footer></Footer>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
