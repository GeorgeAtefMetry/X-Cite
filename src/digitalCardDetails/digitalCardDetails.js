import React from "react";
import { useEffect, useState } from "react"
import db from '../firebase'
import { useParams } from "react-router-dom";
import { collection, doc, onSnapshot } from "firebase/firestore"    
const DigitalCardDetails = () => {
    const params = useParams()
    const[digitalCards, setDigitalCards] = useState([])

    useEffect(()=>
        onSnapshot(collection(db,`products/XWFqnqc6ij0vYjsfF0iQ/digital-cards/${params.id}`),(snapshot)=>{
            // console.log(snapshot)
            setDigitalCards(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    ,[]);

    return (
        
        <>
        <div className="container">
            <h1>asdihfioash</h1>
            <img src={digitalCards.img}></img>
            <h2>ewqe{digitalCards.name}</h2>
        </div>
        </>
    )
}

export default DigitalCardDetails