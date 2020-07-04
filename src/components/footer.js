import React from 'react'

function Footer() {
    return(
        <>
            <noscript>[Footer]</noscript>
            <div className="container">
                <div className="row footerColor">
                    <div className="col-sm-6">
                        <h1>lorem</h1>
                        <ul>
                            <li>
                                <img src="media/email-open-50.png" alt=""/><span>Email</span>
                            </li>
                            <li>
                                <img src="media/icons8-phone-50.png" alt=""/><span>Contact</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h1>lorem</h1>
                        <ul>
                            <li>
                                <img src="media/icons8-facebook-f50.png" alt="facebook"/><span>Facebook</span>
                            </li>
                            <li>
                                <img src="media/icons8-instagram-50.png" alt="instagram"/><span>Instagram</span>
                            </li>
                            <li>
                                <img src="media/icons8-twitter-50.png" alt="twitter"/><span>Twitter</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer