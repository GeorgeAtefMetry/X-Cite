import {onSnapshot, orderBy, query, where,  addDoc,collection } from "firebase/firestore"      
import { Link, useNavigate ,useMatch ,useLocation} from "react-router-dom";
import db from '../../firebase'
import { useState,useEffect,useParams } from "react";
import classes from './search.module.css'
import React from "react";
import {addFav, deleteFav} from '../../services/services';
const Search = () => {
  const [result, setResult] = useState([])
  const [data, setData] = useState([]);
  const [showingData, setShowingData] = useState([]);

  const location = useLocation();
  let value = location.state.name

  const navigate = useNavigate()

  useEffect(() => {
    const catCollection = collection(db, "Products");

    if(value){

      var searchName = query(
        catCollection,
          orderBy('name'),
      );
      var searchBrandQuery = query(
        catCollection,
        where("brandName", "==", `${value}`)
      );
      var searchCategoryName = query(
        catCollection,
        where("categoryName", "==", `${value}`)
      );

      onSnapshot(searchName,(snapshot)=>{
          setData(snapshot.docs.map(
            (doc)=>{
              setResult('')
              setResult(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
              setShowingData(
                result.filter(
                  (user) =>
                    user.name.toLowerCase().includes(value)
                )
              )
            }
          ))

      onSnapshot(searchBrandQuery, (snapshot)=>{
        setData(snapshot.docs.map(
          (doc)=>{
            setShowingData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
          }
        ))
      })

      onSnapshot(searchCategoryName, (snapshot)=>{
        setData(snapshot.docs.map(
          (doc)=>{
            setResult('')
            setResult(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
            setShowingData(
              result.filter(
                (user) =>
                  user.categoryName.toLowerCase().includes(value)
              )
            )
          }
        ))
      })
    
      })


    } 
    else{
        setResult([])
        setShowingData([])
        navigate('/home')
        }
    if(value.length < 0){
      setShowingData([])
      navigate('/home')
    }
    
  }, [value]);

  const[favorites, setFavorites] = useState([])
  const [isActive, setIsActive] = useState(false);

  const favButton = (e,id,name,img,price,oldPrice,discount) =>{
      setIsActive(current => !current);
      const newFav = {
          name:name,
          img:img,
          price:price,
          oldPrice:oldPrice,
          discount:discount
      }
      favorites.filter((item)=>{
        if(name === item.name){
            alert('Already In WishList')
            deleteFav(item.id)
        }
      })
      if(e.target.className === 'fa-regular fa-heart'){
          e.target.className = 'fa fa-heart color-red'
          addFav(newFav)
      }else{
          e.target.className = 'fa-regular fa-heart'
          favorites.filter((item)=>{
              if(name === item.name){
                deleteFav(item.id)
              }
          })
      }
  }
  return (
    <>
    <div className="container-fluid" style={{marginTop:'20px'}}>
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex" style={{flexWrap:'wrap'}}>
          {showingData.map(cat => (
            <div className={`col-lg-3 col-md-6 col-sm-12 ${classes.card}`} key={cat.id} style={{backgroundColor:'white',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc',padding:'5px 5px',height:'100%'}} >
                <div style={{width: '100%', height:'100%'}}>
                  <div className="px-1" style={{height:"7%",position:'relative'}}>
                    <span className={`float-left ${classes.bestSeller}`}>Best Seller</span>
                    <span className='icon float-right'>
                        <i className="far fa-heart" style={{fontSize:'22px',marginTop:'10px'}}
                            onClick={(e)=>{favButton(e,cat.id,cat.name,cat.images[0], parseInt(cat.price-((cat.price)*(cat.discount/100))) ,cat.price,cat.discount)}}
                            >
                        </i>
                    </span>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <img className="card-img-top" src={cat.images[0]} style={{width:'250px',height:"250px"}} alt="Card image cap"/>
                  </div>
                    <div className={`card-body w-100 ${classes.cardBody}`}>
                        <span className={`card-text col-sm-12 text-start ${classes.name}`} >{cat.name}</span>
                        <div className={classes.rating}>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='col-lg-12' style={{height:'200px'}}>
                        <span className={`card-text price ${classes.price}`}>{cat.discount ?  parseInt(cat.price-((cat.price)*(cat.discount/100)))  : cat.price} KD</span>
                            {cat.discount?
                                <span className={`card-text  col-lg-12 oldprice ${classes.oldPrice}`}>{cat.price} KD</span>
                                :<p></p>
                            }
                            {cat.discount?
                                <span className={`discount col-12 ${classes.discount}`}>SAVE {cat.discount}%</span>
                                :<p></p>
                            }
                        <span className={`card-text price col-12 ${classes.paymentMonthly}`}>Starting <span style={{fontWeight:'bold'}}>{cat.price ? parseInt(((cat.price*0.10)+cat.price)/24) : cat.price}.000 KD</span>  Monthly</span>
                        <span className={`card-text price col-12   ${classes.seller}`}>Sold By {cat.seller}</span>
                        <span className={`card-text  float-left ${classes.fulfilledByXcite}`}><i className="fa fa-check-circle" style={{marginRight:'4px'}}></i>[Fulfilled By X-cite]</span>
                        </div>
                        <span className={` ${classes.addToCart}`}><i className="fa fa-shopping-cart fa-2 carticon231879"></i>Add To Card</span>
                    </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Search