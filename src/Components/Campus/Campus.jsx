import React from 'react'
import '../Campus/Campus.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'

const Campus = () => {
  return (
    <div className='campus'>

      <div className='campus_imgs'>

      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery4} alt="" />



      </div>

<button className='btn campus_btn'>See more here </button>


    </div>
  )
}

export default Campus