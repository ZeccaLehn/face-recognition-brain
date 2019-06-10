import React from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'



// <FaceRecognition />

// Particles Component as Background 
const particleOptions = {
 					particles: {
		            			line_linked: {
		            				shadow: {
		            					enable: true,
		            					color: "#3CA9D1",
		            					blur: 5
		            				}
		            			}
		            		}
		            	}

// Main App w/ Responsiveness
function App() {
  return (
    <div className="App">

		<Particles className='particles' params={particleOptions}/>

		<Navigation />
		<Logo />
		<Rank />
		<ImageLinkForm />


    </div>
  );
}

export default App;
