import './home.css'
import { Carousel } from "react-bootstrap"
import { useEffect, useState } from "react"
import db from '../firebase'
import { collection, doc, onSnapshot } from "firebase/firestore"            
import React from 'react';
import { Link } from 'react-router-dom'

const Home = () =>{

    const[product, setProduct] = useState([])
    const[digitalCards, setDigitalCards] = useState([])
    useEffect(()=>
        onSnapshot(collection(db,'category'),(snapshot)=>{
            setProduct(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    
    useEffect(()=>
        onSnapshot(collection(db,'products/XWFqnqc6ij0vYjsfF0iQ/digital-cards'),(snapshot)=>{
            console.log(snapshot)
            setDigitalCards(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);

    return(
        <>
        <div className='slider'>
        <Carousel fade className="col-lg-12">
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/372022-Super-Eid-Sale-Generic-DP-EN.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookPro-13inKW-DP-EN.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Spend20-EidAdha-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/772022-SONY-10off-Generic-EID-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Purifier-Philips-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EidAdha-Samsung-S22-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/672022-EidAdha-Iron-Philips-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/04072022-EidAdhaKW-Remington-Haird-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-TVs-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Lenovo-TabP11-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/07072022-EidAdhaKW-Philips-lumea-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Oculus-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-ACs-DP-EN_1.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Acer-Aspire5-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Free-Gifts-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EID-SONY-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/04072022-EidAdha-BekoWasher-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-Wansa-TMR-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/772022-HP-Laptop-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/372022-Hidratespark-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/2962022-HP-Classic-Pro-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/472022-BlueAir-Purifier-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/1nasima/2862022-Acer-Gaming-Predator-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookAir-M2chipKW-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{borderRadius:'20px'}}
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookPro-13inKW-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>

        <div className='main-categories'>
            <div className='row'>
                {product.map(pro => (
                <div className='col-lg-3 col-md-6' key={pro.id}>
                    <div className="card">
                        <img className="card-img-top" src={pro.img} alt="Card image cap"/>
                        <div className="card-body">
                            <span className="card-text first float-left col-lg-10" >{pro.Name}</span>
                            <span className="card-text second float-right col-lg-2">
                                Save Up to
                                <span className='float-right disc'>
                                    {pro.discount}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className='digital-cards'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className='float-left digital-cards-heading'>Digital Cards</div>
            <div className='view-all float-right'>View All</div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div className='row'>
                {digitalCards.map(pro => (
                    <div className='digital-card float-left' key={pro.id}>
                        <div>
                            <span className='best-seller float-left'>Best Seller</span>
                            <span className='icon float-right'><i class="far fa-heart"></i></span>
                        </div>
                        
                        <Link to={`/dailydeals/${pro.id}`}>
                            <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                        </Link>
                        <div class="card-body">
                            <span class="card-text name float-left col-lg-10">{pro.name}</span>
                            <span class="card-text price float-left col-lg-10">{pro.price}</span>
                            <div className='float-left col-lg-12'>
                                <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                <span className='discount float-left col-lg-4'>{pro.discount}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>  
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </div>

        <div className='phones-personal-audio'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className='float-left phones-personal-heading'>Phones & Personal Audio</div>
            <div className='view-all float-right'>View All</div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div className='row'>
                    <div className='phones-personal-audio float-left'>
                        <div>
                            <span className='best-seller float-left'>Best Seller</span>
                            <span className='icon float-right'><i class="far fa-heart"></i></span>
                        </div>
                        <img class="card-img-top" src='https://m.xcite.com/media/catalog/product/cache/1/small_image/255x300/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13_pro_max_sierra_blue_pdp_image_position-1a_en_8.jpg ' alt="Card image cap"/>
                        <div class="card-body">
                            <span class="card-text name float-left col-lg-10">Apple iPhone 13 Pro Max 256GB - Blue</span>
                            <span class="card-text price float-left col-lg-10">377.900 KD</span>
                            <div className='float-left col-lg-12'>
                                <span class="card-text oldprice float-left col-lg-4">439.900 KD</span>
                                <span className='discount float-left col-lg-4'>Save 14%  </span>
                            </div>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </div>

        <div className='laptops'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className='float-left laptops-heading'>Laptops</div>
            <div className='view-all float-right'>View All</div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div className='row'>
                    <div className='laptop float-left'>
                        <div>
                            <span className='best-seller float-left'>Best Seller</span>
                            <span className='icon float-right'><i class="far fa-heart"></i></span>
                        </div>
                        <img class="card-img-top" src='https://m.xcite.com/media/catalog/product/cache/1/small_image/255x300/9df78eab33525d08d6e5fb8d27136e95/a/c/acer_aspire_5_silver_laptop_keyboard_1_.jpg ' alt="Card image cap"/>
                        <div class="card-body">
                            <span class="card-text name float-left col-lg-10">Acer Aspire 5 Intel Core i5 11th Gen, 8GB RAM, 256GB SSD + 1TB HDD, 15.6-inch Laptop - Silver</span>
                            <span class="card-text price float-left col-lg-10">189.900 KD</span>
                            <div className='float-left col-lg-12'>
                                <span class="card-text oldprice float-left col-lg-4">229.900 KD</span>
                                <span className='discount float-left col-lg-4'>Save 17%</span>
                            </div>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </div>


        
        </>
    )
}
export default Home


