import React from 'react'
import './Foter.css'
import insta from './footicon/instagram.png'
import linkedin from './footicon/linkedin.png'
import github from './footicon/github.png'
import call from './footicon/telephone-call.png'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="footer">

                    <div className="social">
                        <div className="name-logo">Hari<span>sh.</span>Carpenter</div>
                        <Link to="nav" spy={true} smooth={true} offset={-100} duration={2000} className='up-arrow' ><i className="fa-solid fa-circle-arrow-up"></i></Link>
                    </div>


                    <div className="middle-sec-foot">
                        Harish Carpenter <br></br> Madhya Pradesh, India 
                    </div>

                    <div className="social-links">
                        <ul>
                            <li><a href="https://github.com/ha12ri" target={'_blank'} rel="noreferrer noopener" ><img className='slink' src={github} alt="links-social"></img>Github</a></li>
                            <li><a href="https://www.linkedin.com/in/harish-carpenter-134163214/" target={'_blank'} rel="noreferrer noopener" ><img className='slink' src={linkedin} alt="links-social "></img>Linkedin</a></li>
                            <li><a href="https://www.instagram.com/_harish_vishwakarma/?hl=en" target={'_blank'} rel="noreferrer noopener" ><img className='slink' src={insta} alt="links-social"></img>Instagram</a></li>
                            <li><a href="tel:7999365760" target={'_blank'} rel="noreferrer noopener" ><img className='slink' src={call} alt="links-social"></img>7999365760</a></li>
                        </ul>
                    </div>

                    <div className="copy-right">Website Design by @harishcarpenter.</div>

                </div>
            </section>
        </>
    )
}

export default Footer