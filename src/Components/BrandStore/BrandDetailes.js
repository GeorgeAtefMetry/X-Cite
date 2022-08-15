import { useParams } from "react-router-dom";
import React from 'react';

const BrandDetailes = ()=>{
    const params = useParams()
    return(
        <>
        <h2>{params.id}</h2>
        </>
    );
}
export default BrandDetailes;