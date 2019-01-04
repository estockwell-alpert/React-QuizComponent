import React, {Component} from 'react'
let quizData = require('./quiz_data.json')

class Quiz extends Component{
	constructor(props){
		super(props)
		this.state = {
			quiz_position: 1
		}
	}
	render(props){
		return(
			<div>
				<h1>Quiz</h1>
				<h2 className={"quizQuestions"}>{this.state.quiz_position}: {quizData.quiz_questions[0].instruction_text}:</h2>
			</div>
		)
	}
}

export default Quiz

