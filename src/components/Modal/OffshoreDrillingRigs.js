import {
	Modal, ModalBody, ModalFooter,
	Button, Card, CardBody
} from 'reactstrap'
import { useState } from 'react'
import ReactLottie from 'react-lottie'

import ModalOffshoreDrillingRigDetails from './OffshoreDrillingRigDetails'

import MagnifierJSON from '../../assets/magnifier2.json'

const MagnifierOptions = {
	loop: true,
	autoplay: true, 
	animationData: MagnifierJSON,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const RIGS_MODEL = [
	{
		id: 'Naga 5',
		thumbImg: 'assets/naga5small.jpg',
		bigImg: "assets/naga5big.jpg",
		intro1: 'NAGA 5 is a three legged 400 ft independent leg jack-up drilling rig designed and built by Keppel FELS in Singapore. The KFELS B Class jack-up rig has been built to the standards of IMO MODU Code(1989 with 1991 amendments).',
		intro2: 'NAGA 5 meets the demands of the offshore drilling industry by providing latest technology in the system and operation of the rig, bigger deck space, 130 POB, capable to drill at 400ft water depth and deep drilling of 30,000 ft depth.',
		intro3: '',
		general: [
			{
				key: 'Name',
				val: 'NAGA 5'
			},
			{
				key: 'Design',
				val: 'Keppel FELS B Class Design'
			},
			{
				key: 'Delivery',
				val: 'March 2014'
			},
			{
				key: 'Construction Yard',
				val: 'Keppel FELS Yard, Singapore'
			},
			{
				key: 'Jack Up Type',
				val: 'Independent Leg Jack Up Drilling Rig'
			},
			{
				key: 'Flag',
				val: 'Malaysia'
			},
			{
				key: 'Classification',
				val: 'ABS'
			},
			{
				key: 'Class Notations',
				val: 'A1 Self-Elevating Drilling Unit'
			}
		],
		mainDimensions: []
	},
	{
		id: 'Naga 6',
		thumbImg: 'assets/naga6small.jpg',
		bigImg: "assets/naga6big.png",
		intro1: 'NAGA 6 is a three legged 375 ft independent leg jack-up cantilever rig, designed by GustoMSC. Built to the standards of IMO MODU Code 2009 consolidated version.',
		intro2: 'NAGA 6 meets the demands of the offshore drilling industry by providing latest technology in the system and operation of the rig, bigger deck space, 124 POB, capable to drill at 375ft water depth and deep drilling of 30,000ft depth.',
		intro3: "The GustoMSC patented X-Y cantilever design is unique and allows the rotary table to be skidded out to a maximum of 70ft and 20ft from the centre line. The X-Y cantilever enhances drilling efficiency and reduces the weight of the cantilever, thus increasing the unit's capacity. With the X-Y system, the load charts of the cantilever allow for maximum combined loads (1,500kips) over the full envelop, improving development drilling over the fixed platforms.",
		general: [
			{
				key: 'Name',
				val: 'NAGA 6'
			},
			{
				key: 'Design',
				val: 'GustoMSC-CJ46-X100D'
			},
			{
				key: 'Delivery',
				val: 'September 2014'
			},
			{
				key: 'Construction Yard',
				val: 'Chine Merchants Heavy Ind. (Shenzhen) Co. Ltd, China'
			},
			{
				key: 'Jack Up Type',
				val: 'Independent Leg Jack Up Drilling Rig'
			},
			{
				key: 'Flag',
				val: 'Panama'
			},
			{
				key: 'Classification',
				val: 'ABS'
			}
		],
		mainDimensions: [
			{
				key: 'Length and Breadth',
				val: '214ft x 203ft'
			},
			{
				key: 'Depth',
				val: '26ft'
			},
			{
				key: 'Draft',
				val: '14.7ft'
			},
			{
				key: 'Leg Length',
				val: 'Transverse: 150ft, Longitudinal : 131ft'
			}
		]
	}
]

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
												<div style={{ position: 'absolute', top: 0, left: 0 }}>
													<ReactLottie
														options={ MagnifierOptions }
														height={100}
														width={100}
														autoplay={ true }
														loop={ true } />
												</div>
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
				<ModalOffshoreDrillingRigDetails
					showSelectedRigDetails={ showSelectedRigDetails }
					updateShowSelectedRigDetails={ updateShowSelectedRigDetails }
					selectedRig={ selectedRig } />
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