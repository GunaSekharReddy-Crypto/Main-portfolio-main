import React from 'react'
import NokiaLogo from '../../assets/NokiaLogo.webp'
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import './Experiance.css'
import styled from '@emotion/styled';
import Popup from 'reactjs-popup';

function ExperianceOne() {
  // const [open, setOpen] = useState();

  // const handleClick = () => {
  //   setOpen(!open);
  // }

  return (
    <div className="modelItem">
      <div className="image" style={{ backgroundImage: `url(${NokiaLogo})`, width: '1200px', height: '300px' }}> </div>
      <div className="content">
        <h3>Full Stack Developer</h3>
        <p>Skills Gained</p>
        <GitHubIcon />
        <JavascriptIcon />
        <p>React</p>
        <p>Java</p>
        <p>Docker</p>
        <p>Kubernates</p>

        <Popup
          trigger={open => (
            <button className="button">{open ? 'Show Less' : 'Show More'}</button>
          )}
          position="left center"
          closeOnDocumentClick
        >
          {close => (
            <div className='card-wrapper'>
              <CardWrapper>
                {/* <h4>Position: Student Trainee</h4> */}
                <h4>Role: Full Stack Developer</h4><hr />
                I was working in a project where I my task is to develop User Interface using React.js and also supported backend(API's) using Java and Postman <hr />
                <div className='comp'>
                <h4>Components & Libraries used</h4>
                <li>React.js</li><li>Styled Components(for styling)</li><li>HighChart.js</li><li>NPM</li><li>AG-grid</li><li>Postman</li>
                <button className="close" onClick={close}>Close</button>
                </div>
              </CardWrapper>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default ExperianceOne

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