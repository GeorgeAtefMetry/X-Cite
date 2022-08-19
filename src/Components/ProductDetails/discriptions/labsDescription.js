import React from "react";
import { useEffect, useState } from "react";
import classes from './../ProductDetailes.module.css';
import { useTranslation } from "react-i18next";

const LabsDiscription = ({Product,category}) => {
    // console.log(category, Product);
    
    const { t, i18n } = useTranslation();
    return (
        <>
                <div className={`row p-3 ${classes.purchaseDetails} `}>
                    <h4>{t('Why to buy')} {i18n.language=="en"?Product.name:Product.nameAR}?</h4>
                    <h5>Labs</h5>
                </div>
        </>
    )
}
export default LabsDiscription;