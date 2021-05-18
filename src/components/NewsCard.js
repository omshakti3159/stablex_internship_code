import React from 'react'
import './NewsSection.css'
import Img from './newsimg.jpg'
import Logo from './logo.png'
const NewsCard = () => {
    return (
        <div className="news_card_container">
            <div style={{height:'40%'}}><img src={Img} width='100%' height='100%'/></div>
            <div style={{height:'60%',padding:'5px 25px '}}>
                <h2>College education isn't enough to be relevant for the tech Industry.</h2>
                <div style={{display:'flex',justifyContent:'space-around',alignItems:"center"}}>
                    <img src={Logo} width='90px' height='50px'/>
                    <span>14 Oct 2020</span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
