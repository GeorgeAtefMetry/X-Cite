import React, { useState } from "react";
import styles from '../IphoneDetiles.module.css'
const Count = () => {
  let [num, setNum] = useState(1);
  const decrementCount = () => {
    if (num !== 1) {
        setNum(--num)
    } else if (num === 1){
        setNum(num)
    }
  };
  const incrementCount = () => {
    setNum(++num)
  };

  return (
    <div>
      <div className={`${styles.mainflex}  ${styles.rightAddToCart}`}>
        <div className="d-flex btn my-2">
          <button onClick={decrementCount} className={`btn ${styles.decrement}`}>
            -
          </button>
          <span className="px-3 fs-5 text-bg-warning">{num}</span>
          <button onClick={incrementCount} className={`btn ${styles.increment}`}>
            +
          </button>
        </div>
        <div className={`w-100 px-3 ${styles.btnw}`}>
          <button className="btn btn-warning py-2 my-2 ">
            <i
              class="fa fa-shopping-cart fa-fw carticon111679"
              aria-hidden="true"
            ></i>
            Add to Card
          </button>
        </div>
        <div className={`w-100 px-3 ${styles.btnw}`}>
          <button className="btn btn-danger py-2 my-2 ">
            <i class="fa fa-tachometer fa-fw">&nbsp;</i>1-Click Buy
          </button>
        </div>
        <div className={`${styles.soldby}  px-3`}>
          <p>
            Sold By: <span className="sp">X-cite</span>
          </p>
          <p className="ptn">
            Fulfilled By: <span className="sp">X-cite</span>
          </p>
        </div>
        <div className={`${styles.addwish} px-3`}>
          <div className={`${styles.pos}`}>
            <p className={`${styles.wish} btn`}>
              <i class="far fa-heart" aria-hidden="true"></i>Add to Wishlist
            </p>
            <span className={`${styles.add}`}>See Wishlist</span>
          </div>
          <div className={`${styles.pos}`}>
            <p className={`${styles.wish} btn`}>
              <i class="far fa-file"></i>Add to Compare
            </p>
            <span className={`${styles.add}`}>See Compare List</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
