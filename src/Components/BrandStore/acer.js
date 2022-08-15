import { useEffect, useState } from 'react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './Brands.module.css';
import fs from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
// images =======================
import UltraSlim from './../../assests/prod-1-min.png';
import Convertible from './../../assests/prod-2-min.png';
import Gaming from './../../assests/Predator-min.jpg';
import NoteBook from './../../assests/Notebook-min.png';
import AllInOne from './../../assests/all-in-1-min.png';
import Desktop from './../../assests/desktop-min.png';
import Projector from './../../assests/projector-min.png';
import Monitor from './../../assests/monitor-min.png';
import eyeTracking from './../../assests/eyetracking-min.jpg';
import AeroBlade from './../../assests/Aeroblade-min.jpg';
import Liquid from './../../assests/LiquidLoop-min.jpg';

const Acer=()=>{
    const [acerBrand, setAcer] = useState({id:'', name:'', logo:'', offers:[]});
    const location = useLocation();

    useEffect(()=>{
        console.log(location);
        const acerDoc = doc(fs,`Brands/${location.state}`)
        onSnapshot(acerDoc,(res)=>{
            setAcer({
                id: res.id,
                ...res.data()
            });
            console.log(res.data());
        })
    },[])

    return(
        <>
        <div className='container px-0 py-2'>
            <div className={classes.slider}>
            <Carousel interval='2000' className={'col-lg-12 mx-auto p-0 '+classes.carouselinner} variant="dark">
                {
                    (acerBrand.offers).map((offer, index)=>{
                    return <Carousel.Item key={index}>
                            <img
                            className="d-block w-100 mb-3"
                            style={{borderRadius:'20px'}}
                            src={`${offer.imgOffer}`}
                            alt={offer.offerInfo}
                            />
                        </Carousel.Item>
                    })
                }
                <Carousel.Item>
                    <img
                    className="d-block w-100 mb-3"
                    style={{borderRadius:'20px'}}
                    src="https://m.xcite.com/media/wysiwyg/Barjas/372022-Super-Eid-Sale-Generic-DP-EN.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>

            <div>
                <h4 className='text-center mt-0' style={{fontWeight:'600'}}>ABOUT {(acerBrand.name).toUpperCase()}</h4>
                <p className='fs-5' style={{textAlign: 'justify'}}>
                    Acer offers more than 40 years of pioneering innovation aimed to break down barriers 
                    between people and technology and improve the quality of life for everybody, from 
                    consumers to professionals. Thanks to an industry leading product portfolio, Acer 
                    strives to provide advanced technologies and perfectly engineered products with a 
                    progressive, cutting edge design and an uncompromised quality. With its dedicated
                    Predator brand, hardcore gamers are empowered to conquer new worlds.
                </p>
            </div>

            <div className='container mt-5 mb-4 d-flex flex-wrap justify-content-between p-0'>
                <div className={classes.acerCard+' p-4'} style={{width: '49%', height: '295px'}}>
                        <img src={UltraSlim} className={classes.acerImgCard}/>
                        <h5>Ultra-Slim <i className="fa-solid fa-caret-right"></i></h5>
                </div>
                <div className={'p-4 '+classes.acerCard} style={{width: '49%', height: '295px'}}>
                        <img src={Convertible} className={classes.acerImgCard}/>
                        <h5 className='pt-4'>Convertible <i className="fa-solid fa-caret-right"></i></h5>
                </div>
            </div>

            <div className='container p-0'>
                <img src={Gaming} width='100%' className={classes.acerCard}/>
            </div>

            <div className='container mt-4 mb-2 d-flex flex-wrap p-0'>
                <div className={'p-0 '+classes.smCards+' my-3 '+classes.marginCard}>
                        <img src={NoteBook} className={classes.acerImgCard}/>
                        <h5>Notebook  <i className="fa-solid fa-caret-right"></i></h5>
                </div>
                <div className={'p-0 my-3 '+classes.smCards +' '+ classes.marginCard}>
                        <img src={AllInOne} className={classes.acerImgCard}/>
                        <h5 className='pt-4'>All in One  <i className="fa-solid fa-caret-right"></i></h5>
                </div>
                <div className={'p-0 my-3 '+classes.smCards +' '+ classes.marginCard}>
                        <img src={Monitor} className={classes.acerImgCard}/>
                        <h5 className='pt-4'>Monitor <i className="fa-solid fa-caret-right"></i></h5>
                </div>
                <div className={'p-0 my-3 '+classes.smCards +' '+ classes.marginCard}>
                        <img src={Projector} className={classes.acerImgCard}/>
                        <h5 className='pt-4'>Projector  <i className="fa-solid fa-caret-right"></i></h5>
                </div>
                <div className={'p-0 my-3 me-0 '+classes.smCards}>
                        <img src={Desktop} className={classes.acerImgCard}/>
                        <h5 className='pt-4'>Desktop  <i className="fa-solid fa-caret-right"></i></h5>
                </div>
            </div>

            <div  className='container mt-0 mb-3 d-flex flex-wrap justify-content-between p-0'>
                <div className={classes.acerBigCard+' py-5 px-3'} style={{backgroundImage: 'url('+eyeTracking+')'}}>
                    <h5><b>Tobii Eye Traking:</b></h5>
                    <p>Eye Tracking handles natural eye movement so you can 
                        focus on what really matters - the game.</p>
                </div>
                <div className={classes.acerBigCard+' py-5 px-3'} style={{backgroundImage: 'url('+AeroBlade+')'}}>
                    <h5><b>AeroBlade™ 3D Fan:</b></h5>
                    <p>The ultrathin all-metal AeroBlade™ 3D Fan offers advanced aerodynamics
                         and superior airflow to cool the system.</p>
                </div>
                <div className={classes.acerBigCard+" py-5 px-3"} style={{backgroundImage: 'url('+Liquid+')'}}>
                    <h5><b>LiquidLoop™:</b></h5>
                    <p>The LiquidLoop™ fanless cooling system uses the evaporation and condensation
                         of liquid For dust-Free and noiseless cooling.</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Acer;