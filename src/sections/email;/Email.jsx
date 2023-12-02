import React from 'react'
import './email.css'

const Email = () => {
  return (
    <section id="email">
        <div className="container">
            <div className="email-heading">
                <h2>Ready to get started? Start your free trial.</h2>
                <h5>Free 30 days trial<span>|</span>Exclusive Support<span>|</span> No Fees</h5>
            </div>
            <div className="email-send">
                <form action="" method="">
                    <input type="text" placeholder="Enter your email"/>
                </form>
                <button type="submit" className="common-btn">Try for free</button>
            </div>
        </div>
    </section>
  )
}

export default Email