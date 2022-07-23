import React from 'react'
import Aside from './Aside/Aside'
import ShowMobile from './ShowMobile/ShowMobile'
import "./Iphone.css"
const Iphone = () => {
  
  return (
    <div className='container-fluid' style={{backgroundColor : "#F1F1F1"}}>
        <div className='row'>
            <aside className=' col-md-2'>
                <Aside ></Aside>
            </aside>
            <div className=' col-md-10 bg-white'>
             <ShowMobile ></ShowMobile>
            </div>
        </div>
    </div>
  )
}

export default Iphone
