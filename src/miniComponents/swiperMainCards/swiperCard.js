import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {addFav,deleteFav} from '../../services/services';
import { useState , useEffect} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import db from '../../firebase'
import { collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, Doc, doc, deleteField } from 'firebase/firestore'
import { UserAuth } from '../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux';
import {setProducts, deleteProducts} from'../../Components/ReduxWishlist/actions/productsActions'

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
const SwiperCard = ({list, path}) => {
    const {user} = UserAuth()
    const ID = user.uid
    localStorage.setItem('id',ID)

    const[favorites, setFavorites] = useState([])
    const [isActive, setIsActive] = useState(false);
    const [className, setClassName] = useState('fa fa-heart color-red');

    const Products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    }); 
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };


    const userDoc = doc(db, `users/`, `${ID}`)
    
        let dataWishlistID
            getDoc(userDoc).then((res)=>{
                let data = res.data();
                let dataWishlist = data.wishlist
                setFavorites(dataWishlist)
                dataWishlistID = dataWishlist.map((n)=>(n))

            })

    let favButton = (e,id) =>{        
        setIsActive(current => !current);

        const newFav = id
        
        if(e.target.className === 'far fa-heart' ){
            e.target.className = "fa fa-heart color-red"
            addFav(newFav)

            alert('Add To Wishlist')
            getDoc(userDoc).then((res)=>{
                let data = res.data();
                let dataWishlist = data.wishlist
                dataWishlistID = dataWishlist.map((n)=>{
                    if(n){
                        e.target.className = "fa fa-heart color-red"
                        return
                    }else{
                        e.target.className = "far fa-heart"
                    }
                })
            })
            // dispatch(setProducts(newFav))
        }else{
            e.target.className = 'far fa-heart'
            let filtering = favorites.filter((item)=>{
                if(id === id){
                deleteFav(id)
                }
                alert('removed')
            })
            // dispatch(deleteProducts(filtering))
        }
    }
    return (
        <>
{/*             
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={ `Has Been Added To Your Wishlist`}
                key={vertical + horizontal}
            /> */}
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
                        <div className='float-left h-100 bordrd border-end border-1'  style={{height:"100%"}}>
                            <div className="px{-3">
                                <span className='best-seller float-left'>Best Seller</span>
                                <span className='icon float-right' style={{padding:'5px'}}>
                                
                                {/* <Button
                                    onClick={handleClick({
                                    vertical: 'top',
                                    horizontal: 'center',
                                    })}
                                > */}
                                    <i 
                                    className={favorites.includes(item.id) ? "fa fa-heart color-red" : 'far fa-heart' }  
                                    onClick={(e)=>{favButton(e,item.id)}}
                                    >
                                    </i> 
                                    
                                {/* </Button> */}

                                </span>
                            </div>
                            <Link to={`/${path}/${item.id}`}>
                                <img className="card-img-top" src={item.images[0]} style={{height:"60%"}} key={item.id}  alt="Card image cap"/>
                            </Link>
                            <div className="card-body py-1 px-0" style={{height:"30%"}}>
                                <span className="card-text px-2 name float-left col-lg-10">{item.name}</span>
                                <span className="card-text px-2 price float-left col-lg-10">{item.discount? parseInt(item.price-((item.price*item.discount)/100 )): item.price } KD</span>
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
