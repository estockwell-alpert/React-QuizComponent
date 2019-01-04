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
			<div className={"quizQuestion"}>{this.state.quiz_position}: {quizData.quiz_questions[0].instruction_text}:</h2>
		)
	}
}

export default Quiz

