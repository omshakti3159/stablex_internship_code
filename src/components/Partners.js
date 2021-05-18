import React from 'react'
import PartnerCard from './PartnerCard'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, { Autoplay  } from 'swiper/core';

SwiperCore.use([Autoplay])

const style={
    height:'300px',
    width:'100vw',
    background:'rgb(21, 21, 119)',
    padding:'10px 0'
}
    
const Partners = () => {
        return (
        <div style={style}>
            <h1 style={{color:'white',textAlign:'center',fontSize:'2.5rem'}}>Partner & Associates</h1>
            <div style={{ display:'flex', justifyContent:'center',alignItems:'center',height:'150px', width:'100%',padding:'20px 0',margin:'auto'}}>
                <Swiper slidesPerView={(window.innerWidth<669)?1:4} loop={true} freeMode={true} autoplay={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                >
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                    <SwiperSlide><PartnerCard/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Partners
