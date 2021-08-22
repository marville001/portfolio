import React from 'react'
import me from '../img/me-full.jpg'

const Home = () => {
  return (
    <div>
      <div className="home-hero">
        <div className="details">
          <h1>Hi, am <span>Martin Mwangi</span></h1>
          <h5>A full stack web developer</h5>
          <p>Am a fullstack javascript developer with a degree in computer science. I graduated at Dedan Kimathi University of Technology with a 1st Class honor.</p>
          <div className="social-icons">
            
          </div>
          <div className="languages">
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
            <div className="language">NodeJs</div>
          </div>
        </div>
        <div className="image">
          <img src={me} alt="Martin Mwangi" />
        </div>
      </div>
    </div>
  )
}

export default Home
