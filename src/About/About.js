import React from 'react'
import './About.css'
import pc from '../About/profilepic-modified.png'
import { Link } from 'react-scroll'


const About = () => {

  return (
    <>
      <section id="about">
      
        <p className='HeadP'>About Me.</p>

        <div className="main-box">
          <div className="curve">
            <img src={pc} alt="Profile" className='Pic'></img>
            <p className='Edit'>Harish Carpenter</p>
            <p className='Edit'>Cyber Security</p>
            <p className='Edit'>Mandsaur</p>
            <p className='Edit'>Madhya Pradesh</p>
            <button className='button AboutContact'><Link to="footer" spy={true} smooth={true} offset={-100} duration={2000} >Follow me</Link></button>
          </div>

          <div className="text-area">
            <p>Harish is a student who is pursuing an Integrated Mtech degree. He enjoys creating innovative websites and exploring new technologies. He is sharpening both his technical and non-technical skills. He aspires to be recognised for his problem-solving and ethical hacking abilities. He strives to be at the top of every competition and works tirelessly to achieve this goal. He appreciates drawing and other forms of art. He enjoys playing with colours, pencils, brushes, and other art supplies whenever he has the chance. He loves sketching and painting.</p>

            <p className='UniCllg'><i className="fa-solid fa-graduation-cap"></i> University <br></br> <i className="fa-solid fa-building-columns"></i> Vellore Institute of Technology Bhopal <br></br> <i className='bx bx-globe'></i> India, Madhya Pradesh</p>
            
            <button className='button AboutBtn'><Link to="projects" spy={true} smooth={true} offset={-100} duration={2000} >My Projects</Link></button>
          </div>
        </div>

      </section>
    </>
  )
}

export default About