import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import db from '../../firebase';
import { collection, onSnapshot, doc, query, where, documentId, updateDoc, getDoc } from 'firebase/firestore';
import classes from './cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import cartAction from './../../Redux/action';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { UserAuth } from '../../context/AuthContext';


const Cart = () => {
  const [cookies, setCookies] = useCookies(['Cart']);
  const [cart, setCart] = useState([]);
  const [quantities, setQty] = useState([]);
  const [enableUpdateAll, setUpdadeState] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliverycharge, setDelivery] = useState(0);
  const [GrandTotal, setGrandTotal]= useState(0);
  const dispatch = useDispatch();
  const cartCounter = useSelector(state=>state.cartCounter);
  const [goToCheckout, setCheckoutState] = useState(false);
  const { user }= UserAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    const proCollec = collection(db, "Products");
    if(user)
    {
      const usrDoc = doc(db, 'users/', `${user.uid}`)
      onSnapshot(usrDoc,(snapshot)=>{
          const cartdb = snapshot.data().cart;
          const q = query(proCollec, where(documentId() ,"in", cartdb.map((item)=> item.pId)));

          onSnapshot(q,(res)=>{
            setCart(res.docs.map((doc)=>({
              ...doc.data(),
              id: doc.id,
              amount: cartdb.find((item)=> item.pId==doc.id).amount
            })));
            setQty(res.docs.map((doc)=>({
              id: doc.id,
              amount: cartdb.find((item)=> item.pId==doc.id).amount
            })));
          })
      })
    }
    else if (cookies.Cart && cookies.Cart.length)
    {
      console.log('cookies', cookies.Cart)
      const q = query(proCollec, where(documentId() ,"in", cookies.Cart.map(p=>p.id)))
      onSnapshot(q,(res,index)=>{
        setCart(res.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id,
          amount: cookies.Cart.find((coky)=> coky.id==doc.id).amount
        })));
        setQty(res.docs.map((doc)=>({
          id: doc.id,
          amount: cookies.Cart.find((coky)=> coky.id==doc.id).amount
        })));
      })
    }
    
  },[user])
  
  useEffect(()=>{
    if(cart.length)
    {
      setDelivery(599);
      setTotalPrice(calcTotalPrice())
    }
  },[cart])
  
  useEffect(()=>{
    setGrandTotal(totalPrice+deliverycharge)
  },[totalPrice])

  const changeItemQty =(evt, id)=>{
    setUpdadeState(true);
    setQty(quantities.map((qty)=>
      qty.id == id?
      {
          id: id,
          amount: evt.target.value
      }
      :qty
    ))
  }
  const updateProAmount =(pId)=>{
    if(user)
    {
      const usrdoc = doc(db, `users/${user.uid}`);
      getDoc(usrdoc).then((res)=>{
          let data = res.data();
          data.cart = data.cart.map((item)=>
            item.pId==pId?
            {
              ...item,
              amount: quantities.find((item)=>item.id==pId).amount
            }
            :item
          )
          updateDoc(usrdoc,data)
          .then((res)=>{
              console.log(res)
          })
      }).catch((err)=>{
              console.log(err);
          })
    }
    else
    {
      let date = new Date();
      date.setDate(date.getDate()+3);
  
      setCookies('Cart', cookies.Cart.map((coky)=>
        coky.id==pId?
        {
          ...coky,
          amount: quantities.find((item)=>item.id==pId).amount
        }
        :coky
      ), {
        path:'/',
        expires: date,
      })
    }
      setCart(cart.map((pro)=>
        pro.id== pId?
        {
          ...pro,
          amount: quantities.find((item)=>item.id==pId).amount
        }
        :
        pro
      ))
  }
  const updateAllProdsAmount =()=>{
    if(user)
    {
      const usrdoc = doc(db, `users/${user.uid}`);
      getDoc(usrdoc).then((res)=>{
          let data = res.data();
          data.cart = data.cart.map((pro)=>(
            {
              ...pro,
              amount: quantities.find((item)=>item.id==pro.pId).amount
            }
          ))
          updateDoc(usrdoc,data)
          .then((res)=>{
              console.log(res)
          })
      }).catch((err)=>{
              console.log(err);
          })
    }
    else
    {
      let date = new Date();
      date.setDate(date.getDate()+3);
  
      setCookies('Cart', cookies.Cart.map((coky)=>(
        {
          ...coky,
          amount: quantities.find((item)=>item.id==coky.id).amount
        }
      )), {
        path:'/',
        expires: date,
      })
    }
    setCart(cart.map((pro)=>(
      {
        ...pro,
        amount: quantities.find((item)=>item.id==pro.id).amount
      })
    ))
    setUpdadeState(false);
  }

  const calcTotalPrice =()=>{
    let total=0;
    cart.forEach((pro)=>{
      pro.discount?
      total+= (pro.price - ((pro.price*pro.discount)/100))*pro.amount
      :
      total+= pro.price*pro.amount
    })
    return total;
  }

  const removeFromCart=(pId)=>{
    if(user)
    {
      const usrdoc = doc(db, `users/${user.uid}`);
      getDoc(usrdoc).then((res)=>{
          let data = res.data();
          data.cart = data.cart.filter((pro)=> pro.pId != pId)
          updateDoc(usrdoc,data)
          .then((res)=>{
              console.log(res)
          })
      }).catch((err)=>{
              console.log(err);
          })
    }
    else
    {
      let date = new Date();
      date.setDate(date.getDate()+3);
  
      setCookies('Cart', cookies.Cart.filter((coky)=> coky.id != pId), {
        path:'/',
        expires: date,
      })
    }

    setCart(cart.filter((coky)=> coky.id != pId));
    dispatch(cartAction(cartCounter-1));
    console.log("deleted successfully");
  }
  const clearShoppingCart = ()=>{
    if(user)
    {
      const usrdoc = doc(db, `users/${user.uid}`);
      getDoc(usrdoc).then((res)=>{
          let data = res.data();
          data.cart = [];
          updateDoc(usrdoc,data)
          .then((res)=>{
              console.log(res)
          })
      }).catch((err)=>{
              console.log(err);
          })
    }
    else
    {
      let date = new Date();
      date.setDate(date.getDate()-3);
  
      setCookies('Cart', cookies.Cart, {
        path:'/',
        expires: date,
      })
    }
    setCart([]);
    dispatch(cartAction(0));
    console.log("cleared successfully");
  }
 
  return (
    <>
    <div className={classes.bigContainer+' container-fluid pt-3'}>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-end">
          <h3 className='text-dark'>Shopping Cart</h3>        
          <a href='#payment'><button className={'btn-lg rounded border-0 py-2 px-2 '+classes.chkbtn}><b>Proceed to Checkout</b></button></a>
        </div>
        {
          (user && cart.length==0) ||
          (!user && (!cookies.Cart || !cookies.Cart.length))?
          <div className="fs-4 text-center text-dark text-shadow mt-3 mb-5">Your Cart is empty!</div>
          : cart.map((item, index)=>{
            return (
              <div className='container-fluid my-3 p-0 shadow-sm' key={index} style={{minHeight:'280px'}}>
                <div className='p-0 d-flex flex-wrap rounded' style={{minHeight:'240px', backgroundColor:'white'}}>
                    {/* img */}
                    <div className='col-md-3 col-8 order-md-1 order-1 p-2 text-center' style={{height:'240px'}}>
                        <img src={item.images[0]} height='100%' width='100%'/>
                    </div>
                    {/* data */}
                    <div className='col-md-7 col-12 order-md-2 order-3 ps-1 pe-0 pt-3' style={{minHeight:'240px'}}>
                        <h6 style={{color:'black'}}><b>{item.name}</b></h6>
                        <p className='text-danger mt-3 mb-0'><b>Subtotal:</b>{item.discount?parseFloat(item.price-((item.price*item.discount)/100)*item.amount).toFixed(2): parseFloat(item.price*item.amount).toFixed(2)} USD</p>
                        <p className={"text-muted my-0 "+classes.smtxt}>Unit Price: <span className={classes.xsmtxt}>{item.discount? parseFloat(item.price-((item.price*item.discount)/100)).toFixed(2):item.price} USD</span></p>
                        {
                          item.discount?
                          <p className={"text-muted my-0 "+classes.smtxt}>Before discount: 
                                <span className={classes.xsmtxt} style={{textDecoration:'line-through'}}>{item.price} USD</span></p>
                          :''
                        }
                        <p className={"text-muted my-0 "+classes.smtxt}>Sold By: <span className={classes.xsmtxt+' text-primary'}>{item.seller}</span></p>
                        <p className={"text-muted my-0 "+classes.smtxt}>Fulfilled By: <span className={classes.xsmtxt+' text-dark'}>X-cite</span></p>
                    </div>
                    {/* remove */}
                    <div className='col-md-2 col-4 order-md-3 order-2 py-3 d-flex flex-column align-items-center' style={{height:'240px'}}>
                        <p className={classes.removebtn} onClick={()=>{removeFromCart(item.id)}}><i className="fa-regular fa-trash-can"></i> Remove</p>
                        <p className='py-0 my-0'>Qty: {item.amount}</p>
                          <input type='number' min={1} max={item.quantity} value={quantities.find((qty)=>qty.id==item.id).amount} onChange={($event)=>{changeItemQty($event,item.id)}} className={classes.qtyInput}/>
                          <button className='btn-sm btn-primary rounded mt-2' onClick={()=>{updateProAmount(item.id)}}>Update</button>
                    </div>
                </div>
                <div className='p-2' style={{minHeight:'40px', backgroundColor:'#f9f9f9'}}>
                  <input id={'delivery'+index} type={'radio'} checked readOnly/>
                    <label htmlFor={'delivery'+index} className=" px-3" style={{fontSize:"0.9rem", color:'#00365c'}}>
                      <i className="fa-solid fa-truck"></i> Delivery to my location.
                    </label>
                </div>
              </div>
            )
          })
          
        }

{/* ====== Chechout Accounting ========================================================= */}
        <div className='container-fluid my-3 p-3 d-flex flex-wrap justify-content-around shadow-sm' style={{minHeight:'70px', backgroundColor:'white'}}>
          <Link to="/home">
            <button className={classes.btns+ " px-3 rounded my-1 py-2"}>Continue Shopping</button>
          </Link>
          <button className={classes.btns+ " px-3 rounded my-1 py-2"} onClick={()=>{clearShoppingCart()}} disabled={cart.length==0}>Clear Shopping Cart</button>
          <button className={classes.upbtn+ " px-3 rounded my-1 py-2"} onClick={()=>{updateAllProdsAmount()}} disabled={!enableUpdateAll} >Update Shopping Cart</button>
        </div>

        <div className='container-fluid my-3 p-0 d-flex flex-wrap justify-content-between' style={{minHeight:'230px'}}>
          <div className='col-lg-4 col-12 p-4 mb-2 shadow-sm' style={{height:'230px', backgroundColor:'white'}}>
              <h3 style={{color: 'black'}}><i className="fa-solid fa-tag mb-3"></i> Discount Codes</h3>
              <p style={{fontSize:'0.8rem', color:'gray'}}>Do you have a coupon code? Enter it here:</p>
              <input type={'text'} className={classes.discounInp+ ' rounded px-2 mb-2'}/>
              <div className="text-end">
                <button className={classes.btns+ " px-2 rounded my-1 py-2 ms-auto"}>Apply Coupon</button>
              </div>
          </div>

          <div className={'col-lg-4 col-12 p-4 mb-2 '} style={{height:'max-content', display:goToCheckout?'inline':'none' }}>
            <div className="shadow-sm rounded p-3 w-100 h-100 d-flex flex-column justify-content-center" style={{backgroundColor:'white'}}>
                <PayPalScriptProvider
                  // options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}
                >
                  <PayPalButtons
                    style={{shape: "pill"}}
                    // forceReRender={[GrandTotal]}
                    createOrder={(data, actions)=>{
                        return actions.order.create({
                          intent: 'CAPTURE',
                          // payer:"Asma",
                          purchase_units:[{
                            discription:'sddfdf',
                            items:cart,
                            amount:{
                              currency_code: 'USD',
                              value:  totalPrice.toFixed(2)
                              // value: GrandTotal+1.00
                              // value: GrandTotal.toFixed(2)
                            }
                          },
                            // {
                            //   discription:'sdf',
                            //   amount:{
                            //     currency_code: 'USD',
                            //     value: 100.00,
                            //   }
                            // }
                          ]
                        })
                    }}
                  />
                </PayPalScriptProvider>
            </div>
          </div>

          <div className='col-lg-4 col-12 p-4 mb-2 shadow-sm' id="payment" style={{height:'230px', backgroundColor:'white'}}>
            <h6 className='mb-3'>Subtotal: <span className='ps-4'>{totalPrice.toFixed(2)} USD</span></h6>
            <h6 className='mb-4'>Delivery Charge: <span className='ps-4'>{deliverycharge} USD</span></h6>
            <h5 className='mb-4 text-danger'><b>Grand Total:</b> <span className='ps-4'>{GrandTotal.toFixed(2)} USD</span></h5>

            <button className={'btn-lg rounded border-0 py-3 px-2 w-100 fs-6 '+classes.chkbtn}
              style={{display:goToCheckout?'none':'inline' }}
              onClick={()=>{
                user?
                setCheckoutState(!goToCheckout)
                : navigate('/login')
              }}
            >
              <b>Proceed to Checkout</b>
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
export default Cart;