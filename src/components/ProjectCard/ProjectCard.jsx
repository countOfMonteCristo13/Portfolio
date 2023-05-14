// import React from 'react'
// import './projectcard.css'
// import Tilty from 'react-tilty'

// const ProjectCard = ({image,title,alt, onClick}) => {



//   return (
//     <div className='card' onClick={onClick}>
//         <Tilty className='tilt' scale={1.01} speed={200}>
//             <div className='p__work_cards-card'>
//                     <div className='p__work_cards-card_img'>
//                         <img src={image} alt={`projekat ${alt}`} />
//                     </div>
//                     <div className='p__work_cards-card_info'>
//                         <h3>{title}</h3>
//                     </div>
//             </div>
//         </Tilty>
//     </div>
//   )
// }

// export default ProjectCard

import React, {useEffect, useState} from 'react'
import './projectcard.css'
import Tilty from 'react-tilty'

const ProjectCard = ({ image, title, alt, onClick }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='card' onClick={onClick}>
      {isMobile ? (
        <div className='p__work_cards-card'>
          <div className='p__work_cards-card_img'>
            <img src={image} alt={`projekat ${alt}`} />
          </div>
          <div className='p__work_cards-card_info'>
            <h3>{title}</h3>
          </div>
        </div>
      ) : (
        <Tilty className='tilt' scale={1.01} speed={200}>
          <div className='p__work_cards-card'>
            <div className='p__work_cards-card_img'>
              <img src={image} alt={`projekat ${alt}`} />
            </div>
            <div className='p__work_cards-card_info'>
              <h3>{title}</h3>
            </div>
          </div>
        </Tilty>
      )}
    </div>
  )
}

export default ProjectCard
