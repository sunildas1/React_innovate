import React from 'react'
import './distribution.css'

const Distribution = () => {
  return (
    <section id="distribution">
        <div className="container">
            <div className="heading-part">
                 <div className="heading-text">
                    <a className="distribution" href="#">Artificial Intelligence</a>
                 </div>
                 <div className="heading-text">
                    <a className="distribution" href="#">Header Builder</a>
                 </div>
                 <div className="heading-text">
                    <a className="distribution" href="#">Safe and Private</a>
                 </div>
                 <div className="heading-text">
                    <a className="distribution" href="#">Safe and Private</a>
                 </div>
            </div>
            <div className="distribution-details">
                <div className="distribution-img">
                    <img src="images/distribution.png" alt="Image Not Found" />
                </div>
                <div className="distribution-text">
                    <h4>No more messy distribution lists.</h4>
                    <p className="text">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.</p>
                    <button type="submit" className="common-btn">Get started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Distribution