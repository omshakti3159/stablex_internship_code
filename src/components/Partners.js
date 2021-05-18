import React from 'react'
import PartnerCard from './PartnerCard'
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
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',height:'150px', width:'80%',padding:'20px 0',margin:'auto'}}>
                <PartnerCard/>
                <PartnerCard/>
                <PartnerCard/>
            </div>
        </div>
    )
}

export default Partners
