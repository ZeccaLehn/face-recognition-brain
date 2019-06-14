import React from 'react';
import './FaceRecognition.css'

// Recieve imageUrl by destructuring from App.js
// Takes box from state and passes it as a prop
const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>

			<div className='absolute mt2'>
				<img id='inputimage' alt= '' src={imageUrl} width='800px' height='auto' />
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>

		</div>
		)
}

export default FaceRecognition;


