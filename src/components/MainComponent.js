import React, { Component } from 'react';
import Header from './HeaderComponent';
import QuestionForm from './QuestionForm';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h4>Click on the button below to add a question</h4>
							<br></br>
							<QuestionForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;