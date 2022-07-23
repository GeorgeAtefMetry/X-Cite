import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./fontawesome-free-6.1.1-web/css/all.css";
import "./fontawesome-free-6.1.1-web/css/fontawesome.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

// import { Navbar } from 'react-bootstrap';
// import NavDropdown  from 'react-bootstrap/esm/NavDropdown';
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import flag1 from './assests/flag-1.png'
// import flag2 from './assests/flag-2.png'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Home from "./Components/home/home";
import AppleProds from "./Components/AppleProds/AppleProds";
import Iphone from "./Components/AppleProds/Cards/Iphone/Iphone";
import Mac from "./Components/AppleProds/Cards/mac/Mac";
import Login from "./Components/Login/Login";
import SingUp from "./Components/SingUp/SingUp";
import IphoneDetiles from "./Components/AppleProds/Cards/Iphone/iphoneDetiles/IphoneDetiles";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoure from "./Components/PrivateRoure/PrivateRoure";
import Ipad from "./Components/AppleProds/Cards/ipad/Ipad";
import Shopping from "./Components/Shopping/Shopping";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/Login" exact element={<Login />}></Route>
            <Route path="/SingUp" exact element={<SingUp />}></Route>

            <Route path="/AppleProds" exact element={<AppleProds />}></Route>

            <Route path="/iphone" exact element={<Iphone />} />
            <Route path="/iphone/:iphoneId" exact element={<IphoneDetiles />} />

            <Route path="/mac" exact element={<Mac />}></Route>
            <Route path="/ipad" exact element={<Ipad />}></Route>

            <Route
              path="/Shopping"
              exact
              element={
                <PrivateRoure>
                  <Shopping />
                </PrivateRoure>
              }
            ></Route>
          </Routes>
        </AuthContextProvider>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
