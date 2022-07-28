import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = (props) => {
  const cards = props.card.map((el, index) => (
    <div key={index} className="col-md-3  py-3  gap-2 ">
      <div className="bg-white py-3 d-flex flex-column justify-content-between align-items-center card">
        <h2 className="text-center"> {el.name} </h2>
        <div>
          <img src={el.imgUrl} alt={el.name} className="img-fluid" />
        </div>
        <li>
          <Link className="btn text-center shop-btn"  to={{ pathname: el.comp }}>
            SHOP NOW
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
