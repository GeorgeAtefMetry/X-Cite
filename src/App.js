import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import './fontawesome-free-6.1.1-web/css/all.css'
import './fontawesome-free-6.1.1-web/css/fontawesome.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { Navbar } from 'react-bootstrap';
import NavDropdown  from 'react-bootstrap/esm/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import flag1 from './assests/flag-1.png'
import flag2 from './assests/flag-2.png'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer'
import Home from './home/home';
import GiftCard from './Components/GiftCards/GiftCard';
import ITunesCard from './Components/ITuensCards/ITunesCard';
import GooglePlayCards from './Components/GooglePlayCards/GooglePlayCards';


function App() {
  return (
    <>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" exact  element={<Home/>} ></Route>
            <Route path="/home" exact  element={<Home/>} ></Route>
            <Route path="/GiftCard" exact  element={<GiftCard/>} ></Route>
            <Route path="/ITunesCard" exact  element={<ITunesCard/>} ></Route>
            <Route path="/GooglePlayCards" exact  element={<GooglePlayCards/>} ></Route>
          </Routes>
          <Footer></Footer>
        </Router>

    </>
  );
}

export default App;
