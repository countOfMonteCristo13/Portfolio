import React from 'react'
import './projectcard.css'
import Tilty from 'react-tilty'

const ProjectCard = ({image,title,alt, onClick}) => {



  return (
    <div className='card' onClick={onClick}>
        <Tilty className='tilt' scale={1.01} speed={200}>
            <div className='p__work_cards-card'>
                    <div className='p__work_cards-card_img'>
                        <img src={image} alt={`projekat ${alt}`} />
                    </div>
                    <div className='p__work_cards-card_info'>
                        <h3>{title}</h3>
                    </div>
            </div>
        </Tilty>
    </div>
  )
}

export default ProjectCard
