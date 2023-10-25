import './Footer.css';
import { Facebook, Instagram, MailOutline, Phone, RoomOutlined, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="left-container">
            <div className="title">
              Akatsuki
            </div>
            <div className="description">
              React.js eCommerce app UI design full course. React shopping app UI project for beginners. React eCommerce website design from scratch.
            </div>
            <div className="social-container">
              <div className="social-icon">
                 <Facebook />
              </div>
              <div className="social-icon">
                 <Instagram />
              </div>
              <div className="social-icon">
                 <Twitter />
              </div>
            </div>
        </div>

        <div className="center-container">
            <div className="title"> Useful Links</div>
            <ul>
              <li>Home</li>
              <li>Cart</li>
              <li>Man Fashion</li>
              <li>Woman Fashion</li>
              <li>Accessories</li>
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
              <li>Wishlist</li>
              <li>Terms</li>
            </ul>
        </div>

        <div className="right-container">
            <div className="title"> Contact</div>
            <div className="contact-item"> 
                <RoomOutlined />
                <div className="text">9 Rue Fronval Velizy</div>
            </div>
            <div className="contact-item"> 
              <Phone />
              <div className="text">07 82 16 19 60</div>
              
            </div>
            <div className="contact-item"> 
              <MailOutline />
              <div className="text">react@gmail.com</div>
            </div>
        </div>
    </div>
  )
}

export default Footer