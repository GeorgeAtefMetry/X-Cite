import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import db from "../../firebase";
import { collection, onSnapshot, doc, query, where, documentId, updateDoc, getDoc, getDocs, addDoc } from 'firebase/firestore';
import "./UserProfile.css";

function OrderDetailes() {
  const {user} = UserAuth();
  const [ordersShow, setOrdersShow] = useState([]);

  useEffect(()=>{
    // console.log(user);
    if(user)
    {
      if(user.uid)
      {
        // console.log('in user');
        const orderCollection = collection(db, 'Orders');
        const userOrders = query(orderCollection, where('userId', '==', `${user.uid}`))
        onSnapshot(userOrders,(res)=>{
          let bigres = res.docs.map((ele)=>({
            ...ele.data(),
            fsID: ele.id
        }));
          let proIds = [];
          res.docs.forEach((ele)=>{
            ele.data().purchase_units.forEach((unit)=>{
              if(!proIds.includes(unit.id))
              {
                proIds.push(unit.id)
              }
            })
          })
          if(proIds.length)
          {
            const q = query(collection(db, 'Products'), where(documentId(), 'in', proIds))
            getDocs(q).then((res)=>{
    
              setOrdersShow(bigres.map((order)=>{
                return ({
                  ...order,
                  purchase_units: order.purchase_units.map((ele)=>{
                    return res.docs.map((pro)=>({
                      ...pro.data(),
                      id: pro.id,
                      amount: ele.amount,
                      price: ele.price
                  })).find((pro)=>pro.id== ele.id)
                  })
                })
              }))
            })
          }

        })
      }
    }
    else
    {
      // console.log('no usr');
      let orders = localStorage.getItem('Orders')
      // console.log(orders, JSON.parse(orders));
      if(orders)
      {
        if(JSON.parse(orders).length)
        {
          const orderCollection = collection(db, 'Orders');
          const unUsrOrders = query(orderCollection, where(documentId(), 'in', JSON.parse(orders)))
          onSnapshot(unUsrOrders,(res)=>{
            let bigres = res.docs.map((ele)=>({
              ...ele.data(),
              fsID: ele.id
          }));
            let proIds = [];
            res.docs.forEach((ele)=>{
              ele.data().purchase_units.forEach((unit)=>{
                if(!proIds.includes(unit.id))
                {
                  proIds.push(unit.id)
                }
              })
            })
            const q = query(collection(db, 'Products'), where(documentId(), 'in', proIds))
            getDocs(q).then((res)=>{
    
              setOrdersShow(bigres.map((order)=>{
                return ({
                  ...order,
                  purchase_units: order.purchase_units.map((ele)=>{
                    return res.docs.map((pro)=>({
                      ...pro.data(),
                      id: pro.id,
                      amount: ele.amount,
                      price: ele.price
                  })).find((pro)=>pro.id== ele.id)
                  })
                })
              }))
            })
          })

        }
      }
    }
  },[user])
  return (
    <>
    <div>
        <h2> My Orders </h2>
        { !ordersShow.length?
           <p>You have placed no orders.</p>
          :
        <table className="w-100 mx-auto shadow">
          <thead>
            <tr style={{backgroundColor:'#001a2c'}}>
              <th className="text-light py-2 ps-2 col-5">Purchase units</th>
              <th className="text-light py-2 text-center col-2">Order State</th>
              <th className="text-light py-2 text-center col-2">Time created</th>
              <th className="text-light py-2 text-center col-2">Order id</th>
              <th className="text-light py-2 text-center col-1">Total Paid</th>
            </tr>
          </thead>
          <tbody>
          {
            ordersShow.map((order, index)=>{
              return (
                <>
                  <tr className="bg-light" key={order.fsID}>
                    <td className="col-5 py-3 border border-end border-1">
                      {/* <table> */}
                        {/* <tbody> */}
                      {
                        order.purchase_units.map((unit, index)=>{
                          return (
                            <>
                              <tr>
                                <td className='col-3 ps-2'><img src={unit.images[0]} className='' height='70rem' /></td>
                                <td className='col-9'><b style={{fontSize:'0.8rem'}}>{unit.name}</b></td>
                              </tr>
                              <tr key={index+"1"}>
                                <td className='col-3 ps-2'><small className="text-muted">Amount:</small> {unit.amount}</td>
                                <td className='col-9'><small className="text-muted">Unit prics:</small> {unit.price}$</td>
                              </tr>
                              {
                                index==order.purchase_units.length-1?
                                ''
                                :<hr/>
                              }
                            </>
                          )
                        })
                      }
                        
                        {/* </tbody> */}
                      {/* </table> */}
                    </td>
                    <td className="col-2 text-center border border-end border-1" style={{color:order.state=='Completed'?'blue':''}}>{order.state}</td>
                    <td className="col-2 text-center border border-end border-1">{order.timeCreated}</td>
                    <td className="col-2 text-center border border-end border-1">{order.id}</td>
                    <td className="col-1 text-center border border-end border-1">{order.totalPaid}$</td>
                  </tr>
                  <tr key={index}>
                    <td colSpan={5} className='py-1' style={{backgroundColor:'#001a2c'}}>
                    </td>
                  </tr>
                </>
              )
            })
          }
          </tbody>
        </table>
        }

    </div>
    </>
  );
}

export default OrderDetailes;