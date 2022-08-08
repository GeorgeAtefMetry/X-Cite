import React from "react";
import { useEffect, useState } from "react";
import classes from './../ProductDetailes.module.css';

const TVsDiscription = ({Product,category}) => {
    // console.log(category, Product);

    return (
        <>
                <div className={`row p-3 ${classes.purchaseDetails} `}>
                    <h4>Why to buy {Product.name}</h4>
                    <h5>TVs</h5>
                </div>
        </>
    )
}
export default TVsDiscription;