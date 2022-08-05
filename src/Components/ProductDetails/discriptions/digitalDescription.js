import React from "react";
import { useEffect, useState } from "react";
import classes from './../ProductDetailes.module.css';

const DigitalDiscription = ({Product,category}) => {
    // console.log(category, Product);

    return (
        <>
                <div className={`row p-3 ${classes.purchaseDetails} `}>
                    <h4>Why to buy {Product.name}</h4>
                    <div>
                    <div className="col-lg-9 float-start">
                                <p>Make sure You Are Signed In</p>
                                <p>You need to be signed in to receive the code on your account. Make one now if you do not have any, it will only take a few minutes!</p>
                    </div>
                    <div className="col-lg-3 float-start">
                            <img src="	https://m.xcite.com/media/richcontent/login-514523.jpg"  height="200px"/>
                    </div>
                    </div>
                </div> 

                <div className={`row p-3 ${classes.purchaseDetails} `}>
                    <div className="col-lg-3 float-start">
                            <img src="https://m.xcite.com/media/richcontent/Untitled-1-324545.jpg" height="200px" />
                    </div>
                    <div className={"col-lg-9 float-start "+classes.afterPurchase}>
                                <p>After you complete your purchase, you will be redirected to a conformation
                                        page which confirms your purchase and shows your code as well. You will 
                                        also be able to find it saved in your account. Go to “My Account” {'>'} 
                                        “My Virtual Cards”.</p>
                    </div>
                </div>  

                <div className={`row p-3 ${classes.purchaseDetails}`}>
                    <div className="col-lg-9 float-start">
                                <h4>What If I Do Not Receive My Code? Is There A Refund?</h4>
                                <p>If somehow you did not receive your code in your virtual cards, you can report this issue by going to “My Account” then clicking the “Ask For Refund” button.</p>
                    </div>
                    <div className="col-lg-3 float-start">
                            <img src="	https://m.xcite.com/media/richcontent/Thankyou-324545.jpg" height="200px"/>
                    </div>
                </div> 

                <div className={`row p-3 ${classes.purchaseDetails} `}>
                    <div className="col-lg-3 float-start">
                            <img src="https://m.xcite.com/media/richcontent/report-issue-onecard-514523.jpg" height="200px" />
                    </div>
                    <div className="col-lg-9 float-start">
                                <p>If there is any issue with your card, you can simply go to “My Account”
                                        then “My Virtual Cards” where you will find the “Report Issue” button.
                                        Once clicked, you should receive a pop up page where you can fill in 
                                        your complaint details including a screenshot and submit it to be reviewed
                                        as soon as possible.</p>
                    </div>
                </div>
        </>
    )
}
export default DigitalDiscription;