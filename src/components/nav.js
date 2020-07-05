import React from 'react'

function Nav() {
    return (
        <>
            <noscript>[Nav]</noscript>
            <div className="container">
                <div className='row navColor'>
                    <div className='col-sm-4'>
                        
                        <div>
                            <img className='logo img-responsive' src='/Trucker_Website/media/letter.png' alt='logo'></img>

                            {/* Disabled Until Future Updates */}
                            {/* <div className="dropDown-content">

                                <Link to='/'>Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/pickupForm'>Schedule A Delivery</Link>
                            </div> */}
                        </div>

                    </div>

                    <div className='col-sm-8'>
                        <h1>We are <span>guardian angel transportation</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav