import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
import Accesssories from "./Accsessories/Accesssories";
import "./AppleProds.css";
const AppleProds = () => {
  //main prods
  const cardInfo = [
    {
      name: "iPhone",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-iPhone-13.jpg",
      comp :"/iphone"
    },
    {
      name: "Mac",
      imgUrl: "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-Mac.jpg",
      comp :"/mac"
    },
    {
      name: "iPad",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-iPad-2022.jpg",
        comp :"/iPad"
    },
    {
      name: "Apple Watch",
      imgUrl: "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Watch-28.jpg",
      comp :"/AppleWatch"
    },
    {
      name: "AirPods",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-AirPods.jpg",
        comp :"/AirPods"
    },
    {
      name: "Apple Tv",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-AppleTv.jpg",
        comp :"/AppleTv"
    },
    {
      name: "Air Tag",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-AirTag.jpg",
        comp :"/iphone"
    },
    {
      name: "Beats",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-Beats.jpg",
        comp :"/iphone"
    },
  ];
  /****************** 
  //Accessories prods
  ******************/
  const accessories = [
    {
      name: "iPhone Accessories",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-iPhoneAccs.jpg",
    },
    {
      name: "Mac Accessories",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-MacAccs.jpg",
    },
    {
      name: "iPad Accessories",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/iPad-Accessories-28.jpg",
    },
    {
      name: "Apple Watch Accessories",
      imgUrl:
        "https://m.xcite.com/media/wysiwyg/Apple_Shop/Apple-Prd-WatchAccs.jpg",
    },
  ];
  /**************** 
  // scroll to top
  ****************/
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  ///////////////////////////////
  /***************************/
  return (
    <>
      <Slider></Slider>
      <Cards card={cardInfo}></Cards>
      <div className="container-fluid  mb-3 ">
        <h4 className="text-center text-white acces py-3">Accessories</h4>
      </div>
      <Accesssories access={accessories}></Accesssories>
      <div
        className="sticy"
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <i class="fa fa-angle-up"></i>
      </div>
    </>
  );
};

export default AppleProds;
