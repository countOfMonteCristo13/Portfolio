import React, {useState, useEffect} from 'react'
import './header.css'
import Navbar from '../../components/Navbar/Navbar'
import Start from '../Start/Start'

import images from '../../constants/images'


const Header = () => {

  const [buttonUp, setButtonUp] = useState(false);

  useEffect(() => {

    const body = document.querySelector('html');
    setTimeout(() => {
      body.classList.remove('instant-scroll');
    },1);
    
    const handleScroll = () => {

        if (window.scrollY > 0) {
          setButtonUp(true);
        } else {
          setButtonUp(false);
        }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='p__header' id='start'>
      <Navbar/>
      <Start/>
      {
        buttonUp &&
        <a href="#start">
          <div className='up-btn'>
            <img src={images.up_arrow} alt="up-arrow" />
          </div>
        </a>
      }
    </div>
  )
}

export default Header
