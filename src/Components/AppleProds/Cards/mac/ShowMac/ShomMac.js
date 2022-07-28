import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../../../firebase";
import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../../../../../context/AuthContext";
const ShomMac = () => {
  const { pathname } = useLocation();
  console.log("show mac" , pathname);
  const { inpfil } = UserAuth();
  console.log(pathname);
  const [mac, setMac] = useState([]);
  const macRef = collection(db, `products/apple${pathname}`);
  // get data
  useEffect(() => {
    const getMacs = async () => {
      const mobiles = await getDocs(macRef);
      setMac(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMacs();
  }, []);

  // loop over data
  const macCard = mac
    ?.filter(({ Storage, Processor, os, ram, color, screenSize }) => {
      if (inpfil.length >= 1) {
        return (
          inpfil.includes(Storage) ||
          inpfil.includes(Processor) ||
          inpfil.includes(screenSize) ||
          inpfil.includes(os) ||
          inpfil.includes(ram) || 
          inpfil.includes(color)
        );
      } else {
        return Storage && os && ram && Processor && screenSize ;
      }
    })
    .map((el, index) => (
      <div className=" bg-white iphone col-md-3 my-2 py-2" key={el.id}>
        <Link  to={`/mac/${el?.id}`} >
          <img className="img-fliud " src={el.imgUrl} alt={el.name} />
        </Link>

        <h5 className="pb-4">
          Apple {el.name} {el.Storage} ssd - {el.ram} {el.Processor}
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
      </div>
    ));

  return <div className="row">{macCard}</div>;
};

export default ShomMac;
