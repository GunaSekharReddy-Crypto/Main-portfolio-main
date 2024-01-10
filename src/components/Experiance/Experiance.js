import React, { useState } from 'react'
import ExperianceOne from './ExperianceOne';
import ExperianceTwo from './ExperianceTwo';
import './Experiance.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Experiance() {
    const [expOne, setExpOne] = useState();
    const handleClickOne = () => {
        setExpOne(!expOne)
    }
    const [expTwo, setExpTwo] = useState();
    const handleClickTwo = () => {
        setExpTwo(!expTwo)
    }

    return (
        <>
            <div id='experiance' className='exp-wrapper'>
                <h1>Experience</h1>
                <div className='Expericance'>
                    <div className='exp1'>
                        <h3>Nokia</h3>                    
                        <div className='exp-details'>
                        <p style={{color:'gray'}}>September/23 - Present</p>
                        <button onClick={handleClickOne} >{expOne ? <ExpandLessIcon style={{cursor:'pointer'}}/> : <ExpandMoreIcon style={{cursor:'pointer'}}/>}</button><hr/>
                        
                        </div>
                        <p className='expand'>{expOne && <ExperianceOne />}</p><hr/>
                    </div>
                    <div className='exp2'>
                        <h3>Agboost Consultancy</h3>
                        <div className='exp-details'>
                        <p style={{color:'gray'}}>May/21 to January/22</p>
                        <button onClick={handleClickTwo}>{expTwo ? <ExpandLessIcon style={{cursor:'pointer'}}/> : <ExpandMoreIcon style={{cursor:'pointer'}}/>}</button><hr/>
                        </div>
                        <p className='expand'>{expTwo && <ExperianceTwo />}</p><hr/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiance;