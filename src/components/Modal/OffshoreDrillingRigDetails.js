import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardHeader, CardBody
} from 'reactstrap'
import { useState } from 'react'

const OffshoreDrillingRigDetails = props => {
  return (
		<Modal
			centered={ true }
			fullscreen={ true }
			isOpen={ props.showSelectedRigDetails }>
			<ModalBody>
				<div className='container-fluid'>
					<h4>{ props.selectedRig.id }</h4>
					<hr />
					<div className='row'>
						<div className="col-md-12">
							<Card>
								<CardHeader>Introduction</CardHeader>
								<CardBody>
									{ props.selectedRig.intro1 }
									{ props.selectedRig.intro2 }
									{ props.selectedRig.intro3 }
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			</ModalBody>
			<ModalFooter>
				<Button 
					color="secondary"
					onClick={() => {
						props.updateShowSelectedRigDetails( false )
					}}>Back</Button>
			</ModalFooter>
		</Modal>
	)
}

export default OffshoreDrillingRigDetails