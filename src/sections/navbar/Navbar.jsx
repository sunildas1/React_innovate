import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav-item">
                <div className="logo">
                    <picture>
                        <a href="#"><img src="images/Logo.png" alt="Image Not Found" /></a>
                    </picture>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">Home <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                        <li>
                            <a href="#">About <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                        <li>
                            <a href="#">Service <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                        <li>
                            <a href="#">Porfolio <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                        <li>
                            <a href="#">Price <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                        <li>
                            <a href="#">Blog <i className="fa-solid fa-angle-down"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <button type="submit" className="common-btn">Contact Us</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar