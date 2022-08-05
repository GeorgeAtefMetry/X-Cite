import React from "react";
import "../GooglePlayCards/GooglePlayCards.css";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";

const GooglePlayCards = () => {
  const AddToCart = (itune) => {
    console.log(itune);
  };
  
  const [googlePlayCard, setGooglePlayCard] = useState([]);
  useEffect(() =>{
    // const itunesCollection = collection(db, "Products");
    // const qiTunes = query(itunesCollection, where('categoryName','==','digital cards'), where('type','==','GooglePlay'));
    //   onSnapshot(qiTunes, (snapshot) => {
    //     console.log(snapshot.docs);
    //     setITunesCard(
    //       snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //     );
      // })
    }
      ,[]);

  return (
    <>
      <div className="ha ">
        <h6>Google Play App Stores Offers in Kuwait</h6>
        <p>
          Buy Your Google Play App Stores in Kuwait Today with the Best Price!
          Start Shopping Online now from Xcite Electronics!
        </p>
      </div>
      <select className="sele1">
        <option selected="selected">Recommended</option>
        <option>Name</option>
        <option>Price</option>
      </select>
      <select className="sele2">
        <option selected="selected">Desc</option>
        <option>Asce</option>
      </select>
      <div class="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {googlePlayCard.map((googleplay) => (
              <div className="car  col-md-3 my-2 py-2" key={googleplay.id}>
                <span className="best-seller float-left box-sizing: border-box;">
                  Best Seller
                </span>
                <i className="far fa-heart float-right box-sizing: border-box;"></i>
                <img
                  className="card-img-top"
                  src={googleplay.img}
                  key={googleplay.id}
                  alt="Card image cap"
                />
                <h5 className="name">{googleplay.name}</h5>
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <h3 className="price float-left col-lg-10">
                  {googleplay.price}
                </h3>
                <button
                  onClick={() => AddToCart(googleplay.id)}
                  type="button"
                  class="add-to-cart btn btn-warning "
                >
                  <i class="fa-solid fa-cart-shopping float-left"></i> Add To
                  Cart
                </button>
              </div>
            ))}
             <p className="pa">You have reached the end of the page! Try our superfast search!</p>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default GooglePlayCards;
