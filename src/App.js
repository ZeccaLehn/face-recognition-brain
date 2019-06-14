// import React from 'react';
import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'

// Image Recognition
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'


const app = new Clarifai.App({
	apiKey: 'a88e03476ef542019c7dd2c492738b5b'
});



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

		/* Empty to start state */
		this.state = {
			input: '',
			imageURL: ''
		};
	};

	onInputChange = (event) => {

		/* Use console, with typing to see returns and pass to faceRecognition*/
		/* console.log(event.target.value); */
		/* Change State after photo is predicted */
		this.setState({input: event.target.value})
	};

	onButtonSubmit = (event) => {
		console.log('click');
		/* Return image */
		this.setState({ imageUrl: this.state.input})

		/* For submitting to API on button click */
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
		    function(response) {
		      // do something with response
		      console.log('response returned');
		      console.log(response);
		      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
		    },
		    function(err) {
		      // there was an error
		      console.log('there was an error');
    }
  );
	}

	render(){

		return (
	    <div className="App">

			<Particles className='particles' params={particleOptions}/>

			<Navigation />
			<Logo />
			<Rank />
			{/* Takes class event with 'this.onInputChange' as property of App*/}
			{/* Needs to get triggered from impageLinkForm.js */}
			{/* Add onButtonSubmit to imageLinkForm.js to print 'here' with button click  */}
			<ImageLinkForm 
				onInputChange={this.onInputChange} 
				onButtonSubmit={this.onButtonSubmit}/>
			{/* Takes imageUrl and passes to Facerecognition.js image src */}
			<FaceRecognition imageUrl={this.state.imageUrl} /> 


	    </div>
  		);
	};
};
  

export default App;
