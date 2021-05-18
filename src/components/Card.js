import React from 'react'
import Icon from './icon.png'

const style={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    jutifyContent:'center',
    width:'300px',
    height:'350px',
    padding:'55px',
    margin:'10px',
    backgroundColor:'rgb(235, 235, 235)',
    boxShadow: '0 0 15px rgb(235, 235, 235)',
    boxSizing:'border-box'
}
const Card = () => {
    return (
        <div style={style}>
            <img src={Icon} width='70px' alt='logo img'/>
            <p>Front End</p>
            <p style={{textAlign:'center'}}>Students learn to design, develope the UI following UX with industry standards.</p>
        </div>
    )
}

export default Card
