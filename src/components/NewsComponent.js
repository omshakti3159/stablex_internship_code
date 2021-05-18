import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import SwiperCore, { Autoplay  } from 'swiper/core';
import NewsCard from './NewsCard'
import './NewsSection.css'

SwiperCore.use([Autoplay])

const NewsComponent = () => {
    return (
        <div className='news_container'>
            <p>News</p>
            <h1>#COVID19 Demands more full stack developers.<br/><span>& Industry Updates</span></h1>
            <Swiper slidesPerView={(window.innerWidth<669)?1:3} loop={true} freeMode={true} autoplay={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}>
                <SwiperSlide><NewsCard/></SwiperSlide>
                <SwiperSlide><NewsCard/></SwiperSlide>
                <SwiperSlide><NewsCard/></SwiperSlide>
                <SwiperSlide><NewsCard/></SwiperSlide>
                <SwiperSlide><NewsCard/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NewsComponent
