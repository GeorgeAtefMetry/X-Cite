import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../../../../../context/AuthContext";
// import { UserAuth } from "../../../../../context/AuthContext";
import db from "../../../../../firebase";
import "../../../../../fontawesome-free-6.1.1-web/css/all.css";
import "../../../../../fontawesome-free-6.1.1-web/css/all.min.css";
import Spinner from "../../../../Spinner/Spinner";
import "./ShowMobile.css";
import { motion, AnimatePresence } from "framer-motion";

const ShowMobile = ({priceRinge}) => {
  const { inpfil } = UserAuth();
  const { pathname } = useLocation();
  console.log(priceRinge);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const iphoneRef = collection(db, `products/apple${pathname}`);
  // get data iphone from firestore
  useEffect(() => {
    const getIphones = async () => {
      const mobiles = await getDocs(iphoneRef);
      setData(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getIphones();
  }, []);
 
  const iphoneCard = data.filter((el)=>{
         if (priceRinge === 1000) {
           return el
         } else {
          return el.price <= parseInt(priceRinge)
         }
  })
    ?.filter(
      ({
        Storage,
        mobileName,
        os,
        mobileRam,
        mobileColor,
        screenSize,
        Camera,
      }) => {
        if (inpfil.length >= 1 && mobileName) {
          return (
            inpfil.includes(Storage) ||
            inpfil.includes(Camera) ||
            inpfil.includes(screenSize) ||
            inpfil.includes(mobileColor) ||
            inpfil.includes(mobileName) ||
            inpfil.includes(os) ||
            inpfil.includes(mobileRam)
          );
        } else {
          return mobileName && os && mobileRam && mobileColor;
        }
      }
    )
    .map((el) => (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
        layout
        className=" bg-white iphone col-md-6 col-lg-4 col-xl-3 "
        key={el?.id}
      >
        <Link to={`/iphone/${el?.id}`}>
          <img
            className="img-fliud "
            src={el?.mobileImg}
            alt={el?.mobileName}
          />
        </Link>
        <h5 className="pb-4">
          Apple {el.mobileName} {el.Storage} {el.mobileColor}
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
        <button type="button" class="add-to-cart btn btn-warning">
          <i class="fa-solid fa-cart-shopping"></i> Add To Cart
        </button>
        <div className="icon-heart">
          <i class="fa-regular fa-heart"></i>
        </div>
      </motion.div>
    ));

  // console.log(iphoneCard);
  return (
    <div className="container-fluid mt-2">
      <motion.div  className="row ">
        <AnimatePresence>
          {isLoading ? <Spinner /> : iphoneCard}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ShowMobile;
