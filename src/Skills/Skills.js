import React from 'react'
import './Skills.css'
import techimg from './Skills-Icon/Head-Image.png'
import webdev from './Skills-Icon/web-development.png'
import prosol from './Skills-Icon/solved.png'
import program from './Skills-Icon/coding.png'
import tools from './Skills-Icon/github.png'
import framwork from './Skills-Icon/framework.png'
import kali from './Skills-Icon/kali.png'

const SkillArray = [
    {
        id: 200,
        simg: webdev,
        sheadp1: "Web Development",
        sheadp2: "HTML, CSS, JavaScript, PHP, MySql/Oracle, Jquery, SQL",
        sdescp1: "10-15 Projects",
        sdescp2: "Basic, Intermidiate, Advanced level",
    },
    {
        id: 201,
        simg: program,
        sheadp1: "Promming Languages",
        sheadp2: " (OOP) C++, (OOP) Java, basic Python",
        sdescp1: "2-3 basic Projects",
        sdescp2: "Basic, Intermidiate, Advanced level",
    },
    {
        id: 202,
        simg: tools,
        sheadp1: "Tools & OS",
        sheadp2: "Vs Code, Eclipse, Github, Kali Linux, Windows, Virtual box",
        sdescp1: "Think Plan-Platforms Write-Code and Execute",
        sdescp2: "Basic, Intermidiate, Advanced level",
    },
    {
        id: 203,
        simg: framwork,
        sheadp1: "FrameWorks & Libraries",
        sheadp2: "React js, Bootstrap, Swiper js, Java Swing, Nmap, Turtle",
        sdescp1: "4-5 Projects",
        sdescp2: "Basic, Intermidiate, Advanced level",
    },
    {
        id: 204,
        simg: prosol,
        sheadp1: "Problem Solving",
        sheadp2: "Codechef, Hackerrank, Coding Ninjas, LeetCode",
        sdescp1: "Codechef Highest Rating 1634, 39 Contests",
        sdescp2: "300+ problems solved",
    },
    {
        id: 205,
        simg: kali,
        sheadp1: "Kali Linux Tools",
        sheadp2: "Maltego, Nmap, Harvestor, Sqlmap, SE Toolkit, MetaExploit",
        sdescp1: "Exploring More Tools",
        sdescp2: "Basic, Intermidiate, Advanced level",
    }
]


const Skills = () => {
    return (
        <>

            <section id="skills">


                <div className="img-head">
                    <span><img className='Tech_Image' src={techimg} alt='tech' /></span>
                    <span className="head-sec">Skills & Technologies</span>
                </div>


                <div className="container-section">

                    {
                        SkillArray.map((ele) => {
                            return (
                                <div className="skill-card" key={ele.id} >
                                    <div className="image-card">
                                        <img src={ele.simg} alt="skills" className='Card_Image'></img>
                                    </div>
                                    <div className="head-section">
                                        <p className='Edit-Color'>{ele.sheadp1}</p>
                                        <p className='Small-font-set'>{ele.sheadp2}</p>
                                    </div>
                                    <div className="description-skills">
                                        <p>{ele.sdescp1}</p>
                                        <p>{ele.sdescp2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>

        </>
    )
}

export default Skills