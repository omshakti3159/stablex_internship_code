import React, { useState } from 'react'
import CardContainer from './CardContainer'
import Footer from './Footer'
import HomePreview from './HomePreview'
import ImageWithText from './ImageWithText'
import ImageWithText2 from './ImageWithText2'
import ImageWithText3 from './ImageWithText3'
import Infobar from './Infobar'
import Navbar from './Navbar'
import NewsComponent from './NewsComponent'
import Partners from './Partners'
import Animation from './Animation'
import {motion} from 'framer-motion'
const Home = () => {
    const [load,setload]=useState(true)
    setTimeout(()=>setload(false),2000)

    return (
        <div>
            {
                load?<Animation/>:(<motion.div
                    initial={{opacity:'0'}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                >
                <Infobar/>
                <Navbar/>
                <HomePreview/>
                <ImageWithText/>
                <ImageWithText2/>
                <ImageWithText3/>
                <CardContainer/> 
                <Partners/>
                <NewsComponent/>
                <Footer/></motion.div>)
            }
        </div>
    )
}

export default Home
