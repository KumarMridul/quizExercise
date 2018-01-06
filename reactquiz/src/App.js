import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {quizData :''}
	}
	
  render() {
	  //showQuiz(this.state.quizData);
	  var a = this.state.quizData;
	  debugger;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
     /*const showQuiz = (quizData) => {
		if(quizData !== ''){
			debugger;
		}
	}*/
  componentDidMount() {
    //   fetch('http://localhost:3000/quiz',{
		// method:'GET'
		// }
		// ).then((response) => {
    //   debugger;
		// 	return response.json().then(json => {
		// 		this.setState({
    //             quizData: json
    //         });
		// 	});
		// });
    }
	
}

export default App;
