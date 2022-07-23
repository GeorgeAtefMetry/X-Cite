import {Navbar} from 'react-bootstrap';
import NavDropdown  from 'react-bootstrap/esm/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import flag1 from '../assests/flag-1.png'
import flag2 from '../assests/flag-2.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome-free-6.1.1-web/css/all.css'
import '../fontawesome-free-6.1.1-web/css/fontawesome.css'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
    const  Header = () => {
        return(
            <>
            <Navbar className='navbar-bg' expand="lg" key="lg">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

            <div className='nav-top d-none d-md-block '>
                <div className='hd-container'>
                <div className='nav-top-to-right'>
                    <ul class="nav navbar-nav nav-pills hd-top-head-menu ">
                    <li class="nav-item-top"><a rel="nofollow" data-tracking-title="Top Header Menu Accessed - Trade-In KW EN" data-tracking-type="Navigation" href="https://www.xcite.com/tradein/">Trade-In</a></li>
                    <li class="nav-item-top"><a rel="nofollow" >Pay Installment</a></li>
                    <li class="nav-item-top"><a rel="nofollow" >Help &amp; Services</a></li>
                    <li class="nav-item-top"><a rel="nofollow" >X-cite Stores</a></li>
                    <li class="nav-item-top"><a rel="nofollow" >Weekly Flyer</a></li>
                    <li class="nav-item-top"><a rel="nofollow" data-toggle="modal" data-target="#ordertrack" href="#">Order Status</a></li>
                    </ul>
                    <ul class="nav navbar-nav nav-pills hd-top-head-menu ">  
    
                    <li class="nav-item-top">
                        <a rel="nofollow" >Contact Us</a>
                    </li>
    
                    <li class="nav-item-top dropdown country-switch"> 
                        <span alt="Xcite Kuwait"><img src={flag1}/></span>
                        <NavDropdown class="xc-white-font" title="Xcite Kuwait" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">                    
                            <a className="nav-sub-item" href="https://m.xcite.com//skin/frontend/xvii/default/images/flags.png">
                            <img src={flag1} class="flag flag-kw"/>&nbsp;
                                Xcite Kuwait           
                            </a>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">                    
                            <a className="nav-sub-item" href="https://m.xcite.com//skin/frontend/xvii/default/images/flags.png">
                            <img src={flag2} class="flag flag-sa" />&nbsp;
                                Xcite KSA            
                            </a>
                        </NavDropdown.Item>
                        </NavDropdown>
                    </li>
    
                    </ul>
                </div>
                </div>
            </div>
            {/* NavBar in the Middle */}
            <div className='nav-middle'>
                <div className='row'>
                <div className='col-md-2 col-sm-2 logo-img'>
                <Navbar.Brand><Link to="/home"><img class="hd-xcite-logo img-responsive" width="161" height="40" src="https://m.xcite.com/skin/frontend/xvii/default/images/xcite-logo-en.png" alt="Xcite.com"/></Link>
                </Navbar.Brand>
                </div>
                <div className='col-md-6 col-sm-12 search-input'>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2 search"
                        aria-label="Search"
                    />
                    </Form> 
                </div>
                <div className='col-md-4 col-sm-9 icons'>
                    <div className='hd-cart'>
                        <ul className='nav nav-pills hd-mid-head-nav'>
                        <li className="nav-item language-id0 xc-white-font lang-switch">
                            <a href="https://www.xcite.com/ar/" class="hd-lang-select">
                                <span class="lang-ar">العربية</span>
                            </a>
                        </li>
                        <li className='nav-item hd-dropdown account-drop' id="ajax-nav">
    
                            <div className='login'>
                            <a type="button" class="header-link trackable" data-tracking-title="Header Login Accessed - LoggedOut" data-tracking-type="Navigation" rel="nofollow" href="" title="Sign Up / Login"> 
                            <i class="fa-solid fa-user"></i>
                            <p class="d-none d-md-none d-lg-block ">Login</p>
                            <i class="fa fa-chevron-down hd-cart-chevron hidden-xs hidden-sm hidden-md" aria-hidden="false"></i>
                            </a>
                            </div>
                            
                            <div class="hd-dropdown-content pad15">
                                <a class="hd-dropdown-item" rel="nofollow" href="" title="Log In"> 
                                    <span rel="no-follow" class="xc-btn xc-btn-orange brd-rad3 mar5-b px16 show">
                                    Log In
                                    </span> 
                                </a>
                                <a rel="nofollow" class="hd-dropdown-item" >
                                    Wishlist                                        										
                                </a> 
                                <a rel="nofollow" class="hd-dropdown-item xc-cursor-pointer" >
                                    Compare                                        
                                </a>                                       
                            </div>
    
                        </li>
                        <li class="nav-item hd-cart-menu">
                            <a rel="nofollow"  class="trackable login" data-tracking-title="Header Cart Accessed" data-tracking-type="Navigation">
                            <i class="fa-solid fa-cart-shopping">
                                <span class="hd-minicart-badge" id="header-count">0</span>
                            </i>
                            <p class="d-none d-md-none d-lg-block ">
                                My Cart                                
                            </p>
    
    
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
    
            </div>
            {/* Navbar in the Bottom */}

            {/* <Navbar.Offcanvas
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >  */}
            <div className='nav-bottom d-none d-lg-block'>
                <div className='row'>
                    <div className='col-md-2'>
                    <div className='meganav-btn m-auto'>
                    <span class="hd-all-dept hidden-xs hidden-sm">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="All Categories"
                            menuVariant="dark"
                        >
                        <div className='items row'>
                            
                            <div className='categories col-md-12'>
    
                                <div className='col-md-3 category category-computers'>
                                <NavDropdown.Item className="computers" href="#action/3.1">Computer & Tablets </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='computers-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-iphones'>
                                <NavDropdown.Item className="iphones" href="#action/3.1">iTunes & Game Cards </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='iphones-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-itunes'>
                                <NavDropdown.Item className="itunes" href="#action/3.1">iTunes & Game Cards </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='itunes-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-home'>
                                <NavDropdown.Item className="home" href="#action/3.1">Home Entertainment</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='home-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-gaming'>
                                <NavDropdown.Item className="gaming" href="#action/3.1">Gaming</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='gaming-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-camera'>
                                <NavDropdown.Item className="camera" href="#action/3.1">Cameras & Drones</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='camera-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-small-home'>
                                <NavDropdown.Item className="small-home" href="#action/3.1">Small Home Appliances</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='small-home-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-large-home'>
                                <NavDropdown.Item className="large-home" href="#action/3.1">Large Home Appliances </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='large-home-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-health'>
                                <NavDropdown.Item className="health" href="#action/3.1">Health, Gym & Personal Care </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='health-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-outdoor'>
                                <NavDropdown.Item className="outdoor" href="#action/3.1">Outdoor & Travel</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='outdoor-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-air-conditioners'>
                                <NavDropdown.Item className="air-conditioners" href="#action/3.1">Air Conditioners </NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='air-conditioners-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-home-furniture'>
                                <NavDropdown.Item className="home-furniture" href="#action/3.1">Home Furniture</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='home-furniture-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>sadasdasd</li>
                                    <li>Apple</li>
                                    <li>Windfsdasafasdows</li>
                                    <li>Businfsdafasdess Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
                                    <li>Lighting</li>
                                    <li>Environmental Control</li>
                                    <li>Hubs</li>
                                    <li>Security</li>
                                </ul>
                                </div>
                                
                                </div>
    
                                <div className='col-md-3 category category-toys'>
                                <NavDropdown.Item className="toys" href="#action/3.1">Toys & Baby</NavDropdown.Item>
                                <i className="fa fa-fw fa-caret-right cat-subs"></i> 
                                </div>
                                
                                <div className='toys-items col-md-7'>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Laptops</li>
                                    <li>Apple</li>
                                    <li>Windows</li>
                                    <li>Business Computers</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Projectors & Screens</li>
                                    <li>Projectors</li>
                                    <li>Screen</li>
                                    <li>Projector Accessories</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Networking</li>
                                    <li>Adpaters & Extenders</li>
                                    <li>4G & 5G Routers</li>
                                    <li>Wifi Routers</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Tablets</li>
                                    <li>Apple iPad</li>
                                    <li>Android</li>
                                    <li>Huawei</li>
                                    <li>Other</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Apple Accessories</li>
                                    <li>For Macbooks</li>
                                    <li>Screen</li>
                                    <li>For iPads</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Power</li>
                                    <li>Cables</li>
                                    <li>Powerbanks</li>
                                    <li>Electrical extensions</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Monitors & Dektops</li>
                                    <li>iMacs</li>
                                    <li>Desktops & All in One</li>
                                    <li>Monitors</li>
                                    <li>Desktops</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Storage Devices</li>
                                    <li>Hard Drivers & SSDs</li>
                                    <li>Network Attached Storage</li>
                                    <li>Flash Devices</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>PC Accessories</li>
                                    <li>Headsets & Speackers</li>
                                    <li>Screen Protectors</li>
                                    <li>Cases & Pens</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                    <ul>
                                    <li className='main'>Mice, Keyboards and Pointing Devices</li>
                                    <li>Keyboard & Mouse</li>
                                    <li>Presenter</li>
                                    <li>Webcam</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Software</li>
                                    <li>Microsoft</li>
                                    <li>Internet Security</li>
                                    <li>Computer Infrastructure</li>
                                    <li>Dictionary</li>
                                    </ul>
                                    <ul>
                                    <li className='main'>Office Equipment</li>
                                    <li>Printing Papers</li>
                                    <li>Laminators</li>
                                    <li>Shredders</li>
                                    <li>Stationary</li>
                                    </ul>
                                </div>
                                <div className='float-left subcategories'>
                                <ul>
                                    <li className='main'>Printers, Inks & Papers</li>
                                    <li>Printers</li>
                                    <li>Inks & Toners</li>
                                </ul>
                                <ul>
                                    <li className='main'>Bags</li>
                                    <li>Top Loaders</li>
                                    <li>Backpacks</li>
                                    <li>Sleeves</li>
                                </ul>
                                <ul>
                                    <li className='main'>Home Automation</li>
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
                    <div className='col-md-6 meganav-sub-menu cal-xs-12 col-md-9 col-lg-7 col-xl-7 pad10-l pad10-r'>
                    <div class="header-highlights">
                        <ul>
                        <li><Link  className='brands' to='/dailydeals'>Daily Deals</Link></li>
                        <li><Link className='giftCards' to='/GiftCard'>Gift Cards</Link></li>
                        <li><a className='AppleProducts'  >Apple Products</a></li>
                        <li><a className='brandStore' >Brand Stores</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className='col-md-2'>
                    <div className='down-app'>
                        <a href="https://www.xcite.com/mob-apps/">
                        <span>
                            <i class="fa fa-mobile" aria-hidden="true">‍
                            </i>
                            <span> 
                            Download Our App
                            </span>
                        </span>
                        </a>
                    </div>
                    </div>
                    </div>
            </div>
                
            {/* </Navbar.Offcanvas> */}
            </Navbar>
    
            </>
        )

    }
    export default Header