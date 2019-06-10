import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div className='f3 pa4'>

			<p>

				{'This Magic Brain Will Detect Faces'}
				
			</p>

		{/* center withing App.css snaps input/button to one line*/}
			<div className='center'>

				<div className='form center pa4 br3 shadow-3'>

						{/* Tachyons for stiling in className */}
						<input className='f4 pa2 w-70 center' type='tex' />
						<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>

				</div>
			</div>


		</div>
		)
}

export default ImageLinkForm;

