import React from "react";
import { useEffect, useState } from "react"
import db from '../firebase'
import { useParams } from "react-router-dom";
import { collection, doc, onSnapshot,getDocs,getDoc, increment } from "firebase/firestore"   
import classes from './digitalCardDetails.module.css'
import { useForm } from "react-hook-form";

const DigitalCardDetails = () => {
    const params = useParams()
    const [count, setCount] = useState(1)
    const[digitalCards, setDigitalCards] = useState([])
    const[favorites, setfavorites] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(()=>
    onSnapshot(doc(db, 'products/XWFqnqc6ij0vYjsfF0iQ/digital-cards', `${params.id}`),(snapshot)=>{
        setDigitalCards(snapshot.data())
    })
    ,[]);

    const [active, setActive] = useState(true)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [reviewActive, setReviewActive] = useState(true)
    const [reviewActive2, setReviewActive2] = useState(false)
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
    const displaReview = () => {
        setReviewActive (reviewActive => !reviewActive)
        setReviewActive2 (reviewActive2 => false)
    }
    const displaReview2 = () => {
        setReviewActive2 (reviewActive2 => !reviewActive2)
        setReviewActive (reviewActive => false)
    }
    return (
        <> 
        <hr></hr>
            <div className="row">
                <div className={`col-lg-4`} style={{padding:'20px'}}>
                    <div className={classes.image}>
                        <img src={digitalCards.img}></img>
                    </div>
                </div>
                <div className="col-lg-5" style={{padding:'30px'}}>
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

                <div className="col-lg-3" style={{padding:'20px'}}>
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
                            <button onClick={handleClick}   className={!active ?  ``:`${classes.borderBgcColor}`}>Product Description</button>
                            <button onClick={handleClick1}  className={!active1 ? ``:`${classes.borderBgcColor}`}>Product Specifications</button>
                            <button onClick={handleClick2}  className={!active2 ? ``:`${classes.borderBgcColor}`}>Reviews</button>
                            <button onClick={handleClick3}  className={!active3 ? ``:`${classes.borderBgcColor}`}>Q & A</button>
                            <button onClick={handleClick4}  className={!active4 ? ``:`${classes.borderBgcColor}`}>Our Services</button>
                        </div>      
                        
                        <div className={!active ? `${classes.productDescription} ${classes.dis}` : `${classes.productDescription} `}>
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
                                        <button className={reviewActive ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview}>User Reviews</button>
                                        <button className={reviewActive2 ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview2}>Write Reviews</button>
                                </div>

                                <div className={!reviewActive ? `${classes.dis}` : `${classes.userReviews}`}>
                                    <div style={{display:'inline-block'}} className={classes.user}>
                                        <div className={classes.logo} style={{backgroundColor:' rgb(152, 194, 132) !important'}}>SS
                                        </div>
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
                                <div className={reviewActive ? `${classes.dis}` : `${classes.writeReview}`}>
                                    <div className={`text-center ${classes.writeReviewRating}`}>
                                        <span><i class="fa fa-star checked"></i></span>
                                        <span><i class="fa fa-star checked"></i></span>
                                        <span><i class="fa fa-star checked"></i></span>
                                        <span><i class="fa fa-star checked"></i></span>
                                        <span><i class="fa fa-star checked"></i></span>
                                        <span className={classes.userRatingStar}>Click the stars to rate this product</span>
                                        <p>Unacceptable</p>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input className={classes.publicNameInput} placeholder="Your public name or alias (required)" {...register("example", { required: true })} />
                                            <br/>
                                            <textarea className={classes.productReviewInput} 
                                            placeholder=
                                            "Write your product review here
                                            Describe for example:
                                            - Why you chose this rating
                                            - What you like or disliked
                                            Please don't write about the retailer, shopping experience or delivery
                                            "
                                            {...register("exampleRequired", { required: true })} 
                                            />
                                            <br/>
                                            <div style={{border:'2px solid #ccc',width:'35%',margin:'auto',padding:'8px',borderTop:'none',borderRadius:'5px',marginTop:'-10px'}}>
                                                <label htmlFor="filePicker" style={{ background:"#fff", padding:"5px 10px",border:'1px solid #ccc',borderRadius:'10px',fontWeight:'bold',fontSize:'12px'}}>
                                                        Add Photo
                                                </label>
                                                <input  type="file" id="filePicker" style={{visibility:"hidden"}} name="img" accept="image/*" placeholder="Add Image"/>
                                            </div>
                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <br/>
                                            <p>Pros & Cons</p>
                                            <input className={classes.pointAboutProduct} placeholder="a good point about this product" {...register("example1", { required: true })} />
                                            <button>Add</button>
                                            <br/>
                                            <input className={classes.pointAboutProduct} placeholder="a bad point about this product" {...register("example2", { required: true })} />
                                            <button>Add</button>
                                            {errors.example1 && <span>This field is required</span>}
                                            {errors.example2 && <span>This field is required</span>}
                                            <p>Your e-mail</p>
                                            <p>A valid e-mail address is required to verify this review. It will not be displayed or shared with a third party.</p>                                            
                                            <input className={classes.publicNameInput}
                                            placeholder="Email address (Required)"
                                            {...register("mail", { required: true,
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                } })} />
                                            <p>{errors.mail?.message}</p>
                                            <br/>
                                            <p className={classes.agreeTermsInput} >
                                                <input 
                                                {...register("checkbox", { required: true })}
                                                type="checkbox" id="vehicle1" name="agreeTerms"/> 
                                                I agree to the 
                                                <a href="#">terms & conditions</a>
                                            </p>
                                            <br/>
                                            <input className={classes.submitFormInput}  type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={!active3 ? `${classes.QandA} row ${classes.dis}` : `${classes.QandA} row`}>

                            <div className={`col-md-5 ${classes.QandABtns}`}>
                                <button className={reviewActive ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview}>Questions and Answers</button>
                                <button className={reviewActive2 ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview2}>Write Reviews</button>
                            </div>

                            <div className={!reviewActive ? `${classes.dis}` : `${classes.userReviews} ${classes.divFirstOneToAsk}`}>
                                <button className={reviewActive2 ? `${classes.reviewBtn} ${classes.firstOneToAsk}` : `${classes.reviewBtnNone} ${classes.firstOneToAsk}`} onClick={displaReview2}>Be The First To Ask A Question</button>
                            </div>

                            <div className={reviewActive ? `${classes.dis}` : `${classes.writeReview}`}>
                                
                                <div className={`text-center ${classes.askQuestion}`}>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input className={classes.publicNameInput} placeholder="Your public name or alias (required)" {...register("example", { required: true })} />
                                        <br/>
                                        <textarea className={classes.productReviewInput} 
                                        placeholder=
                                        "Write your product review here
                                        Describe for example:
                                        - Why you chose this rating
                                        - What you like or disliked
                                        Please don't write about the retailer, shopping experience or delivery
                                        "
                                        {...register("exampleRequired", { required: true })} 
                                        />
                                        <br/>
                                        <div style={{border:'2px solid #ccc',width:'35%',margin:'auto',padding:'8px',borderTop:'none',borderRadius:'5px',marginTop:'-10px'}}>
                                            <label htmlFor="filePicker" style={{ background:"#fff", padding:"5px 10px",border:'1px solid #ccc',borderRadius:'10px',fontWeight:'bold',fontSize:'12px'}}>
                                                    Add Photo
                                            </label>
                                            <input  type="file" id="filePicker" style={{visibility:"hidden"}} name="img" accept="image/*" placeholder="Add Image"/>
                                        </div>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <br/>
                                        <p>Name or Alias</p>
                                        <br/>
                                        <input className={classes.pointAboutProduct} placeholder="a bad point about this product" {...register("example2", { required: true })} />
                                        <button>Add</button>
                                        {errors.example1 && <span>This field is required</span>}
                                        {errors.example2 && <span>This field is required</span>}
                                        <p>Your e-mail</p>
                                        <p>A valid e-mail address is required to verify this review. It will not be displayed or shared with a third party.</p>                                            
                                        <input className={classes.publicNameInput}
                                        placeholder="Email address (Required)"
                                        {...register("mail", { required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            } })} />
                                        <p>{errors.mail?.message}</p>
                                        <br/>
                                        <p className={classes.agreeTermsInput} >
                                            <input 
                                            {...register("checkbox", { required: true })}
                                            type="checkbox" id="vehicle1" name="agreeTerms"/> 
                                            I agree to the 
                                            <a href="#">terms & conditions</a>
                                        </p>
                                        <br/>
                                        <input className={classes.submitFormInput}  type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div  className={!active4 ? `${classes.dis}` : ''}>
                            <div style={{padding:'20px'}}>
                                <div class="row">
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/latest-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>The Latest & Greatest</h4>
                                                <p>Here at X-cite, we keep our product catalog up to date with the newest product releases so you can have the latest and greatest technologies at your fingertips.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/flash-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Outstanding Deals</h4>
                                                <p>From Flash Deals, Daily Deals, Weekly Deals to Monthly Deals. We have them all! Simply subscribe to our Newsletter and be the first to know about our amazing offers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/pod_icon-2.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Pay On Delivery</h4>
                                                <p>You can choose to pay for your products at the time of delivery using Cash or Credit Card, which ever is convenient for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/payment-min.png" style={{width:'30%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Secure Payments</h4>
                                                <p>As a leading retailer, X-cite ensures your peace of mind with our employment of advanced security technologies. We use the most secure payment gateways and make sure your purchases are safe.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/delivery-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Free* & Fast Delivery Available</h4>
                                                <p>We strive to deliver your products as fast as possible. Products that require installation may take longer to deliver. Visit our *Terms & Conditions for more information.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/install-min.png" style={{width:'20%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Free Installation</h4>
                                                <p>Products that require installation, such as TVs larger than 32-inch or air conditioning units, will be installed by our team of experts for free. We do not install Water Heaters (aka. Boilers).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/return-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Easy Returns</h4>
                                                <p>You can return or exchange your product within 14 days of purchase by calling customer care at 1803535 or to schedule a pick up from your home or send an email to Xsupport@xcite.com and one of our agents will get back to you as soon as possible. For more details, visit our Buyer Protection page and "Returns Are Easy" section in our Terms & Conditions page.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/warranty-min.png" style={{width:'20%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Extended Warranty</h4>
                                                <p>Think you might need an extended warranty on the product you are about to purchase? Well, you're in luck! X-cite offers up to 5 Years of extended warranty on top of the 1 Year warranty it already offers! Check out our Terms & Conditions to learn more.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/easy_credit_icon-2.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Easy Credit</h4>
                                                <p>Buying electronics from X-cite just got easier! Buy on Easy Credit and pay for your purchases through easy and flexible monthly installments starting at an affordable KD 5 per month.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>      
            </div>

            
        </>
    )
}

export default DigitalCardDetails