import React from 'react'
import Pickup from './pickupForm'

function Home() {

    return(
        <>
            <noscript>[Home]</noscript>

            {/* Hero Img */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 hero">
                        <img src='/Trucker_Website/media/truck.jpg' alt='cover_img' className='img-responsive'></img>
                    </div>
                </div>
            </div>

            {/* Three grey elements (Main 1)*/}
            <div className="container">
                <div className='row'>

                    <div className='col-sm-4 slots slotA'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <i className="fas fa-truck-moving"><span className='sr-only'>Fast and Secure Delivery</span></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Fast and Secure Delivery</h2>
                                <p>Our Company Specializes in making sure that your order is both safely stored and on time.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 slots slotB'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <i className="fas fa-headset"><span className='sr-only'>Friendly Customer Support</span></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Friendly Customer Support</h2>
                                <p>Our Support Staff are always available to lend our customers a helping hand.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 slots slotC'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <i className="fas fa-users"><span className='sr-only'>Determined Employees</span></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Determined Employees</h2>
                                <p>Our Employees are dedicated in making sure your cargo is accurate every time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            {/* Summary Of Company (Main 2)*/}
            <div className="container">
                <div className="row summary">
                    <div className="col-sm-12 noPadding">
                        <h2>What we do: </h2>
                        <h3>Our Main Goal: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, eaque.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas provident culpa doloribus aut nulla adipisci non quis voluptates. Voluptas iusto ipsum reprehenderit repellendus accusamus consequuntur ullam quibusdam pariatur sed dolorem quas blanditiis enim ipsam odio molestias, ut et ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates temporibus ullam magni rerum sequi assumenda exercitationem. Tenetur optio nemo, quo impedit quos nostrum ratione eligendi modi, officiis dignissimos omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius fuga error, cumque tempora esse numquam non optio consectetur nobis illum repudiandae, quis sequi quos, est hic soluta! Et, rerum sit.</p>
                    </div>
                </div>
            </div>    

            {/* Founder Info (Main 1)*/}
            <div className="container">
                <div className="row about">
                    <div className="col-sm-8">
                        <h2>about our founder:</h2>
                        <p>Elizabeth Harris, founder of Guardian Angel Transportation based in Coldwater, MS has been a resident of Mississippi for over 15 years. She has over 10 years in customer service and management experience. As the founder of Guardian Angel Transportation, she understands firsthand the challenges that are faced due to the lack of safe reliable transportation. That is why she is committed to providing dependable freight and expediting transportation in Tennessee, Arkansas and Mississippi.</p>
                    </div>
                    <div className="col-sm-4">
                        <img src="/Trucker_Website/media/Founder.jpeg" alt="founder_img" className='img-responsive'/>
                    </div>
                </div>
            </div>      
     
            {/* Benefits and Dispatch Services (Main 3)*/}
            <div className="container main3Clr">
                <div className="row companyInfo">
                    <div className="col-sm-6">
                        <h2>Benefits</h2>
                        <ul>
                            <li>Non Forced Dispatching</li>
                            <li>Optional Loads To Choose From</li>
                            <li>Guaranteed well over $2 a mile</li>
                            <li>Freedom to work with multiple dispatchers</li>
                            <li>Always courteous and professional             communication</li>
                            <li>Low 15% fee that covers all things logistics</li>
                            <li>Low to no monthly fee's</li>
                            <li>Nationwide Shipping</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h2>Services</h2>
                        <ul>
                            <li>Load / Cargo Search</li>
                            <li>Daily Check-In Calls</li>
                            <li>Load Receipts</li>
                            <li>Billing / Invoicing</li>
                            <li>Book Load</li>
                            <li>Delivery Appointments</li>
                            <li>Permits &amp; Routes</li>
                            <li>Secure Load Confirmation</li>
                            <li>New Customer Setup</li>
                            <li>Transmit Delivery Documents</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Form For Pickup (Main 4) */}
            <Pickup/>
        </>
    )
}

export default Home