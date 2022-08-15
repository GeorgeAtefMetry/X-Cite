import db from '../firebase'
import { collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, Doc, doc, deleteField } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
    const User = () => {
        const [id, setId] = useState('');
        useEffect(() => {
                const {user} = UserAuth()
                const ID = user.uid
                console.log(user.uid)
                setId(ID)
                localStorage.setItem('id',JSON.stringfy(id))
                console.log(ID)
        }, []);
    }
    const id = localStorage.getItem('id')
    // console.log(id)

    const usrdoc =  doc(db, `users/${id}`);

    export const addFav = (newFav) =>{
        getDoc(usrdoc).then((res)=>{
        let data = res.data();
        // console.log(data)
        data.wishlist.push(newFav)
        updateDoc(usrdoc,data)
    })
    }
    export const deleteFav = (id) =>{
        getDoc(usrdoc).then((res)=>{
            let data = res.data();
            data.wishlist = data.wishlist.filter((pro) => pro != id)
            updateDoc(usrdoc,data)
        })
    }
    // getAllFav = () =>{
    //     return getDoc(favCollection)
    // }
    // getDoc = () => {
    //     const usrdoc = doc(db, `users`, user.uid);
    //     console.log(usrdoc)
    // }   
// }
    

// export default Favorites