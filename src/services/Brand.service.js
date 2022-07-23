import fs from '../firebase';
import { collection, getDoc, getDocs, onSnapshot, doc } from 'firebase/firestore';

class BrandService{

    // async getAllBrands()
    // {
    //     const collectio = collection(fs, 'Brand');
    //     onSnapshot(collectio,(res)=>{
    //         return res;
    //     })
    // }

}
export default new BrandService;