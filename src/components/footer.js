import React from 'react'

function Footer() {
    return(
        <>
            <noscript>[Footer]</noscript>
            <div className="container">
                <div className="row footer">
                    <div className="col-sm-6">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <i className="far fa-envelope"><span className='sr-only'>Email</span></i>
                                Email
                            </li>
                            <li>
                                <i className="fas fa-phone"><span className='sr-only'>Contact</span></i>
                                Number
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <i className="fab fa-facebook-f"><span className='sr-only'>Facebook</span></i>
                                Facebook
                            </li>
                            <li>
                                <i className="fab fa-instagram"><span className='sr-only'>Instagram</span></i>
                                Instagram
                            </li>
                            <li>
                                <i className="fab fa-twitter"><span className='sr-only'>Twitter</span></i>
                                Twitter
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer