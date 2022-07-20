import React from "react";
import { useEffect, useState } from "react"
import db from '../firebase'
import { useParams } from "react-router-dom";
import { collection, doc, onSnapshot,getDocs,getDoc, increment } from "firebase/firestore"   
import classes from './digitalCardDetails.module.css'

const DigitalCardDetails = () => {
    const params = useParams()
    const [count, setCount] = useState(1)
    const[digitalCards, setDigitalCards] = useState([])

    useEffect(()=>
    onSnapshot(doc(db, 'products/r0IPHZLeSwWjyANaykLp/digital-cards', `${params.id}`),(snapshot)=>{
        setDigitalCards(snapshot.data())
    })
    ,[]);

    const [active, setActive] = useState(true)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const handleClick = event => {
        setActive(active => !active);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active4 => false);
        setActive4(active4 => false);
    };
    const handleClick1 = event => {
        setActive(active => false);
        setActive1(active1 => !active1);
        setActive2(active2 => false);
        setActive3(active2 => false);
        setActive4(active2 => false);
    };
    const handleClick2 = event => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => !active2);
        setActive3(active2 => false);
        setActive4(active2 => false);
    };
    const handleClick3 = event => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active2 => !active3);
        setActive4(active2 => false);
    };
    const handleClick4 = event => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active2 => false);
        setActive4(active2 => !active4);
    };
    
    const incrementCount = () => {
        setCount(count+1)
    }
    const decrementCount = () => {
        if(count >= 2){
            setCount(count-1)
        }
        else{
            return
        }
    }
    return (
        
        <> 
        <hr></hr>
            <div className="row">
                <div className={`col-lg-4`}>
                    <div className={classes.image}>
                        <img src={digitalCards.img}></img>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className={classes.centerDetails}>
                        <h4>{digitalCards.name}</h4>
                        <div>
                            <p>Brand: <span>BrandName</span></p>
                            <div className={classes.rating}>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div className={classes.inStock}>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    In Stock
                            </div>
                        </div>
                        <hr></hr>
                        <div className={classes.pricing}>
                            <span className={classes.price}>{digitalCards.price}</span>
                            <span className={classes.oldPrice}>{digitalCards.oldPrice}</span>
                            <span className={classes.discount}>{digitalCards.discount}</span>
                        </div>
                        <hr></hr>
                        <div className={classes.overview}>
                            <h4>Quick Overview</h4>
                            <ul>
                                <li>Receive Code digitally</li>
                                <li>View code via "My Orders" "My Vitual Cards"</li>
                                <li>Fast & Reliable</li>
                                <li>For US Accounts Only</li>
                            </ul>
                            <div className={classes.howDoIGet}>
                                How do I get it?
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className={classes.rightAddToCart}>
                        <div className={classes.btns}>
                            <button onClick={decrementCount} className={classes.decrement}>-</button>
                            <span className={classes.count}>{count}</span>
                            <button onClick={incrementCount} className={classes.increment}>+</button>
                        </div>
                        <div>
                            <button className={classes.addToCardBtn}><i class="fa fa-shopping-cart fa-fw carticon111679" aria-hidden="true"></i>Add to Card</button>
                        </div>
                        <div>
                            <button className={classes.clickBuyBtn}><i class="fa fa-tachometer fa-fw">&nbsp;</i>1-Click Buy</button>
                        </div>
                        <div className={classes.soldFulfilled}>
                            <p>Sold By: <span>X-cite</span></p>
                            <p>Fulfilled By: <span>X-cite</span></p>
                        </div>
                        <div className={`col-lg-12  ${classes.wishlistCompare}`}>
                            <div className="col-lg-6 me-2">
                                <p><i class="far fa-heart" aria-hidden="true"></i>Add to Wishlist</p>
                                <span>See Wishlist</span>
                            </div>
                            <div className="col-lg-6">
                                <p><i class="far fa-file"></i>Add to Compare</p>
                                <span>See Compare List</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.aboutProduct}>
                <div className="row">
                    <div className="col-lg-10">
                        <div className={classes.informationBtns}>
                            <button onClick={handleClick}>Product Description</button>
                            <button onClick={handleClick1} >Product Specifications</button>
                            <button onClick={handleClick2} >Reviews</button>
                            <button onClick={handleClick3}>Q & A</button>
                            <button onClick={handleClick4} >Our Services</button>
                        </div>      
                        
                        <div className={!active ? `${classes.productDescription} ${classes.dis }` : `${classes.productDescription} `}>
                            <div>
                                <h4>Why to buy {digitalCards.name}</h4>
                                <div className="col-lg-9 float-start">
                                    <div className={classes.sign}>
                                        <div>
                                            <p>Make sure You Are Signed In</p>
                                            <p>You need to be signed in to receive the code on your account. Make one now if you do not have any, it will only take a few minutes!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 float-start">
                                    <div className={classes.signImage}>
                                        <img src="	https://m.xcite.com/media/richcontent/login-514523.jpg" ></img>
                                    </div>
                                </div>
                            </div> 

                            <div className={`row ${classes.purchaseDetails} `}>
                                <div className="col-lg-3 float-start">
                                    <div className={classes.signImage}>
                                        <img src="https://m.xcite.com/media/richcontent/Untitled-1-324545.jpg" ></img>
                                    </div>
                                </div>
                                <div className="col-lg-9 float-start">
                                    <div className={classes.afterPurchase}>
                                        <div>
                                            <p>After you complete your purchase, you will be redirected to a conformation page which confirms your purchase and shows your code as well. You will also be able to find it saved in your account. Go to “My Account” {'>'} “My Virtual Cards”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className={`row ${classes.purchaseDetails} `}>
                                <div className="col-lg-9 float-start">
                                    <div>
                                        <div>
                                            <h4>What If I Do Not Receive My Code? Is There A Refund?</h4>
                                            <p>If somehow you did not receive your code in your virtual cards, you can report this issue by going to “My Account” then clicking the “Ask For Refund” button.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 float-start">
                                    <div>
                                        <img src="	https://m.xcite.com/media/richcontent/Thankyou-324545.jpg" ></img>
                                    </div>
                                </div>
                            </div> 

                            <div className={`row ${classes.purchaseDetails} `}>
                                <div className="col-lg-3 float-start">
                                    <div>
                                        <img src="https://m.xcite.com/media/richcontent/report-issue-onecard-514523.jpg" ></img>
                                    </div>
                                </div>
                                <div className="col-lg-9 float-start">
                                    <div>
                                        <div>
                                            <p>If there is any issue with your card, you can simply go to “My Account” then “My Virtual Cards” where you will find the “Report Issue” button. Once clicked, you should receive a pop up page where you can fill in your complaint details including a screenshot and submit it to be reviewed as soon as possible.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div  className={!active1 ? `${classes.productSpecification}  ${classes.dis}` : `${classes.productSpecification}` }>
                            <p>Information on {digitalCards.name}</p>
                            <table className="data-table col-md-10" id="product-attribute-specs-table1">
                                <tbody className="">                                                      
                                    <tr>
                                        <th >
                                            Article Number                                    
                                        </th>
                                        <td >
                                            620925                                    
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className={classes.bold}>General</p>
                            <table className="data-table col-md-10" id="product-attribute-specs-table1">
                                <tbody className="">                                                      
                                    <tr>
                                        <th >
                                            Card Value                                    
                                        </th>
                                        <td >
                                            100 USD                                    
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div  className={!active2 ? `${classes.reviews} row ${classes.dis}` : `${classes.reviews} row`}>
                            <div className={`col-md-2 ${classes.rating}`}>
                                <p className={classes.bold}>4.9</p>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <p>Based on 79 rating</p>
                            </div>

                            <div className={`col-md-2 ${classes.ratingCol}`}>
                                <div className="tf-distribution tf-dist-user">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="range">5 ☆
                                                </td>
                                                <td title="67/75 (89%)"  className="bar">
                                                    <div style={{width:'200px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressFiveStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="range">4 ☆
                                                </td>
                                                <td title="7/75 (9%)" className="bar">
                                                    <div style={{width:'20px !important', backgroundColor:'#bcee01' }} className={classes.ratingProgressFourStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="range">3 ☆</td>
                                                <td title="0/75 (0%)" className="bar">
                                                    <div style={{width:'0px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressThreeStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="range">2 ☆
                                                </td>
                                                <td title="0/75 (0%)" className="bar">
                                                    <div style={{width:'0px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressTwoStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="range">1 ☆
                                                </td>
                                                <td title="1/75 (1%)" className="bar">
                                                    <div style={{width:'30px !important', backgroundColor:'#e8afb1' }} className={classes.ratingProgressOneStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className={`col-md-12  ${classes.customersReviews}`}>

                                <div className={`col-md-3 ${classes.reviewBtns}`}>
                                        <button>User Reviews</button>
                                        <button>Write Reviews</button>
                                </div>

                                <div className={classes.userReviews}>
                                    <div style={{display:'inline-block'}} className={classes.user}>
                                    <div className={classes.logo} style={{backgroundColor:' rgb(152, 194, 132) !important'}}>SS</div>
                                        <h5>Sharka Sami </h5>
                                        <span title="Verified buyer" className={classes.verified}><i class="fa-solid fa-check"></i></span>
                                        <time datetime="2022-05-24" class="date hcol not-xs">2 months ago</time>
                                    </div>
                                    <div className={classes.ratingCustomer}>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                    </div>
                                    <span className={classes.reviewWord}>Good</span>
                                </div>
                            </div>
                        </div>

                        <div  className={!active3 ? `${classes.dis}` : ''}>

                        </div>

                        <div  className={!active4 ? `${classes.dis}` : ''}>
                                <h1>ddddddddddddd</h1>
                        </div>


                    </div>
                </div>      
            </div>

            
        </>
    )
}

export default DigitalCardDetails