import React from "react";
import "../ITuensCards/ITunesCard.css";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import db from "../../firebase";
import { useLocation } from 'react-router-dom';

const ITunesCard = () => {
  const location = useLocation();
  const AddToCart = (itune) => {
    console.log(itune);
  };
  const [itunesCard, setITunesCard] = useState([]);
  useEffect(() =>{
    console.log("loc", location)
    const itunesCollection = collection(db, "Products");
    const qiTunes = query(itunesCollection, where('categoryName','==','digital cards'), where('type','==',`${location.state}`))
      onSnapshot(qiTunes, (snapshot) => {
        console.log(snapshot.docs);
        setITunesCard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      })},
    []
   
    );

  return (
    <>
    <div className="ha bg-white mt-2 pl-5" >
    <h6 >Apple iTunes Card Offers in Kuwait by Xcite Alghanim Electronics</h6>
    <p >
      Buy your Apple iTunes Cards in Kuwait today at the best price! Buy iTunes Cards online ath the best price in Kuwait and receive code digitallt via E-mail. Shop Online Now!</p>
      </div>
      <select className="sele1">
        <option selected='selected'>Recommended</option>
        <option>Name</option>
        <option>Price</option>
      </select>
      <select className="sele2">
        <option selected='selected'>Desc</option>
        <option>Asce</option>
      </select>
      <div className="">
        <div className="">
          <div className="row">
            {itunesCard.map((itune) => (
              <div className="car  col-md-3 my-2 py-2" key={itune.id}>
                <span className="best-seller float-left box-sizing: border-box;">
                  Best Seller
                </span>
                <i className="far fa-heart float-right box-sizing: border-box;"></i>
                <img
                  className="card-img-top"
                  src={itune.images[0]}
                  key={itune.id}
                  alt="Card image cap"
                />
                <h5 className="name">{itune.name}</h5>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3 className="price float-left col-lg-10">{itune.discount?(itune.price * itune.discount)/100: itune.price} KD</h3>
                {
                  itune.discount?
                <div className="float-left col-lg-12">
                  <span class="oldprice float-left col-lg-4">
                    {itune.price} KD
                  </span>
                  <span className="discount float-left col-lg-4">
                    save {itune.discount}%
                  </span>
                </div>
                : <p></p>
                }
                <button
                  onClick={() => AddToCart(itune.id)}
                  type="button"
                  className="add-to-cart btn btn-warning"
                >
                  <i className="fa-solid fa-cart-shopping float-left"></i> Add To
                  Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ITunesCard;
