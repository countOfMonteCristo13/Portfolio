import React from 'react'
import './skills.css'
import skills from '../../constants/skills'
import Skill from '../../components/Skill/Skill'

const Skills = () => {
  return (
    <div className='p__skills'>
        <div className='p__skills_section'>
        <div className='p__skills_section-title'>
            <h2>Skills</h2>
        </div>
        <div className='p__skills_section-cards'>
        {
            skills.map(skill => (
                <Skill img={skill.img} id={skill.id} key={skill.id}/>
            ))
        }
        </div>
        </div>

        <div className='p__skills_line'>
            <div/>
        </div>
    </div>
  )
}

export default Skills
