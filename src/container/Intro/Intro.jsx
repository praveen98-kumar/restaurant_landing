import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const videoRef = React.useRef()
  const [play, setPlay] = useState(false)

  const handleVideo = () => {
    setPlay((pre) => !pre)

    if (play) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }
  return (
    <div className='app__video'>
      <video src={meal} type="video/mp4" controls={false} muted ref={videoRef} />
      <div className="app__video__overlay flex__center">
        <div className="app__video__overlay__circle flex__center"
          onClick={() => handleVideo()}>
          {
            play ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
