import React from 'react'
import './ProjectsStyle.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';

const ProjectItem = ({data,cardIndex}) => {
  return (
    <div >
    {data[cardIndex].map(item =>(
        <div className="modelItem" >
        <div className='modelItemImg' style={{ backgroundImage: `url(${item.image})` }}> </div>
        <div className="content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
           <div className='links'>
            <a href={item.link1} target="_blank">Demo <LiveTvIcon fontSize='small'/></a>
          </div>
        </div>
        </div>
      ))}
    </div>   
  );
};
export default ProjectItem;
