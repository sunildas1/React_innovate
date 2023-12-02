import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-details">
                    <div className="logo">
                        <picture>
                            <img src="images/Logo.png" alt="Image Not Found" />
                        </picture>
                    </div>
                    <p className="text">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    
                </div>
                <div className="footer-support">
                    <div className="footer-contact">
                        <h4>Features</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Benifit</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Products</h4>
                        <ul>
                            <li>Task Management</li>
                            <li>Company growth</li>
                            <li>Time tracking</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Support</h4>
                        <ul>
                            <li>Customer service</li>
                            <li>Accessibility</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <div className="copy-right">
                    <h5>@20201 Innovate.All rights reserved.</h5>
                </div>
                <div className="privacy">
                    <h5>Privacy policy</h5>
                    <h5>Terms & condition</h5>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer