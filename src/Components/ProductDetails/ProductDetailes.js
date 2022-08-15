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

const ProductDetails = () => {
    const params = useParams()
    const [count, setCount] = useState(1)
    const [Product, setProduct] = useState({images:[]})
    const [favorites, setfavorites] = useState([])
    const [cookies, setCookies] = useCookies("Cart");
    const dispatch = useDispatch();    
    const [attributes, setAttributes] = useState([]);
    const { user } = UserAuth();
    const [userCart, setUserCart]= useState([]);
    const [cokyCart, setCokyCart]= useState([]);
    const [cokyChange, setCokyChange]= useState();

    useEffect(()=>{
        onSnapshot(doc(db, 'Products/', `${params.id}`),(snapshot)=>{
            setProduct(
                {id: snapshot.id,
                ...snapshot.data()
            })
            const collectionatt = collectionGroup(db, `${snapshot.data().categoryName}`);
            onSnapshot(collectionatt,(snapshot)=>{
            setAttributes(snapshot.docs[0].data().attributes)
            })
        })
    },[]);

    useEffect(()=>{
        console.log(cokyChange, cookies.Cart);
        if(user)
        {
            const usrDoc = doc(db, 'users/', `${user.uid}`)
            onSnapshot(usrDoc,(snapshot)=>{
                const cart = snapshot.data().cart;
                setUserCart(cart.map((item)=> item.pId))
            })
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
           <p className={"px-3 py-2 m-0 "+classes.proPath}> X-Cite {'>'} {Product.categoryName} {'>'} {Product.name} </p>
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
                        <h5>{Product.name}</h5>
                        <div>
                            <p style={{fontSize:'0.8rem', color:'gray'}}>
                                <b>Brand: </b><span>{Product.brandName}</span>
                                <b className="ms-3">sku: </b><span>{Product.sku}</span>
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
                                    'In Stock'
                                    :(
                                        Product.quantity==0?
                                        "Sorry!,This Product is Not Available Now!"
                                        :`Hurry up, It's available only ${Product.quantity} items.`
                                    )
                                  }  
                            </div>
                        </div>
                        <hr></hr>
                        <div className={classes.pricing}>
                            {
                                Product.discount?
                                    <>
                                    <span className={classes.price+" me-1"}>{parseFloat(Product.price -((Product.price*Product.discount)/100)).toFixed(2)} KD</span>
                                    <span className={classes.oldPrice+" me-1"}>{Product.price} KD</span>
                                    <span className={classes.discount}>save {Product.discount}%</span>
                                    </>
                                    :<span className={classes.price}>{Product.price} KD</span>
                            }
                        </div>
                        <hr className="mt-1"/>
                        <div className={classes.overview}>
                            <h6>Quick Overview</h6>
                            <p className="pe-5 w-75">
                                {Product.description}
                            </p>
                            <div className={classes.howDoIGet+" ps-2 py-1"}>
                                How do I get it?
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
                          disabled={user?userCart.includes(Product.id):cokyCart.includes(Product.id)}
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
                                    "Added to Cart"
                                    : "Add to Cart"
                                
                                )
                                :(
                                    cokyCart.includes(Product.id)?
                                    "Added to Cart"
                                    :"Add to Card"
                                 )
                            } 
                           </button>
                      </div>
                      <div className="w-100 h-auto px-3 mb-3">
                          <button className={classes.clickBuyBtn+" py-1"}><i className="fa fa-tachometer fa-fw me-2"></i>1-Click Buy</button>
                      </div>
                        <div className={classes.soldFulfilled+" w-100 mx-0 mb-3 px-3"}>
                            <p className="my-0">Sold By: <b className="text-primary">{Product.seller}</b></p>
                            <p className="my-0">Fulfilled By: <b className="text-dark">X-cite</b></p>
                        </div>
                        <div className={`col-12 px-3  ${classes.wishlistCompare}`}>
                            <div style={{width:'47%'}}>
                                <p className="px-2 py-2 m-0"><i className="far fa-heart me-1"></i>Add to Wishlist</p>
                                <span className="my-0">See Wishlist</span>
                            </div>
                            <div style={{width:'47%'}}>
                                <p className="px-2 py-2 m-0"><i className="far fa-file me-1"></i>Add to Compare</p>
                                <span className="my-0">See Compare List</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* ====== Product More Special Detailes ============================================= */}
                <Tabs Product={Product} attributes={attributes} />
        </div>
        </>
    )
}

export default ProductDetails;