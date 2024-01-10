import React, { useState, useEffect } from 'react'
import Agboost from '../../assets/Agboost.png'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import './Experiance.css'
import styled from '@emotion/styled';
import Popup from 'reactjs-popup';

function ExperianceTwo() {
  const [open, setOpen] = useState();

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className="modelItem">
      <div className="image" style={{ backgroundImage: `url(${Agboost})`, width: '1200px', height: '300px' }}> </div>
      <div className="content">
      <h3>Front-End Developer</h3>
        <p>Skills Gained</p>
        <HtmlIcon/>
        <CssIcon/>
        <p>React</p>
        <p>Mongo DB</p>
        <p>Node</p>

        <Popup
          trigger={open => (
            <button className="button">{open ? 'Show Less' : 'Show More'}</button>
          )}
          position="left center"
          closeOnDocumentClick
        >
          {close => (
            <div>
              <CardWrapper>
                <h4>Position: Intern</h4>
                <h4>Role: Full-Stack Developer</h4><hr />
                I was working in a project where I my role is to Integrate Backend with Front-end<hr />
                <h4>Components & Libraries used</h4>
                <li>Java script</li><li>Mongo DB</li><li>Node.js</li><li>NPM</li>
                <button className="close" onClick={close}>Close</button>
              </CardWrapper>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default ExperianceTwo

const CardWrapper = styled.div`
  background-color:white;
  color:black;
  overflow: hidden;
  align-items:center;
  text-align: justify;
  justify-content:center;
  padding: 5px 10px 32px;
  margin: 48px auto 0;
  width: 400px;
  height:600px
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
  `;