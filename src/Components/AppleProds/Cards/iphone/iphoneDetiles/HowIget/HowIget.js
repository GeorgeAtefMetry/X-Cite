import React from 'react'
import styles from '../IphoneDetiles.module.css'
const HowIget = () => {
  return (
    <div className={styles.deleveryinfo}>
            <div className={styles.howget}>
            <h6>How do I get it?</h6>
            <p><i class="fa fa-check-circle"></i> Fulfilled By X-cite</p>
            </div>
            <div className={styles.infodelevry}>
             <ul>
              <li className="text-info "><i class="fa-solid fa-truck-moving pe-2"></i> Scheduled Delivery: FREE Next-Day Delivery. Other Delivery Options May Be Available In The Checkout Page.</li>
              <li className="text-info "><i class="fa-solid fa-truck-moving pe-2"></i> 3-Hours Express Delivery Available (+3.000 KD)</li>
              <li >Order before 6PM and get it delivered in 3 hours. Order after 6PM & get it the next day before 12PM. 3.000 KD delivery charge applies.</li>
              <li className="text-info "> <i class="fa-solid fa-rocket pe-2"></i> 1-Hour Super Express Delivery Available (+4.500 KD)</li>
              <li>Order before 6PM and get it delivered in 1 hour. Order after 6PM & get it the next day before 12PM. 4.500 KD delivery charge applies.</li>
              <li className="text-info">Note: Delivery charges (if any) for this item are calculated at checkout.</li>
              <li className="my-3"><button type="button" class="btn btn-select">select store</button></li>
             </ul>
             
            </div>
          </div>
  )
}

export default HowIget