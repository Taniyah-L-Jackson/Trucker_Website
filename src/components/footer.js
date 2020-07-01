import React from 'react'

function Footer() {
    return(
        <div className='footerWrapper'>
            <noscript>[Footer]</noscript>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>lorem</h1>
                        <ul>
                            <li>
                                <img src="media/email-open-50.png" alt=""/><span>Lorem.</span>
                            </li>
                            <li>
                                <img src="media/icons8-phone-50.png" alt=""/><span>Lorem.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h1>lorem</h1>
                        <ul>
                            <li>
                                <img src="media/icons8-facebook-f50.png" alt="facebook"/><span>Lorem.</span>
                            </li>
                            <li>
                                <img src="media/icons8-instagram-50.png" alt="instagram"/><span>Lorem.</span>
                            </li>
                            <li>
                                <img src="media/icons8-twitter-50.png" alt="twitter"/><span>Lorem.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer