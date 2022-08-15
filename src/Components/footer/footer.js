import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBBtn,
    MDBCol,
    MDBRow
    } from 'mdb-react-ui-kit';
    import './footer.css'
const Footer = ()=>{
    return(
        <>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <section className='email-input'>
                <div className='col-auto'>
                    <p className='pt-2 sign-up'>
                    Sign up for our newsletter
                    </p>
                    <p className='pt-2 newsletter'>
                    All the latest & best offers delivered right to your inbox! Subscribe now.
                    </p>
                </div>
                <form action=''>
                    <div className='row d-flex justify-content-center'>
                    <MDBCol md='5' start='12' className='div-of-input'>
                        <MDBInput contrast type='email'placeholder='Email' className='mb-4 input float-left' />
                    </MDBCol>
                    <div className='col-auto subscribe'>
                        <MDBBtn outline color='light' type='submit' className='mb-4'>
                        Get Out Offers
                        </MDBBtn>
                    </div>
                    </div>
                </form>
                <div className='col-auto'>
                    <p className='pt-2 online-shopping'>
                    Online Shopping in Kuwait
                    </p>
                </div>
            </section>



            <section className='footer-bottom'>
                <div className='container'>
            <MDBRow>
                <section className='mb-4 x-cite-details col-auto'>
                <p className=' first-para'>
                Xcite.com: The Ultimate Online Shopping Destination in Kuwait
                </p>
                <p className='  second-para'>
                Xcite by Alghanim Electronics is the biggest and most popular online shopping website for consumer electronics and accessories in Kuwait. Browse, buy and get your electronics delivered with xcite.com.
                </p>
                </section>
                <MDBCol lg='3' md='5' s="6" className='mb-4 mb-md-0 all-element'>
                    <h5 className='text-uppercase fs-4 fw-bold'>Our Guide</h5>

                    <ul className="list-unstyled footer-link-list">
                        <li><a className="trackable" data-tracking-title="Footer - Help - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/help-and-services/" data-ur1313m3t="true">Help</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - FAQ - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/customer-service/" data-ur1313m3t="true">FAQ</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - Alghanim Corporate Site - Accessed" data-tracking-type="Navigation" href="https://www.alghanim.com" target="_blank" data-ur1313m3t="true">Alghanim Corporate Site</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - Xcite Showrooms - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/showrooms/" data-ur1313m3t="true">Xcite Showrooms</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - Terms and Conditions - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/conditions-of-use/" data-ur1313m3t="true">Terms &amp; Conditions</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - Privacy Policy - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/privacy/" data-ur1313m3t="true">Privacy Policy</a></li>
                        <li><a className="trackable" data-tracking-title="Footer - Cookie Policy - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/cookie-policy/" data-ur1313m3t="true">Cookie Policy</a></li>
                        <li><a title="تسوق اون لاين عبر الانترنت في الرياض، جدة، الخبر، الدمام" href="//www.xcite.com.sa/ar/" data-ur1313m3t="true">اكسايت السعودية</a></li>
                        <li><a title="تسوق اون لاين عبر الانترنت في الكويت" href="//www.xcite.com/ar/" data-ur1313m3t="true">اكسايت الكويت</a></li>
                    </ul>
                </MDBCol>

                <MDBCol lg='3' md='5' s="6" className='mb-4 mb-md-0 all-element '>
                <h5 className='text-uppercase fs-4 fw-bold'>Our Services</h5>

                <ul className="list-unstyled footer-link-list">
                    <li><a className="trackable" data-tracking-title="Footer - Trade-In - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/tradein/" data-ur1313m3t="true">Trade-In</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Returns and Exchange - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/buyer-protection.html/" data-ur1313m3t="true">Returns &amp; Exchange</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - B2B Services - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/b2b.html/" data-ur1313m3t="true">B2B - Corporate Sales</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Xcite Secure Shopping - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/security-online/" data-ur1313m3t="true">Xcite Secure Shopping</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Quick Delivery and Installation - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/delivery-installation/" data-ur1313m3t="true">Quick Delivery &amp; Installation</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Pay Monthly Installments - Accessed" data-tracking-type="Navigation" href="https://easycredit.xcite.com/" data-ur1313m3t="true">Pay Monthly Installments</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Easy Credit Offers - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/easy-credit/" data-ur1313m3t="true">Easy Credit Offers</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - About Us - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/about/" data-ur1313m3t="true">About Us</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Site Map - Accessed" data-tracking-type="Navigation test" href="https://www.xcite.com/site-map/" data-ur1313m3t="true">Site Map</a></li>
                </ul>
                </MDBCol>

                <MDBCol lg='3' md='5' s="6" className='mb-4 mb-md-0 all-element '>
                <h5 className='text-uppercase fs-4 fw-bold'>Highlights</h5>

                <ul className="list-unstyled footer-link-list">
                    <li><a className="trackable" data-tracking-title="Footer - Deal of the day - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/flashdeal/products/list/" data-ur1313m3t="true">Deal of The Day</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - X-cite Mobile App - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/mob-apps/" data-ur1313m3t="true">X-cite Mobile App</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - Careers - Accessed" data-tracking-type="Navigation" href="https://www.linkedin.com/company/10144436?utm_source=xcitecareers&amp;utm_medium=homepage&amp;utm_campaign=xcitecareers" data-ur1313m3t="true">Careers</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - X-cite Blog - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/blog/en/" data-ur1313m3t="true">X-cite Blog</a></li>
                    <li><a className="trackable" data-tracking-title="Footer - X-cite Weekly Flyer - Accessed" data-tracking-type="Navigation" href="https://www.xcite.com/flyer.html/" data-ur1313m3t="true">X-cite Weekly Flyer</a></li>
                </ul>
                </MDBCol>

                <MDBCol lg='3' md='5' s="6" className='mb-4 mb-md-0  all-element'>
                <h5 className='text-uppercase fs-4 fw-bold'>We Accept</h5>

                <ul className="list-inline footer-link-list">
                    <li><a data-ur1313m3t="true">KNET</a></li>
                    <li><a data-ur1313m3t="true">Mastercard</a></li>
                    <li><a data-ur1313m3t="true">Gulf Bank Easy Pay</a></li>
                    <li><a data-ur1313m3t="true">PayPal</a></li>
                    <li>Follow Us:</li>
                    <li className='icons'>
                    <a><i className="fa-brands fa-facebook-f"></i></a>
                    <a><i className="fa-brands fa-twitter"></i></a>
                    <a><i className="fa-brands fa-instagram"></i></a>
                    <a><i className="fa-brands fa-youtube"></i></a>
                    </li>
                </ul>
                </MDBCol>
            </MDBRow></div>
            </section>


        {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
            </a>
        </div> */}
        </MDBFooter>
        </>
    )
}
export default Footer