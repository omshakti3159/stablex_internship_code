import React from 'react'
import Img from './partner.jpg'
const style={
    width:'300px',
    height:'130px',
    background:'white',
    margin:'0 10px'
}
const PartnerCard = () => {
    return (
        <div style={style}>
            <img src={Img} style={{display:'block',objectFit:'cover',width:'100%',height:'100%'}}/>
        </div>
    )
}
export default PartnerCard
