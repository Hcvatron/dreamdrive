import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Your Journey,<br />Your Car,<br />Your Way</h1>
        <p>
          Experience the ultimate freedom of choice with GoCar – tailor your
          adventure by choosing from our premium fleet of vehicles.
        </p>
        <button className="btn-started">Get Started</button>
        <div className="hero-socials">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
</div>

      </div>

      <div className="hero-center">
        <img src="https://res.cloudinary.com/dcrfks1tq/image/upload/v1744881450/istockphoto-184127993-612x612-removebg-preview_caadfj.png" alt="Red Car" className="hero-car" />
        <div className="hero-badge">
          <span>50+</span>
          <small>Car Types Available</small>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-top">
          <div className="hero-users">
          <img src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 1" />
          <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 2" />
          <img src="https://images.unsplash.com/photo-1577760960310-c49bbb09161e?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User 3" />
          </div>
          <p><strong>12.5K+ PEOPLE</strong></p>
          <p>have used our services such as renting, buying, or even selling their car.</p>    
        </div>
        <div className="hero-right-bot">
       
        <div className="hero-actions">
          <button>Rent</button>
          <button>Buy</button>
          <button>Sell</button>
          <button>Consult</button>
        </div>
        <a href="#" className="learn-more">Learn more →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
