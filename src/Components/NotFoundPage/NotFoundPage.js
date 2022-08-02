import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFoundPage/NotFoundPage.css'
const NotFoundPage = () => {
    return (
            <>
            <div style={{backgroundColor:'white'}}>
                <div className='img'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/asom-test.appspot.com/o/Screenshot%202022-07-24%20221243.png?alt=media&token=01e77cd1-b4de-488d-9b88-7cb344d1a06a'  alt="Card image cap"/>
                </div>
                <div className='text'>
                        <p className='err'>404</p>
                        <p className='woops'>
                            <span className='woopspan'>Woops,</span>
                            our bad!
                        </p>
                        <p className='notxt'>
                        The page you requested was not found, but you can get back on track again.
                        </p>
                        <Link to='/Home'>
                        <button class="btn btn-primary btn-sm " role="button" >Go to Home Page </button>
                        </Link>
                </div>
            </div>
            </>
    );
}

export default NotFoundPage;
