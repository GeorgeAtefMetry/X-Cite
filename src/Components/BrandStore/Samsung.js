import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './Brands.module.css';
import fs from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
// images =======================
import Mobile from './../../assests/mobile.jpg';
import TV from './../../assests/tv.jpg';
import Sound from './../../assests/soundDevice.jpg';
import Home from './../../assests/homeApplia.jpg';
import Tablets from './../../assests/tablets.jpg';
import Wearables from './../../assests/wearables.jpg';
import Monitors from './../../assests/monitors.jpg';
import Accessories from './../../assests/accessories.jpg';

import GxUltra from './../../assests/card-mobiles-s22-ultra.jpeg';
import GxS22 from './../../assests/card-mobiles-galaxy-s22-plus.jpeg';
import NeoQlid from './../../assests/new-products_neo-qled.png';
import SamJet90 from './../../assests/new-products_samsung-jet.jpg';
import GxFold from './../../assests/card-mobiles-galaxy-zfold3.jpeg';
import GxFlip from './../../assests/card-mobiles-galaxy-z-flip3.jpg';
import GxBuds from './../../assests/card-mobiles-galaxy-buds2.jpg';
import secNewQled from './../../assests/card-tvs-neo-qled.png';
import Premiem from './../../assests/card-tvs-the-premiere.png';
import Frame from './../../assests/card-tvs-the-frame.png';
import Crystal from './../../assests/card-tvs-crystal-uhd.png';
import Towers from './../../assests/card-tvs-sound-towers.png';
import SoundBars from './../../assests/card-tvs-soundbars.png';
import WinfFree from './../../assests/cards-ha-wind-free-wallmount.png';
import Wash from './../../assests/cards-ha-front-loading-washer.png';
import Microwave from './../../assests/cards-ha-microwave-oven.png';

