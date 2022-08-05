import React from 'react'
import { useLocation } from 'react-router-dom';
import Iphone from '../iphone/Iphone'


const AppleWatch = props => {
    console.log(props);
    const {  pathname } = useLocation(); 
    console.log(pathname);
  return (
    <div>
        
    </div>
  )
}



export default AppleWatch