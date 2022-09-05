import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardHeader, CardBody,
	Table
} from 'reactstrap'
import { useState } from 'react'
import { BiMapPin } from 'react-icons/bi'

import ModalLocator from './HWULocations'

const HWUDetails = props => {
  const [ showLocator, updateShowLocator ] = useState( false )
  return (
    <Modal
			centered={ true }
			fullscreen={ true }
			isOpen={ props.showSelectedHWU }>
			<ModalBody>
				<div className='container-fluid'>
					<div className='d-flex align-items-center'>
						<h4 className="mb-0">{ props.selectedHWU.id }</h4>
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
							<img src={ props.selectedHWU.bigImg } className="w-100" />
						</div>
						<div className="col-md-8">
              <Card className="mb-2">
								<CardHeader>Specifications</CardHeader>
								<CardBody>
									<Table striped bordered>
										<tbody>
											{
												props.selectedHWU.features.map( item => {
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
        <ModalLocator
					showLocator={ showLocator }
					updateShowLocator={ updateShowLocator }
					selectedHWU={ props.selectedHWU } />
      </ModalBody>
      <ModalFooter>
				<Button 
					color="secondary"
					onClick={() => {
						props.updateShowSelectedHWU( false )
					}}>Back</Button>
			</ModalFooter>
    </Modal>
  )
}

export default HWUDetails