import React, {useEffect, useState} from 'react'
import './navbar.css'
import images from '../../constants/images'

const Navbar = () => {

    const [toggleMenu,setToggleMenu] = useState(false);
    const closeWindow = () =>{
        if(window.innerWidth > 770){
        setToggleMenu(false);
        }
    }
    window.addEventListener('resize',closeWindow);


  return (
    <nav>
        <div className='p__navbar'>
            <div className='p__navbar_logo'>
                <img src={images.openBracket} alt="open curly bracket" />
                <h2>MonteCristo</h2>
                <img src={images.closedBracket} alt="closed curly bracket" />
            </div>
            <div className='p__navbar_links-wrapper'>
                <ul className='p__navbar_links'>
                    <li >
                        <a className='p__navbar_links-link' href="#start">
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Start</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href="#about">
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>About</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href='#work'>
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Work</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href="#contact">
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Contact</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <div className='p__navbar_menu'>
                <div className='p__navbar_menu-button' onClick={() => setToggleMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              {
              toggleMenu && (
              <div className='p__navbar_menu-overlay flex__center slide-bottom'> 
                <div className='p__navbar_menu-button' onClick={() => setToggleMenu(false)}>
                  <img src={images.closeYellow} alt="close" />
                </div>
                <ul className={`p__navbar_menu-overlay-links`}>
                    <li >
                        <a className='p__navbar_links-link' href="#start" onClick={() => setToggleMenu(false)}>
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Start</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href="#about" onClick={() => setToggleMenu(false)}>
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>About</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href="#work" onClick={() => setToggleMenu(false)}>
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Work</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                    <li >
                        <a className='p__navbar_links-link' href="#contact" onClick={() => setToggleMenu(false)}>
                            <img src={images.openBracket} alt="open curly bracket" />
                            <p>Contact</p>
                            <img src={images.closedBracket} alt="closed curly bracket" />
                        </a>
                    </li>
                </ul>
              </div>
              )
              }
    
        </div>




    </nav>
  )
}

export default Navbar
