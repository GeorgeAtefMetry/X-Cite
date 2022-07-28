import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import fs from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import classes from './cart.module.css';
const Cart = () => {
  const [cookies, setCookies] = useCookies(['Cart']);
  const [cart, setCart] = useState([]);
  const [quantities, setQty] = useState([]);

  useEffect(()=>{
    // setCart(cookies.Cart);
    const collec = collection(fs,`products/tablets/tablets`)
        onSnapshot(collec,(res)=>{
          setCart(res.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id
            })));
            console.log(cart);
        })
  },[])

  return (
    <>
    <div className={classes.bigContainer+' container-fluid pt-3'}>
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-end">
          <h3 className='text-dark'>Shopping Cart</h3>        
          <button className={'btn-lg rounded border-0 py-2 px-2 '+classes.chkbtn}><b>Proceed to Checkout</b></button>
        </div>
        {
          cart.map((item, index)=>{
            return (
              <div className='container-fluid my-3 p-0 shadow-sm' key={index} style={{minHeight:'280px'}}>
                <div className='p-0 d-flex flex-wrap rounded' style={{minHeight:'240px', backgroundColor:'white'}}>
                    {/* img */}
                    <div className='col-md-3 col-8 order-md-1 order-1 p-2 text-center' style={{height:'240px'}}>
                        <img src={item.img} height='100%' width='100%'/>
                    </div>
                    {/* data */}
                    <div className='col-md-7 col-12 order-md-2 order-3 ps-1 pe-0 pt-3' style={{minHeight:'240px'}}>
                        <h6 style={{color:'black'}}><b>{item.name}</b></h6>
                        <p className='text-danger mt-3 mb-0'><b>Subtotal:</b> {parseInt(item.price) * 1} KD</p> {/* item price * quantity */}
                        <p className={"text-muted my-0 "+classes.smtxt}>Unit Price: <span className={classes.xsmtxt}>{parseInt(item.price)} KD</span></p>
                        <p className={"text-muted my-0 "+classes.smtxt}>Sold By: <span className={classes.xsmtxt+' text-primary'}>X-cite</span></p>
                        <p className={"text-muted my-0 "+classes.smtxt}>Fulfilled By: <span className={classes.xsmtxt+' text-dark'}>X-cite</span></p>
                    </div>
                    {/* remove */}
                    <div className='col-md-2 col-4 order-md-3 order-2 py-3 d-flex flex-column align-items-center' style={{height:'240px'}}>
                        <p className={classes.removebtn}><i class="fa-regular fa-trash-can"></i> Remove</p>
                        <p className='py-0 my-0'>Qty: {1}</p>
                          <input type='number' min={1} max={100} className={classes.qtyInput}/>
                          <button className='btn-sm btn-primary rounded mt-2'>Update</button>
                    </div>
                </div>
                <div className='p-2' style={{minHeight:'40px', backgroundColor:'#f9f9f9'}}>
                  <input id={'delivery'+index} type={'radio'} checked/>
                    <label htmlFor={'delivery'+index} className=" px-3" style={{fontSize:"0.9rem", color:'#00365c'}}>
                      <i class="fa-solid fa-truck"></i> Delivery to my location.
                    </label> 
                </div>

              </div>
            )
          })
        }

        <div className='container-fluid my-3 p-3 d-flex flex-wrap justify-content-around shadow-sm' style={{minHeight:'70px', backgroundColor:'white'}}>
          <button className={classes.btns+ " px-3 rounded my-1 py-2"}>Continue Shopping</button>
          <button className={classes.btns+ " px-3 rounded my-1 py-2"}>Clear Shopping Cart</button>
          <button disabled className={classes.upbtn+ " px-3 rounded my-1 py-2"}>Update Shopping Cart</button>
        </div>

        <div className='container-fluid my-3 p-0 d-flex flex-wrap justify-content-between' style={{minHeight:'230px'}}>
          <div className='col-lg-4 col-12 p-4 mb-2 shadow-sm' style={{height:'230px', backgroundColor:'white'}}>
              <h3 style={{color: 'black'}}><i class="fa-solid fa-tag mb-3"></i> Discount Codes</h3>
              <p style={{fontSize:'0.8rem', color:'gray'}}>Do you have a coupon code? Enter it here:</p>
              <input type={'text'} className={classes.discounInp+ ' rounded px-2 mb-2'}/>
              <div className="text-end">
                <button className={classes.btns+ " px-2 rounded my-1 py-2 ms-auto"}>Apply Coupon</button>
              </div>
          </div>
          <div className='col-lg-4 col-12 p-4 mb-2 shadow-sm' style={{height:'230px', backgroundColor:'white'}}>
            <h6 className='mb-3'>Subtotal: <span className='ps-4'>1,295.350 KD</span></h6>
            <h6 className='mb-4'>Delivery Charge: <span className='ps-4'>0.000 KD</span></h6>
            <h5 className='mb-4 text-danger'><b>Grand Total:</b> <span className='ps-4'>1,295.350 KD</span></h5>

          <button className={'btn-lg rounded border-0 py-3 px-2 w-100 fs-6 '+classes.chkbtn}><b>Proceed to Checkout</b></button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
export default Cart;