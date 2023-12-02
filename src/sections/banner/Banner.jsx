import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner-details">
                <div className="banner-item">
                    <h1>Professional task manager tool to grow </h1>
                    <p className="text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                    <form action="" method="">
                        <input type="text" placeholder="Join with us using your gmail address"/>
                        <button type="submit" className="common-btn">Sing Up</button>
                    </form>
                </div>
                <div className="banner-img">
                    <img src="images/banner-img.png" alt="Image Not Found" />
                </div>
            </div>
        </div>
     </section>
  )
}

export default Banner
