import React from 'react'
import './plan.css'

const Plan = () => {
  return (
    <section id="plan">
        <div className="container">
            <div className="plan-heading">
                <h3>Build the right plan for your team.</h3>
                <h5 className="plan-text">Month <i className="fa-solid fa-toggle-off"></i> Yearly</h5>
            </div>
            <div className="plan-box-wrapper">
                <div className="plan-box">
                    <h2 className="plan-text">Intro</h2>
                    <ul>
                        <li>Hosting Space <span>300GB</span></li>
                        <li>Emails <span>Not Avai.</span></li>
                        <li>Pricing Feature <span>Unlimited</span></li>
                        <li>Bonus Plugins <span>Not Avai.</span></li>
                        <li>Exclusive Support <span>Not Avai.</span></li>
                    </ul>
                    <button type="submit" className="common-btn">Get started</button>
                </div>
                <div className="plan-box">
                    <h2 className="plan-text">Pro</h2>
                    <ul>
                        <li>Hosting Space <span>700GB</span></li>
                        <li>Emails <span>Unlimited</span></li>
                        <li>Pricing Feature <span>Available</span></li>
                        <li>Bonus Plugins <span>Included</span></li>
                        <li>Exclusive Support <span>Yesß</span></li>
                    </ul>
                    <button type="submit" className="common-btn">Get started</button>
                </div>
                <div className="plan-box">
                    <h2 className="plan-text">Exclusive</h2>
                    <ul>
                        <li>Hosting Space <span>900GB</span></li>
                        <li>Emails <span>Unlimited</span></li>
                        <li>Pricing Feature <span>Available</span></li>
                        <li>Bonus Plugins <span>Available</span></li>
                        <li>Exclusive Support <span>Available</span></li>
                    </ul>
                    <button type="submit" className="common-btn">Get started</button>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Plan