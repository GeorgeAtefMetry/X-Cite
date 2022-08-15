import classes from './wishlist.module.css'
import { useEffect, useState,useSelector } from "react"
import db from '../firebase'
import { collection, doc, onSnapshot } from "firebase/firestore"            
import React from 'react';
import Favorites from '../services/services'
import { Link, Navigate, useNavigate,useLocation  } from "react-router-dom";
import emailjs from 'emailjs-com';

const ShareWishlist = () => {
    const [names, setNames] = useState()
    const location = useLocation();
    let name = location.state.names
    let img = location.state.imgs
    console.log(img)
    // name.split(',')
    const navigate = useNavigate()
    const GoToWishlistPage = () =>{
        navigate('/wishlist')
    }
    const sendEmail = (e) => {
        e.preventDefault()
    emailjs.sendForm('service_ckvw1os', 'template_4f6f6ro', e.target, 'r19Jls06NGJYoD8tP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            
        });
        e.target.reset()
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
                            <li >My Wishlist</li>
                            <li>Newsletter Subscriptions</li>
                            <li>Store Credit</li>
                            <li>Secret Deals</li>
                            <li>My Digital Cards</li>
                        </ul>
                    </div>
                    <div className={`col-lg-10 ${classes.element}`}>
                        <h3 style={{fontWeight:'bold'}}>Share Your WishList</h3>
                        <h6 style={{fontWeight:'500',marginTop:'20px'}}>Sharing Information</h6>
                        <hr></hr>

                        <form onSubmit={sendEmail}>
                            <p>Email Address<span style={{color:'red'}}>*</span></p>
                            {/* <h2 name='name_item' value={name}>{name}</h2>
                            <h2 name='image' value={img}>{img}</h2>{name} */}
                            <input type='email' name='email' style={{width:'100%',textAlign:'center',justifyContent:'center',marginRight:'5px',padding:'5px',border:'1px solid #ccc',borderRadius:'5px'}}></input>
                            {/* <input name='email' value={img}/> */}
                            <p style={{marginTop:'20px'}}>Message</p>
                            <input type='text' name='message' value={name} style={{display:'none',width:'100%',textAlign:'center',justifyContent:'center',marginRight:'5px',padding:'5px',border:'1px solid #ccc',borderRadius:'5px'}}></input>
                            <input type='text' name='message' value={img} style={{display:'none',width:'100%',textAlign:'center',justifyContent:'center',marginRight:'5px',padding:'5px',border:'1px solid #ccc',borderRadius:'5px'}}></input>
                            <input type='text' name='message' style={{width:'100%',textAlign:'center',justifyContent:'center',marginRight:'5px',padding:'5px',border:'1px solid #ccc',borderRadius:'5px'}}></input>
                            
                            <div className='float-right'>
                                <button type='submit' className={`btn btn-warning  ${classes.addToCart}`} style={{marginRight:'10px',marginLeft:'10px'}}>Share WishList</button>
                            </div>
                        </form>



                        <div className='float-left'>
                            <button onClick={()=> GoToWishlistPage()} className={`btn`} style={{marginTop:'20px'}}> Back </button>
                        </div>
                        {/* <div className='float-right'>
                            <button className={`btn btn-warning  ${classes.addToCart}`} style={{marginRight:'10px',marginLeft:'10px'}}>Share WishList</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ShareWishlist