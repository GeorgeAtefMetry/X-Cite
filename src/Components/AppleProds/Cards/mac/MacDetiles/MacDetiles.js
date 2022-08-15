import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import db from "../../../../../firebase";
import Count from "../../iphone/iphoneDetiles/Count/Count";
import Deals from "../../iphone/iphoneDetiles/Deals/Deals";
import HowIget from "../../iphone/iphoneDetiles/HowIget/HowIget";
import InfoTabs from "../../iphone/iphoneDetiles/InfoTabs/InfoTabs";
import TabsComp from "../../iphone/iphoneDetiles/Tabs/TabsComp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../iphone/iphoneDetiles/IphoneDetiles.module.css";
import InfoSlider from "../../iphone/iphoneDetiles/Slider/InfoSlider";

const MacDetiles = () => {
  const params = useParams();
  const {pathname} = useLocation();
  
  const [mac, setMac] = useState({});
  const oneMob = doc(db, `Products/${params.macId}`);

  useEffect(() => {
    const getMob = async () => {
      await getDoc(oneMob).then((doc) => {
        // console.log(doc.data(), doc.id);
        setMac(doc.data(), doc.id);
      });
    };
    getMob();
  }, []);

  console.log(mac);
  return (
    <div className="container-fluid py-2 bg-white">
      <div className="row py-2 d-flex justify-content-between align-items-start">
        <div className={`col-lg-2 ${styles.imgcol} ${styles.slider}`}>
          <Carousel
            className={`${styles.Carousel}`}
            showThumbs
            thumbWidth={100}
            autoPlay
            centerMode
          >
            {mac?.images?.map((el) => {
              return (
                <div className={`${styles.slider}`}>
                  <img src={el} alt="iphone" className="img-fluid w-50" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="col-lg-3 bg-white">
          <h4>
            Apple {mac.name} {mac.storage} {mac.color}
          </h4>
          <p>Brand Apple {mac.sku}</p>
          <div className={styles.ico}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span className="ms-3"> reviews</span>
          </div>
          <p className={styles.stock}>
            <i class="fa-solid fa-check"></i> in stock
          </p>
          <hr />
          <p className={styles.price}>
            {mac.price}KD <span className={styles.save}>739.900</span>{" "}
            <span className="text-danger">save {mac.discount || ''}</span>
          </p>
          <p>Installments starting from 18.000 KD monthly</p>
          <hr />
          <Deals />

          <hr />
          <TabsComp />
          <hr />
          <h6>Quick Overview:</h6>
          <div>{mac.description}</div>
          <hr />
          <HowIget />
        </div>
        <div className="col-lg-3">
          <Count />
        </div>
      </div>
      <h2>You May Also Like</h2>
      <InfoSlider />
      <InfoTabs imge={mac} id={params.macId} />
    </div>
  );
};

export default MacDetiles;
