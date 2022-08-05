import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = (props) => {
  
  const {t} =useTranslation()
    
  const cards = props.card.map((el, index) => (
    <div key={index} className="col-lg-3 col-md-6 col-12 p-3 gap-2" style={{height:"26rem"}}>
      <div className="bg-white py-4 d-flex flex-column justify-content-between m-0 align-items-center h-100 card">
        <h5 className="text-center" style={{height:"10%"}}> {el.name} </h5>
        <div style={{height:"70%"}}>
          <img src={el.imgUrl} alt={el.name} height="100%" style={{maxWidth:"100%"}}/>
        </div>
        <li style={{height:"20%"}}>
          <Link className="btn text-center shop-btn"  to={{ pathname: el.comp }}>
            {t("SHOP NOW")}
          </Link>
        </li>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between align-items-center">
          {cards}
        </div>
      </div>
    </>
  );
};

export default Cards;
