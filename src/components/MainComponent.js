import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postQuestion, postUser, postMatch, postScenario, fetchQuestions, fetchInfo, fetchScenarios } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import QuestionForm from './QuestionForm';
import Display from './DisplayComponent';
import NavComponent from './NavComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
	return {
		questions : state.questions,
		information : state.information,
		scenarios : state.scenarios
	}
}

const mapDispatchToProps = dispatch => ({
	fetchQuestions: () => dispatch(fetchQuestions()),
	fetchScenarios: () => dispatch(fetchScenarios()),
	fetchInfo: () => dispatch(fetchInfo()),
	resetInfoForm : () => { dispatch(actions.reset('infoForm')) },
	postUser:(firstname,lastname,username,password) =>{dispatch(postUser(firstname,lastname,username,password))},
	postQuestion: (category, question, comment, option1, option2, option3, option4, answer) => dispatch(postQuestion(category, question, comment, option1, option2, option3, option4, answer)),
	postMatch: (element) => {dispatch(postMatch(element))},
	postScenario: (category,scenario,stmt1,stmt2,stmt3,cstmt1,cstmt2,cstmt3) => { dispatch(postScenario(category,scenario,stmt1,stmt2,stmt3,cstmt1,cstmt2,cstmt3)) }
});

class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchQuestions();
		this.props.fetchScenarios();
		this.props.fetchInfo();
	}
	
	render() {

		const DisplayPage= () => {
			return (
				<Display  
					questions= {this.props.questions}
					information = {this.props.information}
					scenarios = {this.props.scenarios}
					/>
			);
		};

		const QForm = () => { 
		    return (
			<QuestionForm 
				postQuestion={this.props.postQuestion} 
				postMatch={this.props.postMatch}
				postScenario={this.props.postScenario}
				resetInfoForm={this.props.resetInfoForm} 
			/>
			);
		};
		return (
			<div>
				<NavComponent />
				<Switch>
					<Route path="/head" component={()=><Header postUser={this.props.postUser}/>} />
					<Route path="/questionForm" component={QForm} />
					<Route path="/display" component={DisplayPage} />
					<Route path="/about" component={About} />
					<Redirect to="/head" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));