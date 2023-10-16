import React from 'react'
import './skill.css'

const Skill = ({img,id}) => {
  return (
    <div className='skill-card flex__center'>
        <h3>{id}</h3>
        <img src={img} alt={`${id} logo`} />
    </div>
  )
}

export default Skill
