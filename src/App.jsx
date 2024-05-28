import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import GetInTouch from './Components/GetInTouch/GetInTouch'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {

  const [videoplay,setvideoplay]=useState(false);

  

  return (
    <>
     <Navbar />
     <Hero />
     <div className='container'>
      <Title title={'OUR PROGRAM'} subtitle={'What We Offer'}/>
     <Programs />
     <About setvideoplay={setvideoplay} />
     <Title title={'GALLERY'} subtitle={'Campus Photos'}/>
      <Campus />
      <Title title={'TESTIMONIALS'} subtitle={'What Student Says'} />
      <Testimonials />
      <Title title={'CONTACT US'} subtitle={'Get in Touch'} />
      <GetInTouch />
      <Footer />

     </div>
     <VideoPlayer setvideoplay={setvideoplay} videoplay={videoplay} />
    </>
   
  ) 
}

export default App