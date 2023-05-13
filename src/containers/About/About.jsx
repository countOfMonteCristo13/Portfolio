import React, { useEffect } from 'react'
import './about.css'
import AboutCode from '../../components/AboutCode/AboutCode'
import Subheading from '../../components/Subheading/Subheading'


const About = () => {

    useEffect(() =>{
        const terminalWrapper = document.querySelector('.p__about-terminal-wrapper');
        const terminal = document.querySelector('.p__about-terminal');

        const runButton = document.querySelector('.run');
        const closeButton = document.querySelector('.close');
        
        runButton.addEventListener('click',() =>{
            terminalWrapper.classList.remove('hidden');
            terminal.classList.remove('hidden');
            closeButton.classList.remove('hidden');
        })

        closeButton.addEventListener('click',() =>{
            terminalWrapper.classList.add('hidden');
            closeButton.classList.add('hidden');
        })

    })



  return (
    <div className='p__about' id='about'>
        <Subheading title='About'/>
        <div className='p__about_code-section'>
            

            <AboutCode/>
            <div className='p__about_buttons'>
                <button type='button' className='p__about_button run'>Run</button>
                <button type='button' className='p__about_button close hidden'>Close</button>
            </div>

            <div className='p__about-terminal-wrapper flex__center hidden'>
                <div className='p__about-terminal flex__center hidden'>
                    <p className='p__about-terminal-name'>Nikola Buzadžija</p>
                    <p className='p__about-terminal-dateOfBirth'>1995-10-28</p>
                    <p className='p__about-terminal-email'>buzadzija.nikola13@gmail.com</p>
                    <p className='p__about-terminal-workExperience'>
                        <span>{'[ 2014-2023: Air conditioning technician, '}</span>
                        <span>{'2018-2021: Math tutor ]'}</span>
                    </p>
                    <p className='p__about-terminal-education'>
                        <span>{'[ 2021-2022: Faculty of Pedagogy - Master\'s in Education,\t '}</span>
                        <span>{'2017-2021: Faculty of Pedagogy - Bachelor\'s in Education,\t '}</span>
                        <span>{'2014-2016: Faculty of Technical Sciences ]'}</span>
                    </p>
                    <p className='p__about-terminal-time'>Process finished with exit code 0</p>
    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About



