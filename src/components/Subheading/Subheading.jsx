import React from 'react'
import './subheading.css'
import images from '../../constants/images'

const Subheading = ({title}) => {
  return (
        <div className='p__subheading'>
                <img src={images.openBracket} alt="open curly bracket" />
                <p>{title}</p>
                <img src={images.closedBracket} alt="closed curly bracket" />
        </div>
  )
}

export default Subheading
