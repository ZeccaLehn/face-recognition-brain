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

// Signin
import Signin from './Components/Signin/Signin.js';
import Register from './Components/Register/Register.js';

// YOUR_API_KEY
const app = new Clarifai.App({
	apiKey: 'YOUR_API_KEY'
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
			imageURL: {},
			box: {},
			route: 'signin',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				password: '',
				email: '',
				entries: 0,
				joined: ''

			}
		};
	};

	// Updates state with new users from Register component
	loadUser = (data) => {

	    this.setState({user: {
		      id: data.id,
		      name: data.name,
		      email: data.email,
		      entries: data.entries,
		      joined: data.joined
	    	}})
	}

	// // Conntect Front and Back End
	// Prints data to cosole
	// componentDidMount(){
	// 	fetch('http://localhost:5000')
	// 		.then(response => response.json())
	// 		.then(data => console.log(data))
	// }

	calculateFaceLocation = (data) => {
	    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
	    const image = document.getElementById('inputimage');
	    const width = Number(image.width);
	    const height = Number(image.height);
	    return {
	      leftCol: clarifaiFace.left_col * width,
	      topRow: clarifaiFace.top_row * height,
	      rightCol: width - (clarifaiFace.right_col * width),
	      bottomRow: height - (clarifaiFace.bottom_row * height)
	    };
	  }

	displayFaceBox = (box) => {
		this.setState({box: box});
	}

	onInputChange = (event) => {

		/* Use console, with typing to see returns and pass to faceRecognition*/
		/* console.log(event.target.value); */
		/* Change State after photo is predicted */
		this.setState({input: event.target.value})
	};

	onButtonSubmit = (event) => {
		// console.log('click');
		/* Return image */
		this.setState({ imageUrl: this.state.input})

		/* For submitting to API on button click */
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response))
			.catch(err => console.log(err))
  		);
	}

	// Prop used below in Signin
	onRouteChange = (route) => {
		
		if(route === 'signin'){

			this.setState({isSignedIn: false});

		} else if (route === 'home'){

			this.setState({isSignedIn: true});

		}
		
		this.setState({route: route})
	};

	render(){

		// For passing components
		const { isSignedIn, imageUrl, box } = this.state;

		return (
			// Destructured states for cleaner code below without this.state.___
			
		    <div className="App">

				<Particles className='particles' params={particleOptions}/>

				<Navigation
					isSignedIn={isSignedIn}
					onRouteChange={this.onRouteChange}
					  />
				<Logo />

				{/*  Signin Page first unless logged in already */}
				{ this.state.route === 'home'
					// Prop onRouteChange
					? <div>
						<Rank name={this.state.user.name} entries={this.state.user.entries}/>
						{/* Takes class event with 'this.onInputChange' as property of App*/}
						{/* Needs to get triggered from impageLinkForm.js */}
						{/* Add onButtonSubmit to imageLinkForm.js to print 'here' with button click  */}
						<ImageLinkForm
							onInputChange={this.onInputChange} 
							onButtonSubmit={this.onButtonSubmit}/>
						{/* Takes imageUrl and passes to Facerecognition.js image src */}
						<FaceRecognition box={box} imageUrl={imageUrl} /> 

					</div>

					: ( this.state.route === 'signin'

						? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
						: <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
					)
						
				}

		    </div>
  		);
	};
};
  

export default App;
