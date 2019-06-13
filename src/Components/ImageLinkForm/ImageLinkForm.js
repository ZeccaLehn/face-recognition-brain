import React from 'react';
import './ImageLinkForm.css';

// onInputChange destructured from the props
const ImageLinkForm = ({onInputChange}) => {

	return (
		<div className='f3 pa4'>

			<p>

				{'This Magic Brain Will Detect Faces'}
				
			</p>

		{/* center withing App.css snaps input/button to one line*/}
			<div className='center'>

				<div className='form center pa4 br3 shadow-3'>

						{/* Tachyons for stiling in className
						onChange is a React Synthetic Event -- mimics html when input changes
						Needs event.target.value to return inputs*/}
						<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
						<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>

				</div>
			</div>


		</div>
		)
};

export default ImageLinkForm;

