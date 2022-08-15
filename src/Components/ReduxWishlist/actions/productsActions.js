import React from "react";

export function setProducts (data){
    return  {
        type : 'set-products',
        payload : data
    }
}
export function deleteProducts (data){
    return {
        type : "delete-products",
        payload : data
    }
}