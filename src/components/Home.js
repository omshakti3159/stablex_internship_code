import React, { useState } from 'react'
import CardContainer from './CardContainer'
import Footer from './Footer'
import HomePreview from './HomePreview'
import ImageWithText from './ImageWithText'
import ImageWithText2 from './ImageWithText2'
import ImageWithText3 from './ImageWithText3'
import Infobar from './Infobar'
import Navbar from './Navbar'
import Partners from './Partners'

const Home = () => {
    return (
        <React.Fragment>
                <Infobar/>
                <Navbar/>
                <HomePreview/>
                <ImageWithText/>
                <ImageWithText2/>
                <ImageWithText3/>
                <CardContainer/> 
                <Partners/>
                <Footer/>
        </React.Fragment>
    )
}

export default Home
