import React from 'react'

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
                                <i className="fas fa-truck-moving"></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Lorem, ipsum dolor.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 slots slotB'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <i className="fas fa-headset"><span className='sr-only'>Customer Service</span></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Lorem, ipsum dolor.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 slots slotC'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <i className="fas fa-users"></i>
                            </div>
                            <div className='col-sm-6'>
                                <h2>Lorem, ipsum dolor.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            {/* Summary Of Company (Main 2)*/}
            <div className="container">
                <div className="row summary">
                    <div className="col-sm-12">
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque incidunt fugiat harum modi, laboriosam veniam cupiditate nostrum adipisci vero quis a necessitatibus. Quis nostrum id fugit sunt facilis? Aliquam corrupti dolorum delectus voluptas consectetur, deserunt eaque temporibus ducimus deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque incidunt fugiat harum modi, laboriosam veniam cupiditate nostrum adipisci vero quis a necessitatibus. Quis nostrum id fugit sunt facilis? Aliquam corrupti dolorum delectus voluptas consectetur, deserunt eaque temporibus ducimus deleniti!</p>
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
                        <h2>Services</h2>
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
            </div>
        </>
    )
}

export default Home