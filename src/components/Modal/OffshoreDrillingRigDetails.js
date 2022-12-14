import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardHeader, CardBody,
	Table
} from 'reactstrap'
import { useState } from 'react'
import { BiMapPin } from 'react-icons/bi'
import reacthtmlparser from 'react-html-parser'

import ModalLocator from './RigsLocations'

const OffshoreDrillingRigDetails = props => {
	const [ showLocator, updateShowLocator ] = useState( false )
  return (
		<Modal
		 	fade={ false }
			centered={ true }
			fullscreen={ true }
			isOpen={ props.showSelectedRigDetails }>
			<ModalBody>
				<div className='container-fluid'>
					<div className='d-flex align-items-center'>
						<h4 className="mb-0">{ props.selectedRig.id }</h4>
						<Button 
							color="primary" 
							className="ml-2"
							onClick={() => {
								updateShowLocator( true )
							}}>
							Location
						</Button>
					</div>
					<hr />
					<div className='row'>
						<div className="col-md-4">
							<img src={ props.selectedRig.bigImg } className="w-100" loading={ "lazy" } />
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
															<td>{ reacthtmlparser( item.val ) }</td>
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
															<td>{ reacthtmlparser( item.val ) }</td>
														</tr>
													)
												})
											}
										</tbody>
									</Table>
								</CardBody>
							</Card>
							{
								props.selectedRig.drillingEquipment && (
									<Card className="mb-2">
										<CardHeader>Drilling Equipment</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.drillingEquipment.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.tubulars && (
									<Card className="mb-2">
										<CardHeader>Tubular</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.tubulars.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.wellControl && (
									<Card className="mb-2">
										<CardHeader>Well Control</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.wellControl.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.liftingEquipment && (
									<Card className="mb-2">
										<CardHeader>Lifting Equipment</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.liftingEquipment.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.powerPlant && (
									<Card className="mb-2">
										<CardHeader>Power Plant</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.powerPlant.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.mudSystem && (
									<Card className="mb-2">
										<CardHeader>Mud System</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.mudSystem.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.storageCapacities && (
									<Card className="mb-2">
										<CardHeader>Storage Capacities</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.storageCapacities.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.survivalEquipment && (
									<Card className="mb-2">
										<CardHeader>Survival Equipment</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.survivalEquipment.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.mooringEquipment && (
									<Card className="mb-2">
										<CardHeader>Mooring Equipment</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.mooringEquipment.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.jackingSystem && (
									<Card className="mb-2">
										<CardHeader>Jacking System</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.jackingSystem.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.specialFeatures && (
									<Card className="mb-2">
										<CardHeader>Special Features & Other Information</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.specialFeatures.map( item => {
															return (
																<tr key={ item.key }>
																	<td>{ item.key }</td>
																	<td>{ reacthtmlparser( item.val ) }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
							{
								props.selectedRig.offlineSystem && (
									<Card className="mb-2">
										<CardHeader>Offline System</CardHeader>
										<CardBody>
											<Table striped bordered>
												<tbody>
													{
														props.selectedRig.offlineSystem.map( item => {
															return (
																<tr key={ item }>
																	<td>{ item }</td>
																</tr>
															)
														})
													}
												</tbody>
											</Table>
										</CardBody>
									</Card>
								)
							}
						</div>
					</div>
				</div>
				<ModalLocator
					showLocator={ showLocator }
					updateShowLocator={ updateShowLocator }
					selectedRig={ props.selectedRig } />
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