import React from 'react'
import './projectsidepage.css'
import images from '../../constants/images'
import projects from '../../projects'

import { Link , useLocation, useNavigate} from 'react-router-dom'

const ProjectSidePage = ({i}) => {

  const location = useLocation();
  const navigate = useNavigate();





  return (
    <div className='p__sidepage'>
      <div className='p__sidepage_project'>
        <img src={projects[i].img} alt={projects[i].title} />
      </div>
      <div className='p__sidepage_project-info'>
        <Link to={location.state?.from || '/'}>
            <div onClick={() => navigate(-1)}  className='p__sidepage-goback flex__center'>
                <img src={images.arrowBack1} alt="go back" />
            </div>
        </Link>
        <div className='p__sidepage_project-info_programs'>
            <p>{projects[i].specification}</p>
        </div>
        <div className='p__sidepage_project-info_title'>
            <h2>{projects[i].title}</h2>
        </div>
        <div className='p__sidepage_project-info_description'>
            <p>{projects[i].description}</p>
        </div>
        {
          i !== 3 &&
          <div className='p__sidepage_project-info_button flex__center'>
            <a target='_blank'rel="noreferrer" href={projects[i].link}><button >Visit</button></a>
          </div>
        }
        <div className='p__sidepage_project-info_line'>
            <div/>
        </div>
      </div>
    </div>
  )
}

export default ProjectSidePage
