import React from 'react'
import './team.css'

const Team = () => {
  return (
    <section id="team">
        <div className="container">
            <h3>Build the right plan for your team.</h3>
            <div className="team-wrapper">
                <div className="team-img">
                    <img src="images/team-img.jpg" alt="Image Not Found" />
                </div>
                <div className="team-details">
                    <p className="text">As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    <h4>Jonathon</h4>
                    <div className="team-icon-wrapper">
                        <div className="team-icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="team-icon">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div className="team-icon">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="team-slider-wrapper">
                        <div className="team-slider">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="team-slider">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="team-box-img-1">
                    <img src="images/team-1.png" alt="Image Not Found" />
                </div>
                <div className="team-box-img-2">
                    <img src="images/team-2.png" alt="Image Not Found" />
                </div>
                <div className="team-box-img-3">
                    <img src="images/team-3.png" alt="Image Not Found" />
                </div>
                <div className="team-box-img-4">
                    <img src="images/team-4.png" alt="Image Not Found" />
                </div>
                <div className="team-box-img-5">
                    <img src="images/team-img-5.png" alt="Image Not Found" />
                </div>
                <div className="team-box-img-6">
                    <img src="images/team-img-6.png" alt="Image Not Found" />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Team