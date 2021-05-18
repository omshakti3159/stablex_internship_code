import React from 'react'
import './Imagewithtext.css'
import Img2 from './img2.jpg'
const ImageWithText2 = () => {
    return (
        <div className="img_txt_container">
            <div className="text_container">
                <p></p>
                <p>Trained on the most in-</p>
                <p style={{color:'black'}}>demand Technology Skills</p>
                <p>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>
                <ul>
                    <li>End to End Project Analysis, Design & Development</li>
                    <li>Authentication, Geo Tracking, Payment Gateway</li>
                    <li>Analytics, SEO, Data Representation, Industry Standards</li>
                    <li>Max Pro Resume, Soft Skills, Client Expectation Management</li>
                </ul>            
            </div>
            <div className="img_container">
                <img src={Img2} alt="coderImage"/>
            </div>
        <button>APPLY NOW</button>
        </div>
    )
}

export default ImageWithText2
