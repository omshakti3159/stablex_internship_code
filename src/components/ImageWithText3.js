import React from 'react'
import './Imagewithtext.css'
import Img3 from './img3.jpg'
const ImageWithText3 = () => {
    return (
        <div className="img_txt_container">
            <div className="text_container">
                <p></p>
                <p>Why HiCoder?</p>
                <p style={{color:'black',fontSize:'1.2rem',lineHeight:'1',fontWeight:'400'}}>HiCoder enables students to think about real-world problems, <br/>design, and develop the right solution. <a href='#'>know more</a></p>
                <dl>
                    <dt><h2>Personalized Training</h2></dt>
                    <dd>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</dd>
                    <dt><h2>Production Projects</h2></dt>
                    <dd>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</dd>
                </dl>           
            </div>
            <div className="img_container">
                <img src={Img3} alt="coderImage"/>
            </div>
        </div>
    )
}

export default ImageWithText3
