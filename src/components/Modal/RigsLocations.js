import {
	Modal, ModalBody, ModalFooter,
	Button
} from 'reactstrap'
import { BiMap } from 'react-icons/bi'

import { RIGS_LOCATIONS } from '../../data/rigsLocation'

const LocatorModal = props => {
  return (
    <Modal
			centered={ true }
			fullscreen={ true }
      fade={ false }
			isOpen={ props.showLocator }>
      <ModalBody>
        <div className='container-fluid'>
          <h4>Locations</h4>
          <hr />
          <div 
            className="d-flex align-items-center justify-content-center" 
            style={{ position: 'relative', width: '1050px', marginLeft: 'auto', marginRight: 'auto' }}>
            <img src={ 'assets/malaysia-map.png' } style={{ width: '100%' }} loading={ "lazy" } />
            {
              RIGS_LOCATIONS.map( item => {
                return (
                  <div 
                    key={ `location-${ item.id }` }
                    className={ props.selectedRig.id === item.name ? `animate__animated animate__bounce animate__infinite` : '' }
                    style={
                      item.left ?{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                      } : {
                        position: 'absolute',
                        top: item.top,
                        right: item.right,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                      }
                    }>
                    {
                      item.contentAlignSide === 'left' && (
                        <div style={{ textAlign: 'right', backgroundColor: 'rgba(255,255,255,0.7)', padding: '10px', borderRadius: '10px' }}>
                          <h4 className="mb-0">{ item.name }</h4>
                          <p className="mb-0">{ item.location }</p>
                        </div>
                      )
                    }
                    <BiMap fontSize={ '28px' } />
                    {
                      item.contentAlignSide === 'right' && (
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '10px', borderRadius: '10px' }}>
                          <h4 className="mb-0">{ item.name }</h4>
                          <p className="mb-0">{ item.location }</p>
                        </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
				<Button 
					color="secondary"
					onClick={() => {
						props.updateShowLocator( false )
					}}>Back</Button>
			</ModalFooter>
    </Modal>
  )
}

export default LocatorModal