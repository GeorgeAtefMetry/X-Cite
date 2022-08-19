import classes from './wishlist.module.css'
import { useEffect, useState,useSelector } from "react"
import db from '../firebase'
import { collection, doc, onSnapshot ,where, getDoc,query, documentId} from "firebase/firestore"            
import React from 'react';
import {addFav, deleteFav} from '../services/services'
import { Link, useNavigate  } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'
const Wishlist = () => {
    const[product, setProduct] = useState([])
    const[names, setNames] = useState([])
    const[images, setImages] = useState([])

    const {user} = UserAuth()

    useEffect(()=>{
        if(user){
        const id = localStorage.getItem('id')

        const ProductsCollection = collection(db, "Products");
        const UserDocument = doc(db, 'users/', `${user.uid}`)
            onSnapshot(UserDocument,(snapshot)=>{
                const WishList = snapshot.data().wishlist;
                const que = query(ProductsCollection, where(documentId() ,"in", WishList.map((item)=> item)));
        
                onSnapshot(que,(res)=>{
                    setProduct(res.docs.map((doc)=>({
                    ...doc.data(),
                    id: doc.id,
                })));
                })
            })
        
        setNames(product.map((pro)=> (pro.name)))
        setImages(product.map((pro)=> (pro.img)))
        // console.log(names)
    // })
    }
    }
,[]);

const favButton = (e,id) =>{
    e.preventDefault()
    deleteFav(id)
}

const [isActive, setIsActive] = useState(true);
const handleClick = event => {
    setIsActive(current => !current);
};

const navigate = useNavigate()
const shareBtn = () => {
    navigate('/share-wishlist',{state:{imgs:images,names:names}})
}
const GoToHomePage = () =>{
    navigate('/home')
}
return(
    <>
    <div className={classes.favorites}>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2' style={{height:'100%'}}>
                    <ul className={`${classes.Account}`}>
                        <li className={classes.myAccount}>My Account</li>
                        <li>Account Dashboard</li>
                        <li>Account Information</li>
                        <li>Address Book</li>
                        <li>My Orders</li>
                        <li className={isActive ? `${classes.active}` : ''} onClick={handleClick}>My Wishlist</li>
                        <li>Newsletter Subscriptions</li>
                        <li>Store Credit</li>
                        <li>Secret Deals</li>
                        <li>My Digital Cards</li>
                    </ul>
                </div>
                <div className={`col-lg-10 ${classes.element}`}>
                    <h3 style={{fontWeight:'bold'}}>My WishList</h3>
                    {product.map(pro => (
                        <div className={`d-flex ${classes.eachOne}`} key={pro.id}>
                            <div className='col-lg-2 col-md-3  col-sm-4'>
                                <Link to={`/digitalcarddetails/${pro.id}`}>
                                    <img class="card-img-top" src={pro.images[0]} key={pro.id}  alt="Card image cap"/>
                                </Link>
                            </div>
                            <div className={`col-lg-5 col-md-5 col-sm-8 ${classes.nameAndInput}`}>
                                <p class={`card-text ${classes.name}  col-lg-12`}>{pro.name}</p>
                                <input className={classes.inputComment} style={{padding:'6px'}} type="text" class="form-control" placeholder="Please, enter your comments..."></input>
                            </div>
                            <div className={`col-lg-4 col-md-3   col-sm-8 ${classes.data}`}>
                                <span className={classes.price}>{pro.discount ? parseInt(pro.price-((pro.price)*(pro.discount/100))) : pro.price} KD</span>
                                <div>
                                    {pro.discount?
                                        <span className={classes.oldPrice}>{pro.price} KD</span>
                                        :<p></p>
                                    }
                                    {pro.discount?
                                        <span className={classes.discount}>save {pro.discount}%</span>
                                        :<p></p>
                                    }
                                    <span className={`card-text price col-12 ${classes.paymentMonthly}`}>Starting <span style={{fontWeight:'bold'}}>{pro.price ? parseInt(((pro.price*0.10)+pro.price)/24) : pro.price}.000 KD</span>  Monthly</span>
                                </div>
                                <input type='text'  style={{width:'15%',textAlign:'center',justifyContent:'center',marginRight:'5px',padding:'2px'}}></input>
                                <button className={`btn btn-warning ${classes.addToCartEachProduct}`}>Add To Cart</button>
                                <p style={{color:'#27ae60',marginTop:'10px'}}>In Stock</p>
                            </div>
                            <div className='col-lg-2 col-sm-4'>
                            <span className={classes.removeItem} onClick={(e)=>{favButton(e,pro.id)}}>Remove Item</span>
                            </div>
                        </div>
                    ))} 
                    <div className='float-left'>
                        <button onClick={()=> GoToHomePage()} className={`btn`} style={{marginTop:'20px'}}> Back </button>
                    </div>
                    <div className={product.length>=1 ? `${classes.block} float-right` : `${classes.none}`}>
                        <button onClick={() => shareBtn()} className={classes.shareBtn}>Share WishList</button>
                        <button className={`btn btn-warning  ${classes.addToCart}`} style={{marginRight:'10px',marginLeft:'10px'}}>Add To Cart</button>
                        <button className={classes.updateWishlistBtn}>Update WishList</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Wishlist