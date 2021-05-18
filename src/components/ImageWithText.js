import React from 'react'
import Img1 from './img1.jpg'
import './Imagewithtext.css'
const ImageWithText = () => {
    return (
        <div className="img_txt_container">
            <div className="img_container">
                <img src={Img1} alt="coderImage"/>
            </div>
            <div className="text_container">
                <p>HICODER</p>
                <p>We help students learn</p>
                <p>Full Stack Development.</p>
                <p>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
            </div>
        </div>
    )
}

export default ImageWithText
