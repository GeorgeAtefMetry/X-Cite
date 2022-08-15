import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Favorites from '../../services/services';
import { useState } from "react";
import { UserAuth } from '../../context/AuthContext'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperCard = ({list, path}) => {
    //////////////////get id user from userauth and set in localstorage to use it in review
const {user} = UserAuth()

const ID = user.uid

localStorage.setItem('id',ID)
 const id = localStorage.getItem('id')
// console.log(id);
/////////////////////

    const[favorites, setFavorites] = useState([])
    const [isActive, setIsActive] = useState(false);

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
    return (
        <>
            <Swiper
            spaceBetween={0}
            slidesPerView={5}
            className="p-0 m-0"
            style={{height:'90%', backgroundColor:'white'}}
            onSlideChange={() =>{
            // console.log('slide change')
            }}
            onSwiper={(swiper) =>{
                // console.log(swiper)
            }}
            >
                <div className="carousel-item active h-100">
                    <div className='row'>
                    {list.map(item => (
                        <SwiperSlide className="h-100" key={item.id}>
                        <div className='float-left h-100 bordrd border-end border-1'>
                            <div className="px-3" style={{height:"7%"}}>
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right'>
                                    <i className="far fa-heart"
                                        onClick={(e)=>{favButton(e,item.id,item.name,item.images[0],((item.price*item.discount)/100),item.price,item.discount)}}>
                                    </i>
                                </span>
                            </div>
                            <Link to={`/${path}/${item.id}`}>
                                <img className="card-img-top" src={item.images[0]} style={{height:"60%"}} key={item.id}  alt="Card image  cap"/>
                            </Link>
                            <div className="card-body py-1 px-0" style={{height:"33%"}}>
                                <span className="card-text px-2 name float-left col-lg-10">{item.name}</span>
                                <span className="card-text px-2 price float-left col-lg-10">{item.discount?parseFloat(item.price-((item.price*item.discount)/100)).toFixed(2):item.price} KD</span>
                                <div className='float-left col-lg-12 px-2 py-0'>
                                    {item.discount?
                                        <span className="card-text oldprice float-left col-lg-4">{item.price} KD</span>
                                        :<p></p>
                                    }
                                    {item.discount?
                                        <span className='discount float-left col-lg-4'>save {item.discount}%</span>
                                        :<p></p>
                                    }
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                         ))}
                         </div>  
                     </div>
                     <span className='swipe'>Swipe For More</span>
             </Swiper>
        </>
    );
}

export default SwiperCard;
