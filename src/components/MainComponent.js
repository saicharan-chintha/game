import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { postQuestion } from '../redux/ActionCreators';

const mapStateToProps = state => {
	return {
		questions : state.questions
	}
}

const mapDispatchToProps = dispatch => ({
	postQuestion: (category, question, comment) => dispatch(postQuestion(category, question, comment))
});

class Main extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h4>Click on the button below to add a question</h4>
							<br></br>
							<QuestionForm postQuestion={this.props.postQuestion}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);