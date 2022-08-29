import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardBody
} from 'reactstrap'
import { useState } from 'react'
import ReactLottie from 'react-lottie'
import _ from 'lodash'

import ModalOffshoreDrillingRigDetails from './OffshoreDrillingRigDetails'

import MagnifierJSON from '../../assets/magnifier2.json'
import { RIGS_MODEL } from '../../data/rigsModel'

const MagnifierOptions = {
	loop: true,
	autoplay: true, 
	animationData: MagnifierJSON,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const OffshoreDrillingRigsModal = props => {
	const [ selectedRig, updateSelectedRig ] = useState( {} )
	const [ showSelectedRigDetails, updateShowSelectedRigDetails ] = useState( false )
	return (
		<Modal
			centered={ true }
			fullscreen={ true }
			isOpen={ props.showOffshoreDrillingRigs }>
			<ModalBody>
				<div className='container-fluid'>
					<h4>Offshore Drilling Rigs</h4>
					<hr />
					<div className='row'>
						{
							RIGS_MODEL.map( item => {
								return (
									<div key={ item.id } className="col-md-6 d-flex align-items-center justify-content-center">
										<Card 
											style={{ cursor: 'pointer' }}
											onClick={() => {
												Promise.all([
													updateSelectedRig( item )
												]).then(() => {
													updateShowSelectedRigDetails( true )
												})
											}}>
											<CardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
												{/* <div style={{ position: 'absolute', top: 0, left: 0 }}>
													<ReactLottie
														options={ MagnifierOptions }
														height={100}
														width={100}
														autoplay={ true }
														loop={ true } />
												</div> */}
												<img src={ item.thumbImg } />
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
					!_.isEmpty( selectedRig ) && (
						<ModalOffshoreDrillingRigDetails
							showSelectedRigDetails={ showSelectedRigDetails }
							updateShowSelectedRigDetails={ updateShowSelectedRigDetails }
							selectedRig={ selectedRig } />
					)
				}
			</ModalBody>
			<ModalFooter>
				<Button 
					color="secondary"
					onClick={() => {
						props.updateShowOffshoreDrillingRigs( false )
					}}>Back</Button>
			</ModalFooter>
		</Modal>
	)
}

export default OffshoreDrillingRigsModal