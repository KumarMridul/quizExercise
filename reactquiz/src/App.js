import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './question.js';

class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      quizData :{},
      selectedquizData: []
  }
	}
	
  render() {
   const questions = this.renderQuestions();
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Quiz</h1>
        </header>
        <p className="App-intro"> </p>
         Please answer all the answers.
         <div>
         { questions }
         <button className='button' onClick={ this.handleSubmit }>
              Submit
          </button>
        </div>
      </div>
    );
  }
     /*const showQuiz = (quizData) => {
		if(quizData !== ''){
			debugger;
		}
	}*/
  componentDidMount() {
    this.setState({
      quizData: {"quiz":[
        { "id": 1, "question": "words starts with a", "options": [{"option":"abc","id":"1","name":"first"},{"option":"bcd","id":"2","name":"first"},{"option":"efg","id":"3","name":"first"},{"option":"hij","id":"4","name":"first"}] },
        { "id": 2, "question": "words starts with a", "options": [{"option":"abc","id":"1","name":"second"},{"option":"bcd","id":"2","name":"second"},{"option":"efg","id":"3","name":"second"},{"option":"hij","id":"4","name":"second"}]  },
        { "id": 3, "question": "words starts with a", "options": [{"option":"abc","id":"1","name":"third"},{"option":"bcd","id":"2","name":"third"},{"option":"efg","id":"3","name":"third"},{"option":"hij","id":"4","name":"third"}]  }
    ]}
  });
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

    renderQuestions = () => {
      const quizData = this.state.quizData;
     if(Object.keys(quizData).length > 0) {
        const html = quizData.quiz.map( ( obj, i ) => {
          let itemProp = {
              question: obj.question,
              id:obj.id,
              options:obj.options,
              index: i
          };
         return <Question key={ i } {...itemProp} updateResponse={this.updateResponse} />
       });
       return  html;
     }
    
    }

    updateResponse = (questionId, selectedOptionId) => {
      let selectedQuizData=[],
      optionSelected= {'questionId': '', 'selectedOptionId':''};
      optionSelected.questionId=questionId;
      optionSelected.selectedOptionId=selectedOptionId;
      
      var arrayvar = this.state.selectedquizData;
      arrayvar=this.updateResponseData(questionId, arrayvar, optionSelected);
      this.setState({ selectedquizData: arrayvar })
    }
    updateResponseData = (id, items, option) => {
      let isPresent= false;
      for (let i = 0; i < items.length; i++) {
        if (id === items[i].questionId) {
          items[i].selectedOptionId=option.selectedOptionId;
          isPresent = true;
        }
      }
      if (!isPresent){
        items.push(option);
      }
      return items;
    }

    handleSubmit = () => {
      if (window.confirm("Are you sure you want to submit?") == true) {
         this.callService();
      } 
    }

    callService = () => {
      console.log(this.state.selectedquizData);
    }
}

export default App;
