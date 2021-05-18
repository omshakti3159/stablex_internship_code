import React from 'react'
import './Infobar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const Infobar = () => {
    return (
        <div className="infobar_container">
            <div style={{display:'flex',textAlign:'center'}}>
                <EmailIcon/>
               <a style={{color:'white',textDecoration:'none',margin:'0 20px 0 0'}} href='mailto:abc@abc.com'>ancnkln@klnds.ckm</a>
               <CallIcon/>
               <a style={{color:'white',textDecoration:'none'}}href='callto:65253521552'>+(91) 654515484651</a>
            </div> 
            <div style={{display:'flex',justifyContent:'space-between',width:'32%'}}>
                <AccessTimeIcon/>
                <span style={{marginLeft:'-50px'}}> Mon - Fri: 10:00am - 06.00pm</span>
                <span style={{display:'flex',justifyContent:'space-around',width:'30%'}}>
                    <span><FacebookIcon/></span>
                    <span><InstagramIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><LinkedInIcon/></span>
                </span>
            </div> 
        </div>
    )
}

export default Infobar
