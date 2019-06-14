import React from 'react';
import './Logo.css';
import brain from './innovation.png'

// Instaall react tils with `npm install --save react-tilt`
import Tilt from 'react-tilt'



const Logo = () => {
	return (
		<div className='Logo ma2 mt0'>

			<Tilt className="br2 pa2" options={{ max : 55 }} style={{ height: 115, width: 250 }} >
				<div className='Tilt pa1'>
				
					{/* Alt import from source w/in return()
					<img style={{paddingTop:'5px'}} src="https://img.icons8.com/dusk/64/000000/innovation.png" /> */}

					<img style={{paddingTop:'5px'}} alt="" src={brain} />
				</div>

			</Tilt>

		</div>
		)
}

export default Logo;