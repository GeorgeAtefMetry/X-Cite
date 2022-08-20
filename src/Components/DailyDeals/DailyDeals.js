/* eslint-disable no-unused-vars */
// imports
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  // onSnapshot,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import db from "../../firebase";
import Spinner from "../Spinner/Spinner";

const DailyDeals = () => {
  const [isLoading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const refData = collection(db, `Products`);

    const getPhones = async () => {
      const products = await getDocs(refData);
      setData(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getPhones();
  }, []);

  //handel change sort data

  const sorted = (e) => {
    const value = e.target.value;
    const copyArray = [...data];
    if (value === "low to high") {
      copyArray.sort((a, b) => a.price - b.price);
      setData(copyArray);
    } else if (value === "high to low") {
      copyArray.sort((a, b) => b.price - a.price);
      setData(copyArray);
    } else if (value === "by name") {
      // copyArray.sort((a, b)=> a.type.length < b.type.length)
      setData(copyArray);
    }
  };

  // render data
  let cards = data.map((el) => (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      layout
      className=" bg-white iphone col-md-6 col-lg-4 col-xl-3 "
      key={el?.id}
    >
      <Link to={"/unknown"} className="d-flex justify-content-center">
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

  return (
    <div className="container-fluid mt-2 ">
      <div className="by-3 mb-3">
        <p className="py-3">
          Best Online Shopping Offers In Kuwait! Browse now Deals Of the Day for
          Mobiles, Computers, Laptops, home equipment, fitness equipment,
          headphones, games consoles at the best price in Kuwait from Xcite
          Alghanim
        </p>
        <form>
          <select
            id="sorted"
            class="form-select w-25"
            onChange={(e) => sorted(e)}
          >
            <option value="Recommended">Recommended</option>
            <option value="low to high">Low to high</option>
            <option value="high to low">High to low</option>
            
          </select>
        </form>
      </div>
      <motion.div className="row mx-3">
        <AnimatePresence>{isLoading ? <Spinner /> : cards}</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DailyDeals;
