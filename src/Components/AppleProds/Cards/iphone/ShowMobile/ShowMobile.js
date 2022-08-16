import {
  collection,
  getDocs,
  // onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../../../context/AuthContext";
// import { UserAuth } from "../../../../../context/AuthContext";
import db from "../../../../../firebase";
import "../../../../../fontawesome-free-6.1.1-web/css/all.css";
import "../../../../../fontawesome-free-6.1.1-web/css/all.min.css";
import Spinner from "../../../../Spinner/Spinner";
import "./ShowMobile.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ShowMobile = ({ priceRinge }) => {
  const { inpfil } = UserAuth();
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // get data iphone from firestore
  useEffect(() => {
    const iphoneRef = collection(db, `Products`);
    let q = query(
      iphoneRef,
      where("categoryName", "==", "Mobile Phones"),
      where("brandName", "==", "Apple")
      // where("lang", "==", i18n.language),
    );

    const getPhones = async () => {
      const mobiles = await getDocs(q);
      setData(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getPhones();
  }, [i18n.language]);

 

    



  const iphoneCard = data.filter((el)=>{
          if (priceRinge === 1000) {
            return el
          } else {
            return el.price <= parseInt(priceRinge)
          }
  })?.filter((el) => {
      if (inpfil.length >= 1 && el.type) {
        return (
          inpfil.includes(el.storage) ||
          inpfil.includes(el.Camera) ||
          inpfil.includes(el.screenSize) ||
          inpfil.includes(el.color) ||
          inpfil.includes(el.type) ||
          inpfil.includes(el.os) ||
          inpfil.includes(el.mobileRam)
        );
      } else {
        return el
      }
    }).map((el) => (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        layout
        className=" bg-white iphone col-md-6 col-lg-4 col-xl-3 "
        key={el?.id}
      >
        <Link to={`/iphone/${el?.id}`}>
          <img className="img-fluid " src={el?.images[0]} alt={el?.type} />
        </Link>
        <h5 className="pb-4">
          {i18n.language === "ar" ? el.brandNameAR : el.brandName}{" "}
          {i18n.language === "ar" ? el.typeAR : el.type}{" "}
          {i18n.language === "ar" ? el.storageAR : el.storage}
        </h5>
        <div className="icons-ahmed pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h4>
          {el.price} {t("KD")}
        </h4>
        <p>
          {t("Sold By")} {i18n.language === "ar" ? el.sellerAR : el.seller}
        </p>
        <p className="X-ctie ">
          <i class="fa-solid fa-check"></i> {t("Fulfilled By X-cite")}
        </p>
        <button type="button" class="add-to-cart btn btn-warning">
          <i class="fa-solid fa-cart-shopping"></i> {t("Add To Cart")}
        </button>
        <div className="icon-heart">
          <i class="fa-regular fa-heart"></i>
        </div>
      </motion.div>
    ));

  //console.log(iphoneCard);
  return (
    <div className="container-fluid mt-2">
      <motion.div className="row ">
        <AnimatePresence>
          {isLoading ? <Spinner /> : iphoneCard}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ShowMobile;
