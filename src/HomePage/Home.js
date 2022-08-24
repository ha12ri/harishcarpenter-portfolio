import React from 'react'
import './Home.css'
import Typed from "react-typed";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <>
            <div id="home">
                <div className="container">
                    <div className="first"></div>
                    <div className="Second"></div>

                    <div className="inside-box">
                        <div className="text-writting">
                            <h1>Hello.</h1>

                            <h4><Typed
                                strings={["I AM HARISH CARPENTER. ", " WEB DEVELOPER. ", "CYBER SECURITY ENTHUSIAST. "]}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            /></h4>

                            <p className='IntroPara'>I enjoy playing with hacking tools and protecting confidential information. I enjoy designing appealing and useful websites. My interests include drawing, painting, and reading.</p>

                            <button className='button btn1'><Link to="footer" spy={true} smooth={true} offset={-100} duration={2000}>Contact me now.</Link></button>
                            <button className='button btn2'><Link to="footer" spy={true} smooth={true} offset={-100} duration={2000}>Know More About Me.</Link></button>

                        </div>
                    </div>
                </div>
                <div className="links-icons">
                    <ul className='SocialLinks' >
                        <li><a href={"https://github.com/ha12ri"} target="_blabk" rel="noopener noopener"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href={"https://www.linkedin.com/in/harish-carpenter-134163214/"} target="_blabk" rel="noopener noopener"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href={"https://www.instagram.com/_harish_vishwakarma/?hl=en"} target="_blabk" rel="noopener noopener"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href={"https://www.hackerrank.com/harish_carpente1"} target="_blabk" rel="noopener noopener"><i className="fa-brands fa-hackerrank"></i></a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Home