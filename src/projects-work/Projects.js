import React from 'react'
import './projects.css'
import wip from './project-images/work-in-progress.png'
import weather from './project-images/clouds.jpg'
import todo from './project-images/todo.jpg'


const procard = [
    {
        id: 301,
        ptitle: 'Weather Application',
        psubt: 'React web Application',
        pmimg: weather,
        pdesc: 'People can utilize this app to determine the amount of information for a specific area. With the help of an API, this app provides us with basic information about weather conditions such as rain, wind speed, morning and evening time, and temperature for a particular location. During the development process.',
    },
    {
        id: 302,
        ptitle: 'Todo List App',
        psubt: 'React web Application',
        pmimg: todo,
        pdesc: 'This Todo list app assists us in task management. You can add tasks, delete tasks, and edit tasks. This app has access to local storage. While developing this app, I learned about UseState, UseEffect, props, local storage, and the map function.',
    },

]




const Projects = () => {
    return (
        <>
            <section id="projects">

                <div className="img-pro-head">
                    <p><img className='Pro_Image' src={wip} alt='Project' /></p>
                    <p className="pro-sec">Project-Works</p>
                </div>

                <div className="container-projects">

                    {
                        procard.map((card) => {

                            return (

                                <div className="card-project" key={card.id} data-aos="zoom-out-up">

                                    <div className="pro-title">{card.ptitle}</div>
                                    <div className="pro-Subtitle">{card.psubt}</div>

                                    <div className="middle-sec" style={{ backgroundImage: `url(${card.pmimg})` }}></div>

                                    <div className="para-desc">
                                        <p>{card.pdesc}</p>
                                    </div>

                                    <div className="github-rapo"><button id='Git-Repo'><a href='https://github.com/ha12ri' target={'_blank'}rel=" noreferrer nooppener">Github Repository</a></button></div>
                                </div>
                            )
                        })
                    }


                </div>

            </section>
        </>
    )
}

export default Projects