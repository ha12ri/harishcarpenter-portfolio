import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <div id="nav">

                <span className='Main-text' > Harish. Carpenter </span>
                <ul>
                    <li><Link to="home" spy={true} smooth={true} offset={-100} duration={2000} className='Link' >Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-100} duration={2000} className='Link' >About</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={2000} className='Link' >Skills</Link></li>
                    <li><Link to="projects" spy={true} smooth={true} offset={-100} duration={2000} className='Link' >Projects</Link></li>
                    <li><Link to="footer" spy={true} smooth={true} offset={-150} duration={2000} className='Link' >Contact</Link></li>
                </ul>


            </div>
        </>
    )
}

export default Navbar