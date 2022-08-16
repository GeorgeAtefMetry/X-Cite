import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import db from '../../firebase';
import { collection, onSnapshot, doc, query, where, documentId, updateDoc, getDoc, getDocs, addDoc } from 'firebase/firestore';
import classes from './cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import cartAction from './../../Redux/action';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { UserAuth } from '../../context/AuthContext';
import { AddOrder } from '../../services/CartService';

const Cart = () => {
  const [cookies, setCookies] = useCookies(['Cart']);
  const [cart, setCart] = useState([]);
  const latestCartValue = useRef(cart);
  const [quantities, setQty] = useState([]);
  const [enableUpdateAll, setUpdadeState] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliverycharge, setDelivery] = useState(0);
  const [GrandTotal, setGrandTotal]= useState(0);
  const latestGrandValue = useRef(GrandTotal);
  
  const dispatch = useDispatch();
  const cartCounter = useSelector(state=>state.cartCounter);
  const [goToCheckout, setCheckoutState] = useState(false);
  const { user }= UserAuth();
  const [curUser, setCurUser] = useState()
  const latestUserValue = useRef(curUser);
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [done, setDone] = useState(false);
  const [usrMode, setUsrMode] = useState(false);
  const [form, setForm] = useState({name:'', mail:'', address:''});
  const latestFormValue = useRef(form);
  const [formErrors, setFormErrors] = useState({name:'', mail:'', address:'', form:true});
  const [formValid, setFormValid] = useState(false);
  const [fillForm, setFillForm] = useState(false);

  useEffect(()=>{
    console.log(done);
  },[done])

  useEffect(()=>{
      console.log(order, 'in order Effect');
      if(order)
      {
        if(user)
        {
          const orderCollection = collection(db, 'Orders');
          const usrDoc = doc(db, `users/${order.userId}`);
          // add order datA TO FIRESTORE
          addDoc(orderCollection, order).then((orderRes)=>{
            getDoc(usrDoc).then((res)=>{
              let data = res.data();
              data.orders.push(orderRes.id)
              // push order id to target user
              updateDoc(usrDoc,data)
              .then((res)=>{
                  let ids = order.purchase_units.map((ele)=>ele.id);
                  const proCollec = collection(db, "Products");
                  console.log(ids);
                  const q = query(proCollec, where(documentId() ,"in", ids));
                  // update products quantity
                  getDocs(q).then((res)=>{
                    let i = 0;
                    console.log(res.docs);
                    console.log(res.docs.length);
                      // const proDoc = doc(db, `Products/${res.docs[i].id}`)
                      // let promise =  changeProAmount(i, res.docs);
                      // promise.then((res)=>{
                      changeProAmount(i, res.docs).then((res)=>{
                        
                      }).catch((err)=>{console.log('in err promise', err);})
                  })
  
              })})
          }).catch((err)=>{console.log(err);})
        }
        else
        {
          const orderCollection = collection(db, 'Orders');
          // add order datA TO FIRESTORE
          addDoc(orderCollection, order).then((orderRes)=>{
              console.log(orderRes);
              console.log(orderRes.id);
              AddOrder(orderRes.id);
                  let ids = order.purchase_units.map((ele)=>ele.id);
                  const proCollec = collection(db, "Products");
                  console.log(ids);
                  const q = query(proCollec, where(documentId() ,"in", ids));
                  // update products quantity
                  getDocs(q).then((res)=>{
                    let i = 0;
                      changeProAmount(i, res.docs)
                  })
  
                })
        }
      }
  },[order])

  const changeProAmount = (i, proList)=>{
    // return new Promise((resolve, reject)=>{
      console.log(i);
      const proDoc = doc(db, `Products/${proList[i].id}`)
      let updatedData = {
        ...proList[i].data(),
        quantity: proList[i].data().quantity - order.purchase_units.find((ele)=>ele.id==proList[i].id).amount
      }
      console.log(updatedData);
      updateDoc(proDoc, updatedData).then((res)=>{
          console.log(i, proList.length);
          console.log(i<proList.length-1)
          if(i< proList.length-1)
          {
            console.log('in complete')
            i++;
            changeProAmount(i, proList)
          }
          else
          {
            console.log('in else')
            ClearCartPage();
          }
        })        
    // })
  }
  const ClearCartPage =()=>{
      console.log('finally then');
      // reset user Cart 
      clearShoppingCart()
      console.log('order added successfully');
      setOrder(null)
      setCheckoutState(!goToCheckout)
      setLoadingOrder(false)
      setDone(true);
      setTotalPrice(0);
      setDelivery(0);
      setTimeout(() => {
        navigate('/Orders')
      }, 3000);
  }

  useEffect(()=>{
    const proCollec = collection(db, "Products");
    if(user)
    {
      const usrDoc = doc(db, 'users/', `${user.uid}`)
      onSnapshot(usrDoc,(snapshot)=>{
          setCurUser((usr)=>{
            latestUserValue.current ={...snapshot.data(), id: user.uid};
            return ({...snapshot.data(), id: user.uid})}
            )
          console.log(snapshot.data());
          const cartdb = snapshot.data().cart;
          if(cartdb.length)
          {
            const q = query(proCollec, where(documentId() ,"in", cartdb.map((item)=> item.pId)));
            onSnapshot(q,(res)=>{
              setCart((car)=>{
                let _cart = res.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
                amount: cartdb.find((item)=> item.pId==doc.id).amount
                }))
                latestCartValue.current = _cart;
                return _cart;
              }
              );
              setQty(res.docs.map((doc)=>({
                id: doc.id,
                amount: cartdb.find((item)=> item.pId==doc.id).amount
              })));
            })
          }
      })
      setUsrMode(true);
    }
    else if (cookies.Cart && cookies.Cart.length)
    {
      console.log('cookies', cookies.Cart)
      const q = query(proCollec, where(documentId() ,"in", cookies.Cart.map(p=>p.id)))
      onSnapshot(q,(res,index)=>{
        setCart((car)=>{
            let _cart = res.docs.map((doc)=>({
                            ...doc.data(),
                            id: doc.id,
                            amount: cookies.Cart.find((coky)=> coky.id==doc.id).amount
                          }))
            latestCartValue.current = _cart;
            return _cart;
        });
        setQty(res.docs.map((doc)=>({
          id: doc.id,
          amount: cookies.Cart.find((coky)=> coky.id==doc.id).amount
        })));
      })
      setUsrMode(false)
    }
    
  },[user])
  
  useEffect(()=>{
    if(cart.length)
    {
      setDelivery(15);
      setTotalPrice(calcTotalPrice())
    }
    console.log(latestCartValue.current);
    console.log(cart);
  },[cart])
  
  useEffect(()=>{
    setGrandTotal((grand)=>{
      latestGrandValue.current = totalPrice+deliverycharge;
      return totalPrice+deliverycharge;
    })
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
      setCart((car)=>{
        let _cart =  cart.map((pro)=>
              pro.id== pId?
              {
                ...pro,
                amount: quantities.find((item)=>item.id==pId).amount
              }
              :
              pro
        )
        latestCartValue.current = _cart;
        return _cart;
      })
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
    setCart((car)=>{
       let _cart = cart.map((pro)=>(
        {
          ...pro,
          amount: quantities.find((item)=>item.id==pro.id).amount
        })
        )
        latestCartValue.current = _cart;
        return _cart;
    })
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

    setCart((car)=>{
       let _cart = cart.filter((coky)=> coky.id != pId)
       latestCartValue.current = _cart; 
       return _cart;
      });
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
              // console.log(res)
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
    setCart((car)=>{
      latestCartValue.current =[];
      return [];
    });
    dispatch(cartAction(0));
    console.log("cleared successfully");
  }

  const handleApprove= (data, order)=>{
    console.log('in handle approve: order id: ', data);
    console.log('in handle approve: order is: ', order);
    let newOrder;
    if(latestUserValue.current.id)
    {
      newOrder ={
        id:order.id,
        state:'Pending',
        timeCreated:order.create_time,
        totalPaid:(latestGrandValue.current).toFixed(2),
        paypalMail:order.payer.email_address,
        userId: latestUserValue.current.id,
        userName: latestUserValue.current.fullName,
        userEmail:latestUserValue.current.email,
        purchase_units: latestCartValue.current.map((ele)=>({id: ele.id, amount:ele.amount, price: (ele.price-((ele.price*ele.discount)/100)).toFixed(2)}))
      }
    }
    else
    {
      console.log(latestFormValue);
      newOrder ={
        id:order.id,
        state:'Pending',
        timeCreated:order.create_time,
        totalPaid:(latestGrandValue.current).toFixed(2),
        paypalMail:order.payer.email_address,
        userId: null,
        userName: latestFormValue.current.name,
        userEmail:latestFormValue.current.mail,
        address: latestFormValue.current.address,
        purchase_units: latestCartValue.current.map((ele)=>({id: ele.id, amount:ele.amount, price: (ele.price-((ele.price*ele.discount)/100)).toFixed(2)}))
      }
    }
    console.log(latestUserValue.current);
    console.log(newOrder);
    setOrder(newOrder)
  }

  const handleChangeForm = (evt, controlName)=>{
    setForm(()=>{
      latestFormValue.current = {...form, [controlName]:evt.target.value}
      return {...form, [controlName]:evt.target.value}
    })
    if(controlName == 'name')
    {
      setFormErrors({...formErrors, name: (evt.target.value.length == 0)?'* This Field is require':
      ( evt.target.value.length >= 3 )?null:"* This field should contain 3 chars at least!" });
    }
    else if (controlName == 'mail')
    {
        setFormErrors({...formErrors, mail: (evt.target.value.length == 0)?'* This Field is require':
          ( /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(evt.target.value) )?null:"* Email isn't match!" });
    }
    else if (controlName == 'address')
    {
      setFormErrors({...formErrors, address: (evt.target.value.length == 0)?'* This Field is require':
      ( evt.target.value.length >= 7 )?null:"* This field should contain 7 chars at least!" });
    }

    if(formErrors.mail===null && formErrors.name===null && formErrors.address===null)
    {
      setFormValid(true)
    }
    else
    {
      setFormValid(false)
    }
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

          <div className={'col-lg-4 col-12 p-4 mb-2 '} style={{height:'max-content', display:goToCheckout || done?'inline':'none' }}>
            <div className="shadow-sm rounded p-3 w-100 h-100 flex-column justify-content-center"
                                style={{backgroundColor:'white',  display:loadingOrder || done ?'none':'flex'}}>
                <PayPalScriptProvider
                  // options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}
                >
                  <PayPalButtons
                    style={{shape: "pill"}}
                    createOrder={(data, actions)=>{
                        return actions.order.create({
                          intent: 'CAPTURE',
                          purchase_units:[{
                            discription:'buy from X-Cite.com',
                            amount:{
                              currency_code: 'USD',
                              value: (latestGrandValue.current).toFixed(2),
                            }
                          }]
                        })
                    }}
                    onApprove={async (data, actions)=>{
                      setLoadingOrder(true)
                      const order = await actions.order.capture(); 
                      console.log("order", order);
                      handleApprove(data, order);
                    }}
                    onClick={()=>{
                    }}
                  />
                </PayPalScriptProvider>
            </div>
            <div className='text-center my-3'>
              <div className="spinner-border text-primary" role="status"
                style={{display:loadingOrder?'inline-block':'none'}}
                spin={true}
                >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="py-3 px-0 mx-0 flex-column justify-content-center align-items-center" style={{display:done?'flex':'none'}}>
                <h6 className='text-center mx-0 px-0'>Your purchase has been completed successfully</h6>
                  <i className="fa-solid fa-face-grin-hearts bg-danger fs-1 p-0 text-center border border-1 border-danger"
                    style={{borderRadius:'50%', width:'fit-content',height:'fit-content', color:'yellow'}}>
                  </i>
              </div>
          </div>
          <div className={'col-lg-4 col-12 px-4 mb-2 '} style={{height:'max-content', display:(!goToCheckout && fillForm && !done)?'inline':'none' }}>
            <div className="shadow-sm rounded p-3 w-100 h-100 flex-column justify-content-center"
                                style={{backgroundColor:'white'}}>
                <h6 className='text-center text-primary' >Fill your data to continue</h6>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" value={form.name} onChange={($event)=>{handleChangeForm($event, 'name')}} id="name" placeholder="Name"/>
                  <span className='text-danger' style={{fontSize:'0.7rem'}}>{formErrors.name?formErrors.name:''}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">Email</label>
                  <input type="email" className="form-control" value={form.mail} onChange={($event)=>{handleChangeForm($event, 'mail')}}  id="mail" placeholder="Email"/>
                  <span className='text-danger' style={{fontSize:'0.7rem'}}>{formErrors.mail?formErrors.mail:''}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" value={form.address} onChange={($event)=>{handleChangeForm($event, 'address')}}  id="address" placeholder="Address"/>
                  <span className='text-danger' style={{fontSize:'0.7rem'}}>{formErrors.address?formErrors.address:''}</span>
                </div>
                <div className="mb-3">
                  <button className='btn btn-primary' disabled={!formValid} onClick={()=>{setCheckoutState(!goToCheckout)}}>Continue</button>
                </div>
            </div>
          </div>

          <div className='col-lg-4 col-12 p-4 mb-2 shadow-sm' id="payment" style={{height:'230px', backgroundColor:'white'}}>
            <h6 className='mb-3'>Subtotal: <span className='ps-4'>{totalPrice.toFixed(2)} USD</span></h6>
            <h6 className='mb-4'>Delivery Charge: <span className='ps-4'>{deliverycharge} USD</span></h6>
            <h5 className='mb-4 text-danger'><b>Grand Total:</b> <span className='ps-4'>{GrandTotal.toFixed(2)} USD</span></h5>

            <button className={'btn-lg rounded border-0 py-3 px-2 w-100 fs-6 '+classes.chkbtn}
              disabled={!cart.length}
              style={{display:goToCheckout?'none':'inline' }}
              onClick={()=>{
                user?
                setCheckoutState(!goToCheckout)
                : setFillForm(true)
                // navigate('/login')
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