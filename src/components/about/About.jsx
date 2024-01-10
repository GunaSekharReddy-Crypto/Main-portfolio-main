import React from 'react'
import './About.css'
import MyImage from '../../assets/WhatsApp_Image_2023-03-27_at_7.03.39_PM-removebg-preview.png'
import Resume from '../../assets/Resume .pdf';

const About = () => {
  return (
    <section id='about' >
      <h5>Welcome to</h5>
      <h2>Guna's Portfolio</h2>

      <div className='container about__container'>
      <div className='about__me'>
          <div className='about__me-image'>
          <img src={MyImage} />
          </div>
        </div>  
      <div className='about__content'>
          <p className='para'>Hello! My name is Guna sekhar Aspiring Computer Science Student with MTech Integrated Software Engineering Degree graduated from Vellore Institue of Technology 👨🏻‍🎓. 
            currently doing Internship at NOKIA. I am a self-motivated student with refined multi-tasking and problem solving skills. 
            I have strong technical skills as well as excellent interpersonal skills. I am eager to be challenged in order to grow and improve my technical skills.
            I have good commitment towards my work and I always stick to the deadline. 
          </p><br/>
          <a href={Resume} target="_blank" className='resume-btn' >My Resume</a>
        </div>           
      </div>
    </section>
  )
}

export default About