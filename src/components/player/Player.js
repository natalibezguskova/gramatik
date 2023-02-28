import React, { useEffect, useCallback, useMemo, useState} from "react";
import styled from "styled-components";
import {ReactComponent as PlayIcon} from "../../assets/images/play.svg";
import {ReactComponent as PauseIcon} from "../../assets/images/pause.svg";
import {audioData} from '../../assets/content/audio/audio'
import MobilePlayerBg from "../../assets/images/first_bg.jpg";

const Music = styled.div`
  position: absolute;
  top: 40px;
  right: 110px;
  display: flex;
  z-index: 2;

  @media (max-width: 768px) {
    position: inherit;
    background-image: url(${MobilePlayerBg});
    background-position-x: center;
    background-position-y: 4%;
    background-repeat: no-repeat;

    display: ${({isMenuOpen}) => isMenuOpen ? 'none' : 'flex'};
    justify-content: left;
    padding: 10px;
  }
`
const AudioCover = styled.div`
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 70px;
  height: 70px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);
`
const PlayerWrap = styled.div`
  height: 70px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.32);
  padding: 6px 16px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    width: calc(100vw - 90px - 42px);
    max-width: 350px;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Artist = styled.div`
  display: flex;
  text-align: left;
  font-size: 18px;
  margin-left: 6px;
  color: black;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
`
const ProgressBar = styled.input`
  height: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  border-radius: 4px;
  background: rgba(0,0,0, .3);
  background: ${({currentPercentage}) => `linear-gradient(to right, black, black ${currentPercentage}, rgba(0, 0, 0, 0.3) ${currentPercentage}, rgba(0, 0, 0, 0.3) 100%)`};
  margin: 0 12px 0 14px;
  cursor: pointer;

  transition: all 0.3s ease;

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 4px;
  }

  ::-moz-range-track {
    -moz-appearance: none;
    height: 4px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    background-color: black;
    cursor: pointer;
    margin-left: -2px;
    transition: all 0.3s ease;
  }
  ::-moz-range-thumb {
    -moz-appearance: none;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    background-color: black;
    cursor: pointer;
    margin-left: -2px;
    transition: all 0.3s ease;
  }

  :hover {
    background: ${({currentPercentage}) => `linear-gradient(to right, rgb(10,21,97), rgb(10,21,97) ${currentPercentage}, rgba(0, 0, 0, 0.3) ${currentPercentage}, rgba(0, 0, 0, 0.3) 100%)`};

    &::-webkit-slider-thumb {
      height: 12px;
      width: 12px;
      margin-top: -4px;
    }
    &::-moz-range-thumb {
      height: 12px;
      width: 12px;
      margin-top: -4px;
    }
  }
  :focus {
    outline: none;
  }
`
const Button = styled.div`
  width: 25px;
  height: 25px;

  > svg {
    display: block;
    width: 25px;
    height: 27px;

    path {
      fill: black;
    }
  }

   > svg:hover path {
    fill: rgb(10,21,97);
    cursor: pointer;
    transition: color .4s ease, opacity .4s ease;
  }
`
const TimeStamps = styled.div`
  color: black;
  font-size: 12px;
  width: 125px;
  display: flex;
  flex-wrap: nowrap;
  font-family: "BrandonGrotesque-Light";
  
  @media (max-width: 768px) {
    display: none;
  }
`

const TimeStampsMobile = styled(TimeStamps)`
  display: none;
  width: fit-content;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Player = ({audioRef, trackProgress, setTrackProgress, isMenuOpen}) => {

  const [playing, setPlaying] = useState(false)

  const duration = useMemo(() => audioRef?.current?.duration, [audioRef])

  useEffect(() => {
    const currentRef = audioRef?.current
    return () => {
      currentRef.pause();
    }
  }, [audioRef]);

  useEffect(() => {
    if (playing) audioRef?.current.play()
    else audioRef?.current.pause()
  }, [playing, audioRef])

  const handleClick = useCallback(() => setPlaying(prev => !prev), [setPlaying])
  const onScrub = useCallback((value) => {
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }, [setTrackProgress, audioRef])

  const formatTime = useCallback((value) => {
    const time = Number(value)
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
          minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
          seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  }, [])

  const audioTime = useMemo(() => formatTime(trackProgress), [trackProgress, formatTime])
  const audioDuration = useMemo(() => formatTime(duration), [duration, formatTime])
  const currentPercentage = useMemo(() => duration ? `${(trackProgress / duration) * 100}%` : '0%', [duration, trackProgress])
  const mobileLeft = useMemo(() => formatTime(duration - trackProgress), [duration, trackProgress, formatTime])

  const {img, artist} = audioData

  return (
      <Music isMenuOpen={isMenuOpen}>
          <AudioCover img={img}/>
          <PlayerWrap>
            <Artist><span>{artist}</span></Artist>
            <Controls>
              <Button onClick={handleClick}>
                {playing ? <PauseIcon /> : <PlayIcon/>}
              </Button>
              <ProgressBar
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : `${duration}`}
                  onChange={(e) => onScrub(e.target.value)}
                  currentPercentage={currentPercentage}
              />
              <TimeStamps>{audioTime} / {audioDuration}</TimeStamps>
              <TimeStampsMobile>{mobileLeft}</TimeStampsMobile>
            </Controls>
          </PlayerWrap>
        </Music>
  )
}
