import React, {useCallback, useRef, useState} from 'react'

import {Menu} from '../../components/menu/Menu'
import {Fabs} from '../../components/fabs/Fabs'
import {Sections} from '../../components/sections/index'
import {Player} from '../../components/player/Player'
import {audioData} from '../../assets/content/audio/audio'

const Home = () => {

  const audioRef = useRef()

  const [trackProgress, setTrackProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])
  const openMenu = useCallback(() => setIsMenuOpen(true), [])
  const handleTimeChange = useCallback(() => setTrackProgress(audioRef.current.currentTime), [setTrackProgress])

  const {file} = audioData

  return (
      <>
        <audio
            preload='metadata'
            ref={audioRef}
            onTimeUpdate={handleTimeChange}
        >
          <source src={file} type="audio/mpeg"/>
        </audio>
        <Player
            audioRef={audioRef}
            trackProgress={trackProgress}
            setTrackProgress={setTrackProgress}
            isMenuOpen={isMenuOpen}
        />
        {
          isMenuOpen
              ? <Menu closeMenu={closeMenu}/>
              : (
                  <>
                    <Fabs openMenu={openMenu}/>
                    <Sections />
                  </>
              )
        }
      </>
  )
}

export default Home;