const Samsung=()=>{

    const [samsung, setSamsung] = useState({id:'', name:'', logo:'', offers:[]});
    const location = useLocation();

    useEffect(()=>{
        const samsungDoc = doc(fs,`Brands/${location.state}`)
        onSnapshot(samsungDoc,(res)=>{
            setSamsung({
                id: res.id,
                ...res.data()
            });
        })
    },[])
    return(
        <>
{/*============================== Big Container ================================== */}
        <div className={'container-fluid mb-0 px-3 '} style={{backgroundColor:'white'}}>
        {/*======================= Carousel =============================== */}
            <div className={classes.slider}>
            <Carousel interval='1000' className='col-lg-12 mx-auto p-0' style={{borderRadius:0}} variant="dark">
                {
                    (samsung.offers).map((offer, index)=>{
                    return <Carousel.Item key={index} style={{height: '540px'}}>
                            <img
                            className="d-block w-100 mb-3"
                            style={{height: '540px'}}
                            src={`${offer.imgOffer}`}
                            alt={offer.offerInfo}
                            />
                        </Carousel.Item>
                    })
                }
                <Carousel.Item style={{height: '540px'}}>
                    <img
                    className="d-block w-100 mb-3"
                    style={{height: '540px'}}
                    src="https://m.xcite.com/media/wysiwyg/Barjas/372022-Super-Eid-Sale-Generic-DP-EN.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>

        {/*======================= Categories =============================== */}
            <div className={'container text-center px-0 py-5'} style={{color:'black'}}>
                <h1 className='text-center'><b>Categories</b></h1>
                <div className='container-fluid d-flex flex-wrap justify-content-between py-5'>
                    <span className={classes.samCatg}>
                        <img src={Mobile} height='90%'/>
                        <p className='py-2'>Mobiles</p>
                    </span>
                    <span  className={classes.samCatg}>
                        <img src={TV}  height='90%'/>
                        <p  className='py-2'>TV</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Sound}  height='90%'/>
                        <p className='py-2'>SOUND DEVICES</p>
                    </span>
                    <span  className={classes.samCatg}>
                        <img src={Home}  height='90%'/>
                        <p className='py-2'>HOME APPLIANCES</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Tablets} height='90%'/>
                        <p className='py-2'>TABLETS</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Wearables} height='90%'/>
                        <p className='py-2'>WEARABLES</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Monitors}  height='90%'/>
                        <p className='py-2'>MONITORS</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Accessories}  height='90%'/>
                        <p className='py-2'>ACCESSORIES</p>
                    </span>
                </div>
            </div>

    {/*============================== Products Container ================================== */}
            <div className={'container-fluid text-center pt-5 px-5 pb-1 '+classes.bgMain}>
                    <h1 className='pt-3'>New Products</h1>

        {/*============================== Real Container ================================== */}
                <div className='container-fluid mt-5'>
            {/*================ section of Products ====================== */}
                    <div className='container-fluid mb-5 d-flex flex-wrap justify-content-between px-0'>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={GxUltra} height='50%'/>
                            <h4 className='pt-3 pb-0'>Galaxy S22 Ultra</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={GxS22} height='50%'/>
                            <h4 className='pt-3 pb-0'>Galaxy S22 | S22+</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={NeoQlid} height='50%'/>
                            <h4 className='pt-3 pb-0'>Neo QLED 8K</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={SamJet90} height='50%'/>
                            <h4 className='pt-3 pb-0'>Samsung Jet 90</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                    </div>

            {/*================ Mobile Banner ====================== */}
                    <div className={classes.mobBanner+' container-fluid p-5 mb-2 '+classes.samBanner}>
                        <div className='col-md-6 col-12 text-start py-5 ps-5 pe-0'>
                                <h1><b>Mobile</b></h1>
                                <p className='fs-6 mt-4 mb-5'>Stunning shots from the cameras. Blazing performance. 
                                    And amazing battery-life. What more can you ask for 
                                    from your next Galaxy smartphone?</p>
                                <div className='d-flex'>
                                    <div className='w-50'>
                                        <h6 className='mb-4'><b>PHONES <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6><b>WEARABLES <i class="fa-solid fa-angle-right"></i></b></h6>
                                    </div>
                                    <div className='w-50'>
                                        <h6 className='mb-4'><b>TABLETS <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6><b>ACCESSORIES <i class="fa-solid fa-angle-right"></i></b></h6>
                                    </div>
                                </div>
                        </div>
                    </div>

            {/*================ varius Product Cards ====================== */}
                    <div className='container-fluid d-flex flex-wrap px-0 justify-content-between' style={{minHeight:'550px'}}>
                        <div className={'d-flex flex-wrap justify-content-between px-0 '+classes.halfToAllWid}>
                            <div className={classes.samsungSmCards+' '+classes.smCardinBig+' px-4 py-2 mb-1'}>
                                <img src={GxS22} height='50%'/>
                                <h4 className='pt-3 pb-0 px-0'>Galaxy S22 | S22+</h4>
                                <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                            </div>
                            <div className={classes.samsungSmCards+' '+classes.smCardinBig+' px-4 py-2 mb-1'}>
                                <img src={GxFold} height='50%'/>
                                <h4 className='pt-3 pb-0 px-0'>Galaxy Z Fold3 5G</h4>
                                <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                            </div>
                            <div className={classes.samsungSmCards+' '+classes.smCardinBig+' px-4 py-2 mb-1'}>
                                <img src={GxFlip} height='50%'/>
                                <h4 className='pt-3 pb-0 px-0'>Galaxy Z Flip3 5G</h4>
                                <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                            </div>
                            <div className={classes.samsungSmCards+' '+classes.smCardinBig+' px-4 py-2 mb-1'}>
                                <img src={GxBuds} height='50%'/>
                                <h4 className='pt-3 pb-0 px-0'>Galaxy Buds2</h4>
                                <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                            </div>
                        </div>
                        <div className={'py-0 '+classes.samsungSmCards +' '+classes.halfToAllWid }>
                            <img src={GxUltra} height='65%'/>
                            <h2 className='py-0'>Galaxy S22 Ultra</h2>
                            <h5 className='py-2 px-4'><b>Buy Now</b></h5>
                        </div>
                    </div>

            {/*================ TV && Sound Banner ====================== */}
                    <div  dir='rtl' className={classes.tvBanner+' container-fluid p-5 mb-2 '+classes.samBanner}>
                                <div dir='ltr' className='col-md-6 col-12 text-start py-5 pe-5 pe-0'>
                                        <h1><b>TV & Sound Devices</b></h1>
                                        <p className='fs-6 mt-4 mb-5'>Immerse into your entertainment the way it's meant
                                        to be - stunning, vivid visuals and incredible, crisp sound. Bring it all home
                                        with Samsung TVs and soundbars.</p>
                                        <div className='d-flex'>
                                            <div className='w-50'>
                                                <h6 className='mb-4'><b>TVs <i class="fa-solid fa-angle-right"></i></b></h6>
                                                <h6><b>PROJECTORS  <i class="fa-solid fa-angle-right"></i></b></h6>
                                            </div>
                                            <div className='w-50'>
                                                <h6 className='mb-4'><b> LIFESTYLE TVs <i class="fa-solid fa-angle-right"></i></b></h6>
                                                <h6><b> SOUND DEVICES <i class="fa-solid fa-angle-right"></i></b></h6>
                                            </div>
                                        </div>
                                </div>
                    </div>
            {/*=============== Another section of Products ================= */}
                    <div className='container-fluid mb-1 d-flex flex-wrap justify-content-between px-0'>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={secNewQled} height='50%'/>
                                    <h4 className='pt-3 pb-0'>Neo QLED</h4>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={Premiem} height='50%'/>
                                    <h4 className='pt-3 pb-0'>The Premiere</h4>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={Frame} height='50%'/>
                                    <h4 className='pt-3 pb-0'>The Frame</h4>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={Crystal} height='50%'/>
                                    <h4 className='pt-3 pb-0'>Crystal UHD 4K</h4>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                    </div>

            {/*=============== section of Ads & Products ================= */}
            <div className='container-fluid mb-1 d-flex flex-wrap justify-content-between px-0'>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={Towers} height='50%'/>
                            <h4 className='pt-3 pb-0'>Sound Towers</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                        <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                            <img src={SoundBars} height='50%'/>
                            <h4 className='pt-3 pb-0'>Soundbars</h4>
                            <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                        </div>
                        <div className={classes.halfToAllWid+' p-4 mb-1 '+classes.Ads}>
                            <h4 className='px-1 pt-2' style={{width:'60%'}}>Watch your favorite content on the best screen, with Samsung TVs</h4>
                            <h6 className='py-2 px-4 mt-5'><b>Buy Now</b></h6>
                        </div>
                    </div>

            {/*================ Home Banner ====================== */}
            <div className={classes.homeBanner+' container-fluid p-5 mb-2 '+classes.samBanner}>
                        <div className='col-md-6 col-12 text-start py-5 ps-lg-5 pe-0'>
                                <h1><b>Home Appliances</b></h1>
                                <p className='fs-6 mt-4 mb-5'>Complement your lifestyle with the best of design,
                                    convenience and practically with Samsung home appliances.</p>
                                <div className='d-flex'>
                                    <div className='w-50'>
                                        <h6 className='mb-4'><b>REFRIGERATORS <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6 className='mb-4'><b>AIR SOLUTIONS <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6><b>COOKING APPLIANCES <i class="fa-solid fa-angle-right"></i></b></h6>
                                    </div>
                                    <div className='w-50'>
                                        <h6 className='mb-4'><b> LAUNDRY <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6 className='mb-4'><b> VACUUM CLEANERS <i class="fa-solid fa-angle-right"></i></b></h6>
                                        <h6><b> DISHWASHERS <i class="fa-solid fa-angle-right"></i></b></h6>
                                    </div>
                                </div>
                        </div>
                    </div>

            {/*=============== Another section of Products ================= */}
            <div className='container-fluid mb-0 d-flex flex-wrap justify-content-between px-0'>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={SamJet90} height='50%'/>
                                    <p className='pt-3 pb-0 fs-6'>Samsung Jet<small className='text-muted fs-7'>TM</small></p>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={WinfFree} height='50%'/>
                                    <p className='pt-3 pb-0 fs-7'>
                                        WindFreeTM
                                        <p className='m-0 p-0'>Wall-mount AC</p>
                                    </p>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={Wash} height='50%'/>
                                    <p className='pt-3 pb-0 fs-6'>AddWashTM</p>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                                <div className={classes.samsungSmCards+' '+classes.smallSamCard+' px-5 py-2 mb-1'}>
                                    <img src={Microwave} height='50%'/>
                                    <p className='pt-3 pb-0 fs-6'>
                                                        Solo
                                        <p className='m-0 p-0'>Microwave Oven</p>
                                    </p>
                                    <h6 className='pb-2'>Buy Now <i class="fa-solid fa-angle-right"></i></h6>
                                </div>
                    </div>


                </div>
            </div>

    {/*===================== Ather Section of Categories ============================= */}
        <div className={'container text-center px-0 py-5 mb-0'} style={{color:'black'}}>
                <h1 className='text-center'><b>Categories</b></h1>
                <div className='container-fluid d-flex flex-wrap justify-content-between py-5'>
                    <span className={classes.samCatg}>
                        <img src={Mobile} height='90%'/>
                        <p className='py-2'>Mobiles</p>
                    </span>
                    <span  className={classes.samCatg}>
                        <img src={TV}  height='90%'/>
                        <p  className='py-2'>TV</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Sound}  height='90%'/>
                        <p className='py-2'>SOUND DEVICES</p>
                    </span>
                    <span  className={classes.samCatg}>
                        <img src={Home}  height='90%'/>
                        <p className='py-2'>HOME APPLIANCES</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Tablets} height='90%'/>
                        <p className='py-2'>TABLETS</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Wearables} height='90%'/>
                        <p className='py-2'>WEARABLES</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Monitors}  height='90%'/>
                        <p className='py-2'>MONITORS</p>
                    </span>
                    <span className={classes.samCatg}>
                        <img src={Accessories}  height='90%'/>
                        <p className='py-2'>ACCESSORIES</p>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}
export default Samsung;