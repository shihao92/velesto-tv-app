import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardBody
} from 'reactstrap'
import { useState } from 'react'
import _ from 'lodash'

import ModalHWUDetails from './HydraulicWorkoverUnitDetails'

import { GAITS_MODEL } from '../../data/gaitsModel'

const HydraulicWorkoverUnitsModal = props => {
  const [ selectedHWU, updateSelectedHWU ] = useState( {} )
	const [ showSelectedHWU, updateShowSelectedHWU ] = useState( false )
  return (
    <Modal
			centered={ true }
			fullscreen={ true }
			fade={ false }
			isOpen={ props.showHydraulicWorkoverUnits }>
			<ModalBody>
				<div className='container-fluid'>
					<h4>Hydraulic Workover Units</h4>
					<hr />
					<div className='row'>
            {
              GAITS_MODEL.map( item => {
                return (
                  <div key={ item.id } className="col-md-6 d-flex align-items-center justify-content-center pb-2">
										<Card 
											style={{ cursor: 'pointer' }}
											onClick={() => {
												Promise.all([
													updateSelectedHWU( item )
												]).then(() => {
													updateShowSelectedHWU( true )
												})
											}}>
											<CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
												<img src={ item.thumbImg } style={{ width: '250px' }} loading={ "lazy" } />
												<h4 className='mt-3'>{ item.id }</h4>
											</CardBody>
										</Card>
									</div>
                )
              })
            }
          </div>
        </div>
        {
          !_.isEmpty( selectedHWU ) && (
            <ModalHWUDetails
              showSelectedHWU={ showSelectedHWU }
              selectedHWU={ selectedHWU }
              updateShowSelectedHWU={ updateShowSelectedHWU } />
          )
        }
      </ModalBody>
      <ModalFooter>
				<Button 
					color="secondary"
					onClick={() => {
						props.updateShowHydraulicWorkoverUnits( false )
					}}>Back</Button>
			</ModalFooter>
    </Modal>
  )
}

export default HydraulicWorkoverUnitsModal