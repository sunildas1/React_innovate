import React from 'react'
import './watch.css'

const Watch = () => {
  return (
    <section id="watch">
        <div className="container">
            <div className="watch-wrapper">
                <div className="watch-img">
                    <img src="images/Watch-img.png" alt="Image Not Found" />
                </div>
                <div className="watch-details">
                    <div className="watch-item">
                        <h2 className="watch">2.8x</h2>
                        <p className="text">We are ultra faste deal service</p>
                    </div>
                    <div className="watch-item">
                        <h2 className="watch">68%</h2>
                        <p className="text">More deal closed services</p>
                    </div>
                    <div className="watch-item">
                        <h2 className="watch">2.4x</h2>
                        <p className="text">We slove issue ultra faster</p>
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Watch