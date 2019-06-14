import React from 'react';

// Recieve imageUrl by destructuring from App.js
const FaceRecognition = ({imageUrl}) => {
	return (
		<div className='center ma'>

			<div className='absolute mt2'>
				<img alt= '' src={imageUrl} width='800px' height='auto' />
			</div>

		</div>
		)
}

export default FaceRecognition;