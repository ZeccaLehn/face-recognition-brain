import React from 'react';
// For CSS styling using tachyons in p tag
//  Note: Must install `npm install tachyons` first


const Navigation = () => {
	return (
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		)
}

export default Navigation;