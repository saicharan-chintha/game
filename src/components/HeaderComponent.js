import React, { Component } from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, Button, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Add the information </h1>
								<p><i>By filling the form below</i></p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</React.Fragment>  
		);
	}
}

export default Header;

