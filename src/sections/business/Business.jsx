import React from 'react'
import './business.css'

const Business = () => {
  return (
    <section id="business">
        <div className="shap"></div>
        <div className="container">
            <div className="business-details">
                <div className="business-img">
                    <img src="images/business-img.png" alt="Image Not Found" />
                </div>
                <div className="business-text">
                    <h4>Join with any business tasks and any goals</h4>
                    <p className="text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                    <button type="submit" className="common-btn">Sing Up</button>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Business