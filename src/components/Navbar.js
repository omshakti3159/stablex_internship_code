import React from 'react'
import Logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav_container'>
                <img src={Logo} height="50px" alt="brand name"/>
                <div className='navlinks'>
                    <ul style={{ listStyleType: 'none'}}>
                        <li><a href='#'>hicoder +</a></li>
                        <li><a href='#'>course +</a></li>
                        <li><a href='#'>hire +</a></li>
                    </ul>
                    <button>apply now</button>
                    <span className="menu_container">
                        <span className='menu_first_container'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </span>
                        <span className='menu_second_container'>
                            <span className='dot'></span>
                            <span className='dot'> </span>
                            <span className='dot'></span>
                        </span>
                        <span className='menu_third_container'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
