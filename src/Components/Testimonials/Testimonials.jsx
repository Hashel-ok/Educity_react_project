import React, { useRef } from 'react'
import '../Testimonials/Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slide=useRef();
  let tx=0;

const slideForward= () => {

  if(tx>-50){

    tx-=25;

  }

  slide.current.style.transform=`translateX(${tx}%)`


}
const slideBackward=() => {
  if(tx<0){

    tx+=25;

  }

  slide.current.style.transform=`translateX(${tx}%)`



}


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn'  onClick={slideBackward}/>
      <div className='slider'>
      <ul ref={slide}>
      <li>
      <div className='slide'>
        <div className='user-info'>
          <img src={user1} alt="" />
          <div className='slide_name'>
            <h3>Wilam jackson</h3>
            <span>Educity,USA</span>
          </div>

        </div>

      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

      </div>

      </li>
      {/* 2nd user ifo */}

      <li>
      <div className='slide'>
        <div className='user-info'>
          <img src={user2} alt="" />
          <div className='slide_name'>
            <h3>Wilam jackson</h3>
            <span>Educity,USA</span>
          </div>

        </div>

      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

      </div>

      </li>
      {/* 3rd user ifo */}

      <li>
      <div className='slide'>
        <div className='user-info'>
          <img src={user3} alt="" />
          <div className='slide_name'>
            <h3>Wilam jackson</h3>
            <span>Educity,USA</span>
          </div>

        </div>

      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

      </div>

      </li>
      {/* 4th user ifo */}

      <li>
      <div className='slide'>
        <div className='user-info'>
          <img src={user4} alt="" />
          <div className='slide_name'>
            <h3>Wilam jackson</h3>
            <span>Educity,USA</span>
          </div>

        </div>

      <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>

      </div>

      </li>

      </ul>

      </div>

    </div>
  )
}

export default Testimonials