import './wishlist.css'
import { useEffect, useState,useSelector } from "react"
import db from '../firebase'
import { collection, doc, onSnapshot } from "firebase/firestore"            
import React from 'react';
import { Link } from 'react-router-dom'
import Favorites from '../services/services'
const Wishlist = () => {
    const[product, setProduct] = useState([])
    useEffect(()=>
    onSnapshot(collection(db,'favorites'),(snapshot)=>{
        setProduct(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
    })
,[]);
const favButton = (e,id) =>{
    Favorites.deleteFav(id)
    if(e.target.className === 'fa-regular fa-heart' ){
        e.target.className = 'fa-solid fa-heart'
    }else{
        e.target.className = 'fa-regular fa-heart'
    }
}
return(
    <>
    <div className='favorites'>
        <div className='container-fluid'>
            <div className='row'>
                {product.map(pro => (
                    <div className='col-md-3'>
                        <div className='item float-left' key={pro.id}>
                        <div className='top'>
                            <span className='icon float-right'>
                                <i class="fa-solid fa-heart" onClick={(e)=>{favButton(e,pro.id)}}></i>
                            </span>
                        </div>
                            <Link to={`/digitalcarddetails/${pro.id}`}>
                                <img class="card-img-top" src={pro.img} key={pro.id}  alt="Card image cap"/>
                            </Link>
                            <div class="card-body">
                                <span class="card-text name float-left col-lg-12">{pro.name}</span>
                                <span class="card-text price float-left col-lg-10">{pro.price}</span>
                                <div className='float-left col-lg-12'>
                                    <span class="card-text oldprice float-left col-lg-4">{pro.oldPrice}</span>
                                    <span className='discount float-left col-lg-4'>{pro.discount}</span>
                                </div>
                                <button className='btn btn-warning' style={{width:'100%',marginTop:'10px',fontSize:'17px'}}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
)
}
export default Wishlist