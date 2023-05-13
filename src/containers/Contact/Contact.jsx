import React from 'react'
import './contact.css'
import Subheading from '../../components/Subheading/Subheading'
import images from '../../constants/images'

import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='p__contact flex__center' id='contact'>
      <div className='p__contact_subheading'>
        <Subheading title='Contact'/>
      </div> 
      <div className='p__contact_section'>
        <div className='p__contact_section-heading'>
          <h3>Find me on:</h3>
        </div>
        <div className='p__contact_section-smedia'>
          <a href='https://github.com/countOfMonteCristo13' target='blank' className='p__contact_section-smedia_logo div1'>
              <img src={images.githubLogo} alt="github" />
              <button className='p__contact_section-smedia_info'>countOfMonteCristo13</button>
          </a>
          <a href='https://codepen.io/countOfMonteCristo13' target='blank' className='p__contact_section-smedia_logo div2'>
              <img src={images.codepenLogo} alt="codepen" />
              <button className='p__contact_section-smedia_info'>countOfMonteCristo13</button>
          </a>
          <a href='https://www.linkedin.com/in/nikola-buzadzija/' target='blank' className='p__contact_section-smedia_logo div3'>
              <img src={images.linkedInLogo} alt="linkedIn" />
              <button className='p__contact_section-smedia_info'>Nikola Buzadzija</button>
          </a>
          <a href='https://discord.com/channels/@me' target='blank' className='p__contact_section-smedia_logo div4'>
              <img src={images.discordLogo} alt="discord" />
              <button    className='p__contact_section-smedia_info'>countOfMonteCristo13</button>
          </a>
          <a href='https://www.instagram.com/count_montecristo13/' target='blank' className='p__contact_section-smedia_logo div5'>
              <img src={images.instagramLogo} alt="instagram" />
              <button className='p__contact_section-smedia_info'>@count_montecristo13</button>
          </a>
          <div className='p__contact_section-smedia_logo div6'>
              <img src={images.emailLogo} alt="email" />
              <button  className='p__contact_section-smedia_info'>buzadzija.nikola13@gmail.com</button>
          </div>
        </div>

          <div className='p__contact_section-button flex__center' >
            <Link to="/findme">
                <button>Get In Touch</button>
            </Link>
          </div>

        <div className='flex__center'>
          <p className='p__contact-copyright'>© Made by MonteCristo. April, 2023.</p> 
        </div>

      </div>
    </div> 
  )
}

export default Contact
