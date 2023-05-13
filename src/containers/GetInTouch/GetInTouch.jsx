import React, {useState, useEffect} from 'react'
import './getintouch.css'
import images from '../../constants/images'
import axios from 'axios'

import { Link, useNavigate, useLocation } from 'react-router-dom'

const GetInTouch = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [buttonClass, setButtonClass] = useState('');

    const [isValidEmail, setIsValidEmail] = useState('false');

    const clickMe = () => {
      setButtonClass('onclick');
    };
  
    useEffect(() => {
      if (buttonClass === 'onclick') {
        setTimeout(() => {
          setButtonClass('validate');
        }, 2250);
      }
      
      if (buttonClass === 'validate') {
        setTimeout(() => {
          setButtonClass('');
        }, 1250);
      }
    }, [buttonClass]);

    const axiosInstance = axios.create({
        baseURL: 'https://portfolioback-hear.onrender.com', 
      });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, email, message };
        try {
        await axiosInstance.post('/send-email', data);
        } catch (error) {
        console.log(error);
        
        }
    };

    const handleEmailChange = (event) =>{
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const emailValidation = emailRegex.test(event.target.value);

      setEmail(event.target.value);
      setIsValidEmail(emailValidation);
    }

    const isFormValid = () => {
      return name !== '' && email !== '' && message !== '';
    }



  return (
    <div className='p__getInTouch flex__center slide-bottom'>
        <Link to={location.state?.from || '/'}>

            <div onClick={() => navigate(-1)} className='p__getInTouch-goback flex__center'>
                <img src={images.arrowBack1} alt="go back" />
            </div>
        </Link>
        <div className='p__getInTouch-section'>
            <div className='p__getInTouch-section_title'>
                <h2>Get In Touch</h2>
            </div>
            <form onSubmit={handleSubmit}  className='p__getInTouch-section_form'>

                <div className='p__getInTouch-section_form-input-wrapper'>
                    <div className='p__getInTouch-section_form-input'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name} placeholder='John Doe' required onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='p__getInTouch-section_form-input'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} placeholder='johndoe@email.com' required onChange={handleEmailChange}/>
                        {!isValidEmail && email.length > 0 && (
                        <p>Please enter a valid email address</p>
                        )}
                    </div>
                </div>
                
                <div className='p__getInTouch-section_form-input'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="7" cols="40" value={message} required onChange={(event) => setMessage(event.target.value)}></textarea>
                </div>
                
                  
                  <div className={`p__getInTouch-section_form-submit ${(isFormValid() && isValidEmail) ? 'visible-btn' : ''}`}>
                      <button type="submit"  className={`button ${buttonClass}`} onClick={clickMe} disabled={!isFormValid()}></button>
                  </div>
                
                
            </form>
        </div>
    </div>
  )
}

export default GetInTouch
