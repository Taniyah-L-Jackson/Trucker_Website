import React from 'react'
import Pickup from './pickupForm'

function Home() {

    return(
        <>
            <noscript>[Home]</noscript>

            <div className="container">

                {/* Hero Img */}
                <div className='row'>
                    <div className='col-sm-12'>
                        <img src='/Trucker_Website/media/truck.jpg' alt='cover_img' className='img-responsive'></img>
                    </div>
                </div>

                {/* Three grey elements (info 1)*/}
                <div className='row'>

                    <div className='col-sm-3'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img src="/Trucker_Website/media/truck.png" alt="a_truck_image" className="icon"/>
                            </div>
                            <div className='col-sm-6'>
                                <h1>Lorem, ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-3'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img src="/Trucker_Website/media/support.png" alt="a_customer_service_image" className="icon"/>
                            </div>
                            <div className='col-sm-6'>
                                <h1>Lorem, ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-3'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img src="/Trucker_Website/media/loader.png" alt="a_dolly_with_boxes_image" className="icon"/>
                            </div>
                            <div className='col-sm-6'>
                                <h1>Lorem, ipsum dolor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>

                </div>

            {/* Founder Info (Main 1)*/}

                <div className="row">
                    <div className="col-sm-9">
                        <h1>Lorem, ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque incidunt fugiat harum modi, laboriosam veniam cupiditate nostrum adipisci vero quis a necessitatibus. Quis nostrum id fugit sunt facilis? Aliquam corrupti dolorum delectus voluptas consectetur, deserunt eaque temporibus ducimus deleniti!</p>
                    </div>
                    <div className="col-sm-3">
                        <img src="/Trucker_Website/media/me.png" alt="founder_img"/>
                    </div>
                </div>

            {/* Benefits and Dispatch Services (Main 2)*/}

                <div className="row">
                    <div className="col-sm-6">
                        <h1>Lorem.</h1>
                        <ul>
                            <li>Lorem.</li>
                            <li>Eligendi.</li>
                            <li>Maxime!</li>
                            <li>Quo.</li>
                            <li>Fugit.</li>
                            <li>Fugiat!</li>
                            <li>Assumenda.</li>
                            <li>Vero.</li>
                            <li>Laborum!</li>
                            <li>Accusamus!</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h1>Lorem.</h1>
                        <ul>
                            <li>Lorem.</li>
                            <li>Eligendi.</li>
                            <li>Maxime!</li>
                            <li>Quo.</li>
                            <li>Fugit.</li>
                            <li>Fugiat!</li>
                            <li>Assumenda.</li>
                            <li>Vero.</li>
                            <li>Laborum!</li>
                            <li>Accusamus!</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                </div>

                                
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                </div>

                <Pickup/>

            </div>
        </>
    )
}

export default Home