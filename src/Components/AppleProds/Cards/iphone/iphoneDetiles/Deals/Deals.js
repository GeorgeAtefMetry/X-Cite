import React from 'react'
import styles from '../IphoneDetiles.module.css'
const Deals = () => {
  return (
    <ul className={styles.ul}>
            <li>
              {" "}
              Secret Deal: Get 10% off Sandisk iXpand External Storage When You
              Buy any iPhone! <button className="btn">go therer</button>{" "}
            </li>
            <li>
              {" "}
              Buy this Smartphone and Get 30% off Belkin Silicone Cable!
              Discount applied in Cart.{" "}
              <button className="btn">go therer</button>
            </li>
            <li>
              {" "}
              Buy this Smartphone and Get 50% Off EQ Charger! Discount applied
              in Cart <button className="btn">go therer</button>
            </li>
          </ul>
  )
}

export default Deals