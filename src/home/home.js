import './home.css'
import { Carousel } from "react-bootstrap"
import { useEffect, useState,useSelector } from "react"
import db from '../firebase'
import { collection, doc, onSnapshot } from "firebase/firestore"            
import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Favorites from '../services/services'
const Home = () =>{

    const[product, setProduct] = useState([])
    const[digitalCards, setDigitalCards] = useState([])
    const[phonesAndPersonalAudio, setphonesAndPersonalAudio] = useState([])
    const[laptops, setLaptops] = useState([])
    const[tablets, settablets] = useState([])
    const[televisions, setTelevisions] = useState([])
    const[favorites, setFavorites] = useState([])
    
    useEffect(()=>
        onSnapshot(collection(db,'category'),(snapshot)=>{
            setProduct(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    useEffect(()=>
        onSnapshot(collection(db,'products/XWFqnqc6ij0vYjsfF0iQ/digital-cards'),(snapshot)=>{
            setDigitalCards(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>
        onSnapshot(collection(db,'products/phones-personal-audio/phones-personal-audio'),(snapshot)=>{
            setphonesAndPersonalAudio(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    useEffect(()=>
        onSnapshot(collection(db,'products/laptops/laptops'),(snapshot)=>{
            setLaptops(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    useEffect(()=>
        onSnapshot(collection(db,'products/tablets/tablets'),(snapshot)=>{
            settablets(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    useEffect(()=>
        onSnapshot(collection(db,'products/televisions/televisions'),(snapshot)=>{
            setTelevisions(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);
    useEffect(()=>
        onSnapshot(collection(db,'favorites'),(snapshot)=>{
            setFavorites(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);

    const favButton = (e,id,name,img,price,oldPrice,discount) =>{
        setIsActive(current => !current);
        const newFav = {
            name:name,
            img:img,
            price:price,
            oldPrice:oldPrice,
            discount:discount
        }
        if(e.target.className === 'fa-regular fa-heart' ){
            e.target.className = 'fa-solid fa-heart'
            Favorites.addFav(newFav)
        }else{
            e.target.className = 'fa-regular fa-heart'
            favorites.filter((item)=>{
                if(name === item.name){
                    Favorites.deleteFav(item.id)
                }
            })
        }
    }
    return(
        <>
        <div className='slider'>
        <Carousel fade className="col-lg-12">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/372022-Super-Eid-Sale-Generic-DP-EN.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookPro-13inKW-DP-EN.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Spend20-EidAdha-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1Alaa/772022-SONY-10off-Generic-EID-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Purifier-Philips-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EidAdha-Samsung-S22-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/672022-EidAdha-Iron-Philips-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/04072022-EidAdhaKW-Remington-Haird-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-TVs-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Lenovo-TabP11-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/07072022-EidAdhaKW-Philips-lumea-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-EidAdha-Oculus-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-ACs-DP-EN_1.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/572022-EidAdha-Acer-Aspire5-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/572022-Free-Gifts-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/672022-EID-SONY-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1Alaa/04072022-EidAdha-BekoWasher-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1Alaa/572022-EidAdha-Wansa-TMR-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/772022-HP-Laptop-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/3062022-Echelon-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/372022-Hidratespark-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/2962022-HP-Classic-Pro-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/472022-BlueAir-Purifier-Generic-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/1nasima/2862022-Acer-Gaming-Predator-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://m.xcite.com/media/wysiwyg/Barjas/16062022-Apple-MacBookAir-M2chipKW-DP-EN.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
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
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className='float-left digital-cards-heading'>Digital Cards</div>
            <div className='view-all float-right'>View All</div>

                <div class="carousel-item active">
                    <div className='row'>
                    {digitalCards.map(pro => (
                        <SwiperSlide>
                        <div className='digital-card float-left' key={pro.id}>
                            <div>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'>
                                    <i class="fa-regular fa-heart" 
                                        onClick={(e)=>{favButton(e,pro.id,pro.name,pro.img,pro.price,pro.oldPrice,pro.discount)}}> 
                                    </i>

                                </span>
                            </div>
                            <Link to={`/digitalcarddetails/${pro.id}`}>
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
                        </SwiperSlide>
                        ))}
                    </div>  
                </div>
                <span className='swipe'>Swipe For More</span>
        </Swiper>
        </div>


        <div className='phones-personal-audio'>        
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className='float-left phones-personal-heading'>Phones & Personal Audio</div>
            <div className='view-all float-right'>View All</div>

                <div class="carousel-item active">
                    <div className='row'>
                    {phonesAndPersonalAudio.map(pro => (
                        <SwiperSlide>
                        <div className='phones-personal-audio float-left' key={pro.id}>
                            <div>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'><i class="far fa-heart"></i></span>
                            </div>
                            {/* <Link to={`/digitalcarddetails/${pro.id}`}> */}
                                <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                            {/* </Link> */}
                            <div class="card-body">
                                <span class="card-text name float-left col-lg-10">{pro.name}</span>
                                <span class="card-text price float-left col-lg-10">{pro.price}</span>
                                <div className='float-left col-lg-12'>
                                    <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                    <span className='discount float-left col-lg-4'>{pro.discount}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                    </div>  
                </div>
                <span className='swipe'>Swipe For More</span>
        </Swiper>
        </div>


        <div className='laptops'>        
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className='float-left laptops-heading'>Laptops</div>
            <div className='view-all float-right'>View All</div>

                <div class="carousel-item active">
                    <div className='row'>
                    {laptops.map(pro => (
                        <SwiperSlide>
                        <div className='laptop float-left' key={pro.id}>
                            <div>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'><i class="far fa-heart"></i></span>
                            </div>
                            {/* <Link to={`/digitalcarddetails/${pro.id}`}> */}
                                <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                            {/* </Link> */}
                            <div class="card-body">
                                <span class="card-text name float-left col-lg-10">{pro.name}</span>
                                <span class="card-text price float-left col-lg-10">{pro.price}</span>
                                <div className='float-left col-lg-12'>
                                    <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                    <span className='discount float-left col-lg-4'>{pro.discount}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                    </div>  
                </div>
                <span className='swipe'>Swipe For More</span>
        </Swiper>
        </div>

        <div className='laptop-assistant'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='content'>
                        <h2>LAPTOP ASSISTANT</h2>
                        <p>Let us help you find the perfect laptop for...</p>
                        <div className='btns'>
                            <button type="button" class="btn">personal Use</button>
                            <button type="button" class="btn">Education</button>
                            <button type="button" class="btn ">Work</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='tablets'>        
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className='float-left tablets-heading'>Tablets</div>
            <div className='view-all float-right'>View All</div>

                <div class="carousel-item active">
                    <div className='row'>
                    {tablets.map(pro => (
                        <SwiperSlide>
                        <div className='tablet float-left' key={pro.id}>
                            <div>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'><i class="far fa-heart"></i></span>
                            </div>
                            {/* <Link to={`/digitalcarddetails/${pro.id}`}> */}
                                <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                            {/* </Link> */}
                            <div class="card-body">
                                <span class="card-text name float-left col-lg-10">{pro.name}</span>
                                <span class="card-text price float-left col-lg-10">{pro.price}</span>
                                <div className='float-left col-lg-12'>
                                    <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                    <span className='discount float-left col-lg-4'>{pro.discount}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                    </div>  
                </div>
                <span className='swipe'>Swipe For More</span>
        </Swiper>
        </div>

        <div className='televisions'>        
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <div className='float-left televisions-heading'>Tablets</div>
            <div className='view-all float-right'>View All</div>
                <div class="carousel-item active">
                    <div className='row'>
                    {televisions.map(pro => (
                        <SwiperSlide>
                        <div className='television float-left' key={pro.id}>
                            <div>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'><i class="far fa-heart"></i></span>
                            </div>
                            {/* <Link to={`/digitalcarddetails/${pro.id}`}> */}
                                <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                            {/* </Link> */}
                            <div class="card-body">
                                <span class="card-text name float-left col-lg-10">{pro.name}</span>
                                <span class="card-text price float-left col-lg-10">{pro.price}</span>
                                <div className='float-left col-lg-12'>
                                    <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                    <span className='discount float-left col-lg-4'>{pro.discount}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                    </div>  
                </div>
                <span className='swipe'>Swipe For More</span>
        </Swiper>
        </div>
        

        
        </>
    )
}
export default Home


