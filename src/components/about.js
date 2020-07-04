import React from 'react'

function About() { 
    return (
        <>
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
        </>
    )
}

export default About