import React from 'react'
import './Footer.css'
import Logo from './logo.png'
import CallIcon from '@material-ui/icons/Call';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div className="container">
            <div className='sub_container'>
                <div className="about">
                    <img src={Logo} height="45px" alt='logo'/><br/>
                    <span>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</span>
                    <br/>
                    <button>APPLY NOW</button>
                </div>
                <div className="info">
                    <p>Info</p>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <p>Contact </p>
                    <ul>
                        <li><LocationOnIcon/><span>264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</span></li>
                        <li><CallIcon/><a href='callto:5465544545'>5465544545</a></li>
                        
                        <li><EmailIcon/><a href='mailto:abc@abc.com'>abc@abc.com</a></li>
                        <li><AccessTimeIcon/><span>10:00AM - 06:00PM</span></li>
                    </ul>
                </div>
            </div>
            <div className='hr'></div>
            <div className="footer_links">
                <div className="footer_copyright">
                    <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.<br/>
                    <a href='#'>Privacy Policy</a> | <a href='#'>Terms of Service </a>| * Registration Charges Applied</p>
                </div>
                <div className='social_links    '>
                    <span><FacebookIcon /></span>
                    <span><InstagramIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><LinkedInIcon/></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
