import {
  Button,
  Modal, ModalHeader, ModalBody
} from 'reactstrap'
import { useState } from 'react'
import ReactLottie from 'react-lottie'

import RippleIcon from './assets/ripple-effects.json'

import './App.css';

const RippleOptions = {
  loop: true,
  autoplay: true,
  animationData: RippleIcon
}

function App() {
  const [ selectedPoint, updateSelectedPoint ] = useState( '' )
  const [ showDetailsModal, updateShowDetailsModal ] = useState( false )  
  return (
    <div className="app-container">
      <img src={ "/assets/brand.png" } className="brand-img" />
      <Button 
        className="btn-click offline-capability-upgrade"
        onClick={() => {
          updateSelectedPoint( 'offline-capability-upgrade' )
          updateShowDetailsModal( true )
        }}>
        <ReactLottie
          width={ 200 }
          height={ 200 }
          style={{ overflow: 'visible' }}
          options={ RippleOptions }
          isPaused={ false } />
      </Button>
      <Modal 
        isOpen={ showDetailsModal }
        size={ 'md' }
        toggle={() => updateShowDetailsModal( false )}>
        <ModalHeader>{ 'Offline Capabilities Upgrade' }</ModalHeader>
      </Modal>
    </div>
  );
}

export default App;
