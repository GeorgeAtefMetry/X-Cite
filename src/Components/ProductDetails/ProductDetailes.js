import React from "react";
import { useEffect, useState } from "react";
import db from '../../firebase';
import { useParams } from "react-router-dom";
import { doc, onSnapshot, collectionGroup, updateDoc, getDoc } from "firebase/firestore";
import classes from './ProductDetailes.module.css';
import { useForm } from "react-hook-form";
import Tabs  from './detailesTabs';
// cart
import { useCookies, getCookies } from 'react-cookie';
import { AddToCart, AddToUserCart } from "../../services/CartService";
import { useDispatch } from "react-redux";
import cartAction from '../../Redux/action';
import { UserAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
    const { t, i18n } = useTranslation();
    const params = useParams()
    const [count, setCount] = useState(1)
    const [Product, setProduct] = useState({images:[]})
    const [favorites, setfavorites] = useState([])
    const [cookies, setCookies] = useCookies("Cart");
    const dispatch = useDispatch();    
    const [attributes, setAttributes] = useState([]);
    const [attributesAR, setAttributesAR] = useState([]);
    const { user } = UserAuth();
    const [userCart, setUserCart]= useState([]);
    const [cokyCart, setCokyCart]= useState([]);
    const [cokyChange, setCokyChange]= useState();

    useEffect(()=>{
        onSnapshot(doc(db, 'Products/', `${params.id}`),(snapshot)=>{
            // console.log(snapshot)
            setProduct(
                {id: snapshot.id,
                ...snapshot.data()
            })
            const collectionatt = collectionGroup(db, `${snapshot.data().categoryName}`);
            onSnapshot(collectionatt,(snapshot)=>{
            setAttributes(snapshot.docs[0].data().attributes)
            setAttributesAR(snapshot.docs[0].data().attributesAR)
            })
        })
    },[]);

    useEffect(()=>{
        // console.log(cokyChange, cookies.Cart);
        if(user)
        {
            if(user.uid)
            {
                const usrDoc = doc(db, 'users/', `${user.uid}`)
                onSnapshot(usrDoc,(snapshot)=>{
                    const cart = snapshot.data().cart;
                    setUserCart(cart.map((item)=> item.pId))
                })
            }
        }
        else if(cookies.Cart)
        {
            setCokyCart(cookies.Cart.map((item)=> item.id))
        }
    },[user, cokyChange])
  
    const incrementCount = (limit) => {
        if(count < limit)
        {
            setCount(count+1)
        }
        else
        {
            return
        }
    }
    const decrementCount = () => {
        if(count >= 2){
            setCount(count-1)
        }
        else{
            return
        }
    }

    return (
        <>
        <div className={classes.bigContainer+' w-100 h-auto px-0 pb-0 pt-0 m-0'}>
           <p className={"px-3 py-2 m-0 "+classes.proPath}> {t('X-Cite')} {t('>')} {i18n.language=="en"?Product.categoryName: Product.categoryNameAR} {t('>')} {i18n.language=="en"?Product.name:Product.nameAR} </p>
        <hr className="mt-0"/>
        {/* ====== Product General Detailes ================================================= */}
            <div className="row p-0 m-0">
                <div className={`col-lg-4 col-sm-7 order-1 px-sm-4 px-2 py-2`}>
                    <div className={classes.image}>
                        <img src={Product.images[0]} height="400px"/>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 order-lg-2 order-sm-3 order-2 px-sm-4 px-3 py-2">
                    <div className={classes.centerDetails}>
                        <h5>{i18n.language=="en"?Product.name:Product.nameAR}</h5>
                        <div>
                            <p style={{fontSize:'0.8rem', color:'gray'}}>
                                <b>{t('Brand')}: </b><span>{i18n.language=="en"?Product.brandName:Product.brandNameAR} </span>
                                <b className={` ${i18n.language=="en"?'ms-3':"me-3"}`} >{t('sku')}: </b><span>{Product.sku} </span>
                            </p>
                            <div className={classes.rating}>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className={classes.inStock}>
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                  {
                                    Product.quantity>5?
                                    t('In Stock')
                                    :(
                                        Product.quantity<=0?
                                        t("Sorry!,This Product is Not Available Now!")
                                        :`${t("Hurry up, It's available only")} ${Product.quantity} ${t('items')}.`
                                    )
                                  }  
                            </div>
                        </div>
                        <hr></hr>
                        <div className={classes.pricing}>
                            {
                                Product.discount?
                                    <>
                                    <span className={`${classes.price} ${i18n.language=="en"?" me-1":" ms-1"}`}>{parseFloat(Product.price -((Product.price*Product.discount)/100)).toFixed(2)}$</span><br/>
                                    <span className={`${classes.oldPrice} ${i18n.language=="en"?" me-3":" ms-3"}`}>{Product.price}$</span>
                                    <span className={`${classes.discount} ${i18n.language=="en"?" me-1":" ms-1"}`}>{t('save')} {Product.discount}%</span>
                                    </>
                                    :<span className={classes.price}>{Product.price} $</span>
                            }
                        </div>
                        <hr className="mt-1"/>
                        <div className={classes.overview}>
                            <h6>{t('Quick Overview')}</h6>
                            <p className="pe-5 w-75">
                                {i18n.language=="en"?Product.description:Product.descriptionAR}
                            </p>
                            <div className={classes.howDoIGet+" ps-2 py-1"}>
                                {t('How do I get it?')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-5 order-lg-3 order-sm-2 order-3 p-3">
                    <div className={classes.rightAddToCart+ " w-100"}>
                        <div className={classes.btns+" mt-2 mb-3"}>
                            <button onClick={decrementCount} className={classes.decrement}>-</button>
                            <span className={classes.count}>{count}</span>
                            <button onClick={()=>{incrementCount(Product.quantity)}} className={classes.increment}>+</button>
                        </div>
                        <div className="w-100 h-auto px-3 mb-3">
                            <button className={classes.addToCardBtn+" py-1"}
                            disabled={(user?userCart.includes(Product.id):cokyCart.includes(Product.id)) || Product.quantity==0}
                                    onClick={()=>{
                                        if(user){
                                            AddToUserCart(Product.id, count, user, db, doc, getDoc, updateDoc)
                                        }
                                        else{
                                            AddToCart( Product.id, count, cookies, setCookies, dispatch, cartAction, setCokyChange);
                                            setCokyChange(true);
                                    }}}
                            >
                                <i className="fa fa-shopping-cart fa-fw me-2"></i>
                                {
                                    user?
                                    (
                                        userCart.includes(Product.id)?
                                        t("Added to Cart")
                                        :t("Add to Cart")
                                    
                                    )
                                    :(
                                        cokyCart.includes(Product.id)?
                                        t("Added to Cart")
                                        :t("Add to Cart")
                                    )
                                } 
                            </button>
                        </div>
                        <div className="w-100 h-auto px-3 mb-3">
                            <button className={classes.clickBuyBtn+" py-1"}><i className="fa fa-tachometer fa-fw me-2"></i>{t('1-Click Buy')}</button>
                        </div>
                        <div className={classes.soldFulfilled+" w-100 mx-0 mb-3 px-3"}>
                            <p className="my-0">{t('Sold By')}: <b className="text-primary">{Product.seller}</b></p>
                            <p className="my-0">{t('Fulfilled By')}: <b className="text-dark">{t('X-cite')}</b></p>
                        </div>
                        <div className={`col-12 px-3  ${classes.wishlistCompare}`}>
                            <div style={{width:'47%'}}>
                                <p className="px-2 py-2 m-0"><i className="far fa-heart me-1"></i>{t('Add to Wishlist')}</p>
                                <span className="my-0">{t('See Wishlist')}</span>
                            </div>
                            <div style={{width:'47%'}}>
                                <p className="px-2 py-2 m-0"><i className="far fa-file me-1"></i>{t('Add to Compare')}</p>
                                <span className="my-0">{t('See Compare List')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* ====== Product More Special Detailes ============================================= */}
                <Tabs Product={Product} attributes={attributes} attributesAR={attributesAR} />
        </div>
        </>
    )
}

export default ProductDetails;