import db from '../firebase'
import {  getDoc, doc,updateDoc} from 'firebase/firestore'



const id = localStorage.getItem('id')
const usrdoc = doc(db, `users/${id}`);

export const addReview = (newFav) =>{//newfav = dta coming from rev form

    getDoc(usrdoc).then((res)=>{

    let data = res.data();

    // console.log(data)

    data.review.push(newFav)// push d to dta stor in specific user that detect by userid from localstorage

    updateDoc(usrdoc,data)

})

}