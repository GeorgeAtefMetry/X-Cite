import React from "react";
import "../ITuensCards/ITunesCard.css";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const ITunesCard = () => {
  const AddToCart = (itune) => {
    console.log(itune);
  };
  const [itunesCard, setITunesCard] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "GiftCards/AppleITunesCards/1"), (snapshot) => {
        console.log(snapshot);
        setITunesCard(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
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
      <div class="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {itunesCard.map((itune) => (
              <div className="car  col-md-3 my-2 py-2" key={itune.id}>
                <span className="best-seller float-left box-sizing: border-box;">
                  Best Seller
                </span>
                <i className="far fa-heart float-right box-sizing: border-box;"></i>
                <img
                  className="card-img-top"
                  src={itune.img}
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
                <h3 className="price float-left col-lg-10">{itune.price}</h3>
                <div className="float-left col-lg-12">
                  <span class="oldprice float-left col-lg-4">
                    {itune.oldPrice}
                  </span>
                  <span className="discount float-left col-lg-4">
                    {itune.discount}
                  </span>
                </div>
                <button
                  onClick={() => AddToCart(itune.id)}
                  type="button"
                  class="add-to-cart btn btn-warning "
                >
                  <i class="fa-solid fa-cart-shopping float-left"></i> Add To
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
