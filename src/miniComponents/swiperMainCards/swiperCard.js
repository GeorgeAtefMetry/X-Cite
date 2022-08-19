import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Favorites from '../../services/services';
import {addFav,deleteFav} from '../../services/services';
import { useState, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import db from '../../firebase'
import { collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, Doc, doc, deleteField } from 'firebase/firestore'
import { useSelector, useDispatch } from 'react-redux';
import {setProducts, deleteProducts} from'../../Components/ReduxWishlist/actions/productsActions';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { UserAuth } from '../../context/AuthContext';
import { useTranslation } from "react-i18next";

function getWindowDimensions() {
    const width = window.innerWidth
    return width;
}

const SwiperCard = ({list, path}) => {
    //////////////////get id user from userauth and set in localstorage to use it in review
    const[favorites, setFavorites] = useState([])
    const [isActive, setIsActive] = useState(false);
    const [className, setClassName] = useState('fa fa-heart color-red');
    const Products = useSelector((state) => state.products)
    const dispatch = useDispatch();
    const {user} = UserAuth();
    const { t , i18n} = useTranslation();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    let dataWishlistID
    useEffect(()=>{
        if(user){
            if(user.uid)
            {
                const ID = user.uid
                localStorage.setItem("id", ID)
                const userDoc = doc(db, `users/`, `${ID}`)
                
                        getDoc(userDoc).then((res)=>{
                            let data = res.data();
                            // console.log(res);
                            let dataWishlist = data.wishlist
                            setFavorites(dataWishlist)
                            dataWishlistID = dataWishlist.map((n)=>(n))
                        })
            }
        }
    },[user])

    const favButton = (e,id) =>{    
        if(user){
            const ID = user.uid
            const userDoc = doc(db, `users/`, `${ID}`)
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
            slidesPerView={ windowDimensions>=750?5:3 }
            className="p-0 m-0"
            style={{height:'90%', backgroundColor:'white'}}
            onSlideChange={() =>{
            // console.log('slide change')
            }}
            onSwiper={(swiper) =>{
                // console.log(swiper)
            }}
            >
                {/* {console.log(windowDimensions, windowDimensions>=750)} */}
                <div className="carousel-item active h-100">
                    <div className='row'>
                    {list.map(item => (
                        <SwiperSlide className="h-100" key={item.id}>
                        <div className='float-left h-100 bordrd border-end border-1'  style={{height:"100%"}}>
                            <div className="px-3 d-flex justify-content-between pt-1">
                                <span className='best-seller px-2 pt-2 pb-0 rounded'>{t('Best Seller')}</span>
                                <span className='icon' style={{padding:'5px'}}>
                                    <i 
                                    className={favorites.includes(item.id) ? "fa fa-heart color-red" : 'far fa-heart' }  
                                    onClick={(e)=>{favButton(e,item.id)}}
                                    >
                                    </i>
                                </span>
                            </div>
                            <Link to={`/${path}/${item.id}`}>
                                <img className="card-img-top" src={item.images[0]} style={{height:"60%"}} key={item.id}  alt="Card image  cap"/>
                            </Link>
                            <div className="card-body py-1 px-0 w-100 d-flex flex-column" style={{height:"30%"}}>
                                <div className="px-2 d-flex justify-content-start name col-12">
                                    <span style={{width:'fit-content'}}>{i18n.language=='en'?item.name:item.nameAR}</span>
                                </div>
                                <div className="px-2 d-flex justify-content-start price col-12">
                                    <span style={{width:'fit-content'}}>{item.discount?parseFloat(item.price-((item.price*item.discount)/100)).toFixed(2):item.price}$</span>
                                </div>

                                <div className='col-lg-12 px-3 py-0 d-flex justify-content-between'>
                                    {item.discount?
                                        <span className="card-text oldprice">{item.price}$</span>
                                        :<p></p>
                                    }
                                    {item.discount?
                                        <span className='discount'>{t('save')} {item.discount}%</span>
                                        :<p></p>
                                    }
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                            ))}
                            </div>  
                        </div>
                        <span className='swipe'>{t('Swipe For More')}</span>
            </Swiper>
        </>
    );
}

export default SwiperCard;