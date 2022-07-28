import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fs from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const BrandStore =()=>{

    const [Brands, setBrands] = useState([]);
    useEffect(()=>{
        const collec =  collection(fs, 'Brands');
        onSnapshot(collec, (res)=>{
                setBrands(res.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                })));
        })
    },[]);

    const gotoDetailes = (id)=>{
        console.log(id)
    }

    return(
        <>
        <div className="container-fluid text-center px-0 py-5 my-3">
            <h4>Visit Our Brand Stores</h4>
            <div className="row flex-wrap justify-content-center my-5 mx-0 px-0 w-100">
                {
                    Brands.map((brand, index)=>(
                        <div className="card text-muted my-3 mx-2 shadow-sm px-5 pt-3 pb-0" style={{width:'20rem', height:'9.5rem'}} key={index}>
                                <Link to={`/Brand/${brand.Name}`} state={`${brand.id}`}>
                                    <img className="card-img-top cursor" src={brand.Logo} alt="Title" onClick={()=>{gotoDetailes(brand.id)}}/>
                                </Link> 
                                <div className="card-body">
                                   <Link to={`/Brand/${brand.Name}`} state={`${brand.id}`}>
                                        <h5 className="card-title cursor text-muted">{brand.Name} store</h5>
                                   </Link> 
                                </div>
                        </div>
                    ))
                }
                {
                    Brands.map((brand, index)=>(
                        <div className="card text-muted my-3 mx-2 shadow-sm px-5 pt-3 pb-0" style={{width:'20rem', height:'9.5rem'}} key={index}>
                        <Link to={`/Brand/${brand.Name}`} state={`${brand.id}`}>
                            <img className="card-img-top cursor" src={brand.Logo} alt="Title" onClick={()=>{gotoDetailes(brand.id)}}/>
                        </Link> 
                        <div className="card-body">
                           <Link to={`/Brand/${brand.Name}`} state={`${brand.id}`}>
                                <h5 className="card-title cursor text-muted">{brand.Name} store</h5>
                           </Link> 
                        </div>
                </div>
                    ))
                }

            </div>
            <h5 className="text-muted">More Stores Coming Soon...</h5>

        </div>
        </>
    );
}
export default BrandStore;