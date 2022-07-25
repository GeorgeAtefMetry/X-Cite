import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../../../../firebase";
import "./infoSlide.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InfoSlider = () => {
  const iphoneRef = collection(db, "products/apple/iphone");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getIphones = async () => {
      const mobiles = await getDocs(iphoneRef);
      setData(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getIphones();
  },[]);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  const cardSlide = data.map((el) => {
    return <div className="onSlider">
               <div>
               <img src={el.mobileImg} alt={el.mobileName} className="w-75"/>
               </div>
               <p className="fs-3">{el.mobileName} {el.color} {el.Storage}</p>
               <p className="py-2 text-danger fw-bold fs-5">price {el.price}KD</p>
           </div>;
  });
  return (
    <div className="contSlider py-3 px-3">
      <Slider {...settings}>
        {cardSlide}
      </Slider>
    </div>
  );
};

export default InfoSlider;
