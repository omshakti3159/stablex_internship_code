import React from 'react'
import Img from './loding.gif'
const Animation = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
            <img src={Img} width='70px' height='70px' alt="loding...."/>
        </div>
    )
}

export default Animation
