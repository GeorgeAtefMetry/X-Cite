import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../../../firebase";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../../../context/AuthContext";
const ShomMac = () => {
  const { inpfil } = UserAuth();
  // console.log(inpfil);
  const [mac, setMac] = useState([]);
  const macRef = collection(db, `Products`);
  // get data
  useEffect(() => {
    let q = query(
      macRef,
      where("categoryName", "==", "labtops"),
      where("brandName", "==", "apple")
      // where("lang", "==", i18n.language),
    );
    const getMacs = async () => {
      const mobiles = await getDocs(q);
      setMac(mobiles.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMacs();
  }, []);

  // loop over data
  const macCard = mac
    ?.filter((el) => {
      if (inpfil.length >= 1) {
        return (
          inpfil.includes(el.name) ||
          inpfil.includes(el.storage) ||
          inpfil.includes(el.processor) ||
          inpfil.includes(el.displaySize) ||
          inpfil.includes(el.OS) ||
          inpfil.includes(el.Ram) ||
          inpfil.includes(el.color)
        );
      } else {
        return el;
      }
    })
    .map((el, index) => (
      <div className=" bg-white iphone col-md-3 my-2 py-2" key={el.id}>
        <Link to={`/mac/${el?.id}`}>
          <img className="img-fluid" src={el.imgUrl} alt={el.name} />
        </Link>

        <h5 className="pb-4">
          Apple {el.name} {el.storage} ssd - {el.Ram} {el.processor}
        </h5>
        <div className="icons pb-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h4>{el.price} KD</h4>
        <p>Sold By {el.seller}</p>
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
