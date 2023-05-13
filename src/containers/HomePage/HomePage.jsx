import React from 'react'

import Header from '../Header/Header'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

const HomePage = ({onProjectChange}) => {
  return (
    <div>
        <Header/>
        <About/>
        <Skills/>
        <Work onProjectChange={onProjectChange}/>
        <Contact/>
    </div>
  )
}

export default HomePage
