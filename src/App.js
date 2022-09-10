import {
  Button
} from 'reactstrap'
import { useState, useEffect } from 'react'
import { GiSoundOff, GiSoundOn } from "react-icons/gi";

import ModalOffshoreDrillingRigs from './components/Modal/OffshoreDrillingRigs'
import ModalHydraulicWorkoverUnits from './components/Modal/HydraulicWorkoverUnits'

import 'animate.css';
import './App.css';

function App() {
  const [ audio ] = useState( new Audio("assets/mixkit-tech-house-vibes-130.mp3") )
  const [ showOffshoreDrillingRigs, updateShowOffshoreDrillingRigs ] = useState( false )
  const [ showHydraulicWorkoverUnits, updateShowHydraulicWorkoverUnits ] = useState( false )
  const [ isAudioPlaying, updateIsAudioPlaying ] = useState( true )
  useEffect(() => {
    document.querySelector("#audio-play-btn").click()
    audio.addEventListener( "ended", () => document.querySelector("#audio-play-btn").click() )
  }, [])
  return (
    <div className="app-container" style={{ backgroundImage: `url(assets/home-bg.jpg)`, backgroundColor: '#071c2b', position: 'relative' }}>
      <Button
        color="secondary"
        style={{ position: 'absolute', top: 15, right: 15 }}
        onClick={() => {
          updateIsAudioPlaying( !isAudioPlaying )
          if( isAudioPlaying ) {
            audio.pause()
          } else {
            audio.play()
          }
        }}>
        {
          isAudioPlaying ? <GiSoundOn fontSize={ '35px' } /> : <GiSoundOff fontSize={ '35px' } /> 
        }
      </Button>
      <div className="main-menu-panel animate__animated animate__fadeIn">
        <img src={ "assets/brand.png" } className="brand-img" loading={ "lazy" } />
        <Button 
          className="btn-offshore-drilling-rigs mb-3 mt-3"
          onClick={() => updateShowOffshoreDrillingRigs( true )}>
          Offshore Drilling Rigs
        </Button>
        <Button 
          className="btn-hydraulic-workover-units"
          onClick={() => {
            updateShowHydraulicWorkoverUnits( true )
          }}>
          Hydraulic Workover Units
        </Button>
        <Button id="audio-play-btn" style={{ visibility: 'hidden' }} onClick={() => audio.play()}>Play</Button>
      </div>
      <ModalOffshoreDrillingRigs 
        showOffshoreDrillingRigs={ showOffshoreDrillingRigs }
        updateShowOffshoreDrillingRigs={ updateShowOffshoreDrillingRigs } />
      <ModalHydraulicWorkoverUnits
        showHydraulicWorkoverUnits={ showHydraulicWorkoverUnits }
        updateShowHydraulicWorkoverUnits={ updateShowHydraulicWorkoverUnits } />
    </div>
  );
}

export default App;
