import React from 'react'
import './skills.css'
import images from '../../constants/images'

const Skills = () => {
  return (
    <div className='p__skills'>
        <div className='p__skills_section'>
        <div className='p__skills_section-title'>
            <h2>Skills</h2>
        </div>
        <div className='p__skills_section-cards'>
            <div className='p__skills_section-cards_card'>
                <h3>HTML</h3>
                <img src={images.html} alt="html logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>CSS</h3>
                <img src={images.css} alt="css logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>JavaScript</h3>
                <img src={images.js} alt="js logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>Bootstrap</h3>
                <img src={images.bootstrap} alt="bootstrap logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>React</h3>
                <img src={images.react} alt="react logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>NodeJS</h3>
                <img src={images.nodeJS} alt="nodeJS logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>Java</h3>
                <img src={images.java} alt="java logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>PostgreSQL</h3>
                <img src={images.postgreSQL} alt="postgreSQL logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>Git</h3>
                <img src={images.git} alt="git logo" />
            </div>
            <div className='p__skills_section-cards_card'>
                <h3>Figma</h3>
                <img src={images.figma} alt="figma logo" />
            </div>
        </div>
        </div>

        <div className='p__skills_line'>
            <div/>
        </div>
    </div>
  )
}

export default Skills
