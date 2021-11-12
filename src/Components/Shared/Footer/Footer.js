import React from 'react';
import './Footer.css';
import payment from '../../../resource/pay-option.webp';

const Footer = () => {
    return (
       <div>
            <div  className="footer-area">
            <div className="container footer-container">
                <div className="show-room">
                    <h2 className="footer-common">Our Showroom</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Osmangoni Road, 94/4, Dhaka-1216 Bangladesh</p>
                    <p><i className="fas fa-phone-alt"></i> (+880) 175 0125 444</p>
                    <p><i className="fas fa-envelope"></i> dwellingcars@support.com</p>
                    <p><i className="fas fa-calendar-week"></i> Open : Sat - Thu (9am - 9pm)</p>

                </div>
                <div className="advisor">
                    <h2 className="footer-common">Need Suggestions ? </h2>
                    <ul>
                        <li><i className="fas fa-circle"></i> Appointment Manager (Sakib Hasan)</li>
                        <li><i className="fas fa-circle"></i> Excuting officer (Sekh Ibnun)</li>
                        <li><i className="fas fa-circle"></i> Excuting Manager (Shamima Akter)</li>
                        <li><i className="fas fa-circle"></i> Cheif operating officer (Samiul Islam)</li>
                    </ul>
                </div>
                <div className="delivery">
                        <h2 className="footer-common">Delivery Info</h2>
                        <a href="home">Privacy Policy</a>
                        <a href="home">Terms &#38; Condition</a>
                        <a href="home">Delivery Information</a>
                        <a href="home">Contact Us</a>
                        <a href="home">Shipment</a>
                </div>
            </div>
        </div>
        <div className="copy-right">
            <div className="copy-container">
            <p className="margin-bottom">Copyright © reserved dwellingcar@owner.com</p>
                <div className="margin-bottom social-icon-footer" style={{borderBottom:"none"}}>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://dribbble.com"><i className="fab fa-dribbble"></i></a>
            </div>
            <img className="margin-bottom" src={payment} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Footer;