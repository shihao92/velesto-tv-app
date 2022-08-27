import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardHeader, CardBody,
	Table
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
						<div className="col-md-4">
							<img src={ props.selectedRig.bigImg } className="w-100" />
						</div>
						<div className="col-md-8">
							<Card className="mb-2">
								<CardHeader>Introduction</CardHeader>
								<CardBody>
									<p>{ props.selectedRig.intro1 }</p>
									<p>{ props.selectedRig.intro2 }</p>
									<p>{ props.selectedRig.intro3 }</p>
								</CardBody>
							</Card>
							<Card className="mb-2">
								<CardHeader>General</CardHeader>
								<CardBody>
									<Table striped bordered>
										<tbody>
											{
												props.selectedRig.general.map( item => {
													return (
														<tr key={ item.key }>
															<td>{ item.key }</td>
															<td>{ item.val }</td>
														</tr>
													)
												})
											}
										</tbody>
									</Table>
								</CardBody>
							</Card>
							<Card className="mb-2">
								<CardHeader>Main Dimensions / Technical</CardHeader>
								<CardBody>
									<Table striped bordered>
										<tbody>
											{
												props.selectedRig.mainDimensions.map( item => {
													return (
														<tr key={ item.key }>
															<td>{ item.key }</td>
															<td>{ item.val }</td>
														</tr>
													)
												})
											}
										</tbody>
									</Table>
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