import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import db from "../../../../../firebase";
import "../../../../../fontawesome-free-6.1.1-web/css/all.css";
import "../../../../../fontawesome-free-6.1.1-web/css/all.min.css";
import "./ShowMobile.css";
const ShowMobile = () => {
  const [data, setData] = useState([]);
  const iphoneRef = collection(db, "products/apple/iphone");
  // get data iphone from firestore
  useEffect(() => {
    const getIphones = async () => {
      const mobiles = await getDocs(iphoneRef);
      setData(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getIphones();
  }, []);

   console.log("hello");
  // handel click on add to cart btn
  
  const iphoneCard = data?.map((el, index) => (
      <div className=" bg-white iphone col-md-3 my-2 py-2" key={el?.id}>
        <Link to={`/iphone/${el?.id}`}>
          <img className="img-fliud " src={el?.mobileImg} alt={el?.mobileName} />
        </Link>
        <h5 className="pb-4">
          Apple {el.mobileName} {el.Storage} {el.colour}
        </h5>
        <div className="icons pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h4>{el.price} KD</h4>
        <p>Sold By {el.sellerName}</p>
        <p className="X-ctie ">
          <i class="fa-solid fa-check"></i> Fulfilled By X-cite
        </p>
        <button
         
          type="button"
          class="add-to-cart btn btn-warning"
        >
          <i class="fa-solid fa-cart-shopping"></i> Add To Cart
        </button>
        <div className="icon-heart">
          
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    ));
       console.log(iphoneCard);
  return (
    <div className="row">{iphoneCard}</div>
  );
};

export default ShowMobile;
