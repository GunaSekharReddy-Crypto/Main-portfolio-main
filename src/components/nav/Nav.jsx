import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { Tooltip } from '@mui/material'
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Groups3Icon from '@mui/icons-material/Groups3';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import MailIcon from '@mui/icons-material/Mail';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>

      <nav>
        <div class="main">
          <div class="circle">
          </div>
          <h2 className='logo'>G</h2>
        </div>
        <div className='navicons'>
          <Tooltip placement="bottom" title="ABOUT"><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><Person3OutlinedIcon /> </a></Tooltip>
          <Tooltip placement="bottom" title="EXPERIENCE"><a href='#experiance' onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><Groups3Icon /></a></Tooltip>
          <Tooltip placement="bottom" title="PROJECTS"><a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AssignmentTurnedInTwoToneIcon /></a></Tooltip>
          <Tooltip placement="bottom" title="SKILLS"><a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><PsychologyIcon /> </a></Tooltip>
          <Tooltip placement="bottom" title="CONTACT"><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><ContactEmergencyOutlinedIcon /></a></Tooltip>
        </div>
        <div className='buttons'>
          <a href='#contact' className='draw'>SAYHELLO<MailIcon /></a>
        </div>

      </nav>
    </>
  )
}

export default Nav