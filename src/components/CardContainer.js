import React from 'react'
import Card from './Card'
const CardContainer = () => {
    return (
        <div style={{width:'100vw',display:'flex',padding:'25px 0',justifyContent:'center', flexWrap:'wrap'}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default CardContainer
