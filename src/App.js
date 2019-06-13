// import React from 'react';
import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'



// <FaceRecognition />

// Particles Component as Background (Updated Commit) 
const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

// Main App w/ Responsiveness
// For taking inputs, we want to create 'state' with constructor
// Updates and changes made through event recieved
class App extends Component{

	/* For creating State within input box*/
	constructor(){
		super();
		this.state = {
			input: '',
		};
	};

	onInputChange = (event) => {

		/* Use console, with typing to see returns */
		console.log(event.target.value);
	};

	render(){

		return (
	    <div className="App">

			<Particles className='particles' params={particleOptions}/>

			<Navigation />
			<Logo />
			<Rank />
			{/* Takes class event with 'this.onInputChange' as property of App*/}
			{/* Needs to get triggered from impageLinkForm.js */}
			<ImageLinkForm onInputChange={this.onInputChange}/>


	    </div>
  		);
	};
};
  

export default App;
