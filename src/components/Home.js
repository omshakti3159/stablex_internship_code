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
import Animation from './Animation'

const Home = () => {
    const [loding,setloding]=useState(true)
    setTimeout(()=>{setloding(false)},3000)
    const load=()=>{
        if(loding){
            return (<Animation/>)
        }
        else{
            return(
                <div>
                    <Infobar/>
                    <Navbar/>
                    <HomePreview/>
                    <ImageWithText/>
                    <ImageWithText2/>
                    <ImageWithText3/>
                    <CardContainer/> 
                    <Partners/>
                    <Footer/>
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            {load}
        </React.Fragment>
    )
}

export default Home
