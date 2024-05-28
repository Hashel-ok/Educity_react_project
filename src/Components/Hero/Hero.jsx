import React from 'react';
import '../../Components/Hero/Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='container Hero'>
      <h1 >We Ensure better education for a better world</h1>
      <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
      <button className='btn '>Explore More <img src={darkarrow} alt="" /></button>
     </div>
  )
}

export default Hero