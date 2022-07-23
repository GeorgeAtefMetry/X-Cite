import db from '../firebase'
import { collection, getDocs, getDoc, addDoc, deleteDoc, Doc, doc } from 'firebase/firestore'


const favCollection = collection(db, "favorites")

class Favorites{
    addFav = (newFav) =>{
        return addDoc(favCollection, newFav)
    }
    deleteFav = (id) =>{
        const favDoc = doc(db, "favorites", id)
        return deleteDoc(favDoc)
    }
    getAllFav = () =>{
        return getDoc(favCollection)
    }
}

export default new Favorites();