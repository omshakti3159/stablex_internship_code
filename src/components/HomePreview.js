import React from 'react'
const style={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'100vh',
    backgroundImage:'url(https://i.ibb.co/VBwkMpp/bghome.jpg)',
    backgroundSize:'cover',
}
const p={
    fontSize:'3rem',
    fontWeight:'bold',
    padding:0,
    margin:0,
}
const button={
    width:'15rem', 
    fontSize:'18px',
    padding:'15px 0px',
    margin:'40px 0 0 0',
    border:'3px solid blue',

}
const HomePreview = () => {
    return (
        <div>
            <div style={style}>
                <p style={{fontSize:'18px',fontWeight:'bold', padding:0,margin:0}}>YOUR TIME, OUR EFFORTS</p>
                <p style={p}>Learn Production Grade<br/> Full Stack Development</p>
                <button style={button}>Know More</button>
            </div>
            <div style={{height:'120px',background:'blue',fontSize:'20px',paddingLeft:'3rem',color:'white',display:'flex',alignItems:'center'}}>
                <p>NEXT BATCH: 27 May | Apply Now</p>
            </div>
        </div>
    )
}

export default HomePreview
