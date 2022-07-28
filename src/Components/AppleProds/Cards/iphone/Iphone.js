import React, { useState } from 'react'
import Aside from './Aside/Aside'
import ShowMobile from './ShowMobile/ShowMobile'
import "./Iphone.css"
import { useLocation } from 'react-router-dom'
const Iphone = () => {
  const {pathname}  = useLocation();
  const [priceRinge, setPriceRinge] = useState(1000)
  
  
  return (
    <div className='container-fluid' style={{backgroundColor : "#F1F1F1"}}>
        <div className='row'>
            <aside className='col-md-4 col-lg-2'>
                <Aside  setPriceRinge={setPriceRinge} />
            </aside>
            <div className='col-md-8 col-lg-10 bg-white'>
             <ShowMobile priceRinge={priceRinge}  pathname={pathname}  />
            </div>
        </div>
    </div>
  )
}

export default Iphone
