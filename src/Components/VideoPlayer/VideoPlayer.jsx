import React, { useRef } from 'react'
import '../VideoPlayer/VideoPlayer.css'
import vido from '../../assets/mov_bbb.mp4'

const VideoPlayer = ({videoplay,setvideoplay}) => {

const player=useRef(null);

const closeplayer = (e) => {

  if(e.target=== player.current)
    {
      setvideoplay(false)
    }

    
}

  return (
    <div className={`video_player ${videoplay?'':'hide'}`} ref={player} onClick={closeplayer}> 
      <video src={vido}  width="400px" height="400px" controls autoPlay muted ></video>


    </div>
  )
}

export default VideoPlayer