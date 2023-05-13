import React, {useRef} from 'react'
import './start.css'
import images from '../../constants/images'
import Typed from 'typed.js';

const Start = () => {

    function Typing() {
        const el = React.useRef(null);
      
        React.useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['Teacher','Web Developer','Software Developer','Web Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
          });
      
          return () => {
            typed.destroy();
          };
        }, []);
      
        return (
            <span className='typingAnimation' ref={el} />
        );
      }



  return (
    <div className='p__start_section'>
        <div className='p__start'>
            <div className='p__start_container-info'>
                <h2 className='h2'>Hi, my name is <span>Nikola Buzadžija</span></h2>
                <div className='p__start_container-info_typing-wrapper '>
                    <h2 className='h2'>I am <Typing/></h2>
                </div>

            </div>

            <div className='p__start_container-img flex__center'>
                <img src={images.me} alt="profile img" />
            </div>
        </div>
    </div>
  )
}

export default Start
