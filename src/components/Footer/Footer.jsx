import React from 'react'
import "./Footer.css"
import footer_logo from "../../Assets/images/Mainkitchen logo.png"
import instagram_icon from "../../Assets/images/insta.jpeg"
import pintester_icon from "../../Assets/images/goo.png"
import wattsapp_icon from "../../Assets/images/watts.png"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>MOMS KITCHEN</p>
            </div>
            <ul className="footer-links">
                <li>HOME</li>
                <li>ITEMS</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                
            </ul>
            <section class="footer text-center" id="contact Us">
      <div class="container">
          <form>
          <input type="text" placeholder="Enter Your Email.."required/>
              <button type="submit">Send</button>
          </form>
        </div>
    </section>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={wattsapp_icon} alt="" />
                </div>
            </div>
               <hr />
        </div>
    )
}

export default Footer