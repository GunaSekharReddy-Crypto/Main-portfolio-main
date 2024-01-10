import React, { useState } from 'react'
import ProjectItem from './ProjectItem';
import ProjectsData from './ProjectsData';
import './ProjectsStyle.css'
export const Projects = () => {
  const [active, setActive] = useState("FirstProject");

  return (
    <>
    <div className='proj'>
      <div className='projects-header' id="projects">
        <h5>My Work</h5>
        <h2>Projects</h2>
        <p className='para'>These Projects are my hands-on work that I did when learning Web Technologies to know the capability
          of my learning. These are done out of own interst any of these projects are not from curriculam.
        </p>
      </div>
      <div className="projects-navbar" >
        <ul id="Nav_menu">
          <li>
            <button onClick={() => setActive("FirstProject")} className="Nav_link">Project1</button>
            <button onClick={() => setActive("SecondProject")} className="Nav_link">Project2</button>
            <button onClick={() => setActive("ThirdProject")} className="Nav_link">Project3</button>
            <button onClick={() => setActive("ForthProject")} className="Nav_link">Project4</button>
          </li>
          {active === "FirstProject" && <ProjectItem data={ProjectsData} cardIndex={0} />}
          {active === "SecondProject" && <ProjectItem data={ProjectsData} cardIndex={1} />}
          {active === "ThirdProject" && <ProjectItem data={ProjectsData} cardIndex={2} />}
          {active === "ForthProject" && <ProjectItem data={ProjectsData} cardIndex={3} />}
        </ul>
      </div>
      </div>

    </>
  )
}
