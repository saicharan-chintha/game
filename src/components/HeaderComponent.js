import React, { Component } from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, Button, ModalHeader, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
//import  QuestionForm  from './QuestionComponent';
import { Link,Redirect,withRouter } from 'react-router-dom';

const required = (val) => val && val.length;

class Header extends Component {
	constructor(props) {
		super(props);
		this.state={
			isNavOpen:false,
			isLoginModalOpen:false,
			isSignUpModalOpen:false,
			isRedirect:false
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);		
	}

	toggleNav(){
		this.setState({
			isNavOpen:!this.state.isNavOpen
		});
	}

	toggleLoginModal(){
		this.setState({
			isLoginModalOpen:!this.state.isLoginModalOpen
		})
	}

	toggleSignUpModal(){
		this.setState({
			isSignUpModalOpen:!this.state.isSignUpModalOpen
		})
	}

	handleLogin(event){
		this.toggleLoginModal();
		this.props.history.push('/questionForm');
	}

	handleSignUp(values){
		this.toggleSignUpModal();
		this.props.postUser(values.firstname,values.lastname,values.username,values.password);
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand="md">
	          		<div className="container">
	          			<NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="center" navbar>
                            	<NavItem className="mr-3 mt-2 mb-1 offset-2">
                            		<Button outline onClick={this.toggleLoginModal}>
                            			<span className="fa fa-sign-in fa-lg">Login&nbsp;&nbsp;&nbsp;</span>
                            		</Button>
                            	</NavItem>
                            	<NavItem className="mt-2">
                            		<Button outline onClick={this.toggleSignUpModal}>
                            			<span className="fa fa-user fa-lg">Sign Up</span>
                            		</Button>
                            	</NavItem>
                            </Nav>
                        </Collapse>
	          		</div>
	        	</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h2>Add More Content</h2>
								<p>Enter the information after authentication</p>
							</div>
						</div>
					</div>
            	</Jumbotron>
	        	<Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
	        		<ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={this.handleLogin.bind(this)}>
	        				<Row className="form-group">
	        					<Label htmlFor=".username" md={12}>Username</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" 
                                    name="username" placeholder="Userame" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".password" md={12}>Password</Label>
                                <Col md={12}>
                                    <Control.password model=".password" id="password" 
                                    name="password" placeholder="Password" 
                                    className="form-control"
                                    />
                                </Col>
	        				</Row>
	        				<Button type="submit" value="submit" className="bg-primary">Login</Button>
	        			</LocalForm>
	        		</ModalBody>
	        	</Modal>
	        	<Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
	        		<ModalHeader toggle={this.toggleSignUpModal}>Sign Up</ModalHeader>
	        		<ModalBody>
	        			<LocalForm onSubmit={(values)=>this.handleSignUp(values)}>
	        				<Row className="form-group">
	        					<Label htmlFor=".firstname" md={12}>First Name</Label>
                                <Col md={12}>
                                    <Control.text model=".firstname" id="firstname" 
                                    name="firstname" placeholder="First Name" 
									className="form-control"
									validators={{
										required
									}}
                                    />
									<Errors
										className="text-danger"
										model=".firstname"
										show="touched"
										messages={{
											required: 'Required '
										}}
									/>
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".lastname" md={12}>Last Name</Label>
                                <Col md={12}>
                                    <Control.text model=".lastname" id="lastname" 
                                    name="lastname" placeholder="Last Name" 
									className="form-control"
									validators={{
										required
									}}
                                    />
									<Errors
										className="text-danger"
										model=".lastname"
										show="touched"
										messages={{
											required: 'Required '
										}}
									/>
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".username" md={12}>Username</Label>
                                <Col md={12}>
                                    <Control.text model=".username" id="username" 
                                    name="username" placeholder="Userame" 
									className="form-control"
									validators={{
										required
									}}
                                    />
									<Errors
										className="text-danger"
										model=".username"
										show="touched"
										messages={{
											required: 'Required '
										}}
									/>
                                </Col>
	        				</Row>
	        				<Row className="form-group">
	        					<Label htmlFor=".password" md={12}>Password</Label>
                                <Col md={12}>
                                    <Control.password model=".password" id="password" 
                                    name="password" placeholder="Password" 
									className="form-control"
									validators={{
										required
									}}
                                    />
									<Errors
										className="text-danger"
										model=".password"
										show="touched"
										messages={{
											required: 'Required '
										}}
									/>
                                </Col>
	        				</Row>
	        				<Button type="submit" value="submit" className="bg-primary" >Register</Button>
	        			</LocalForm>
	        		</ModalBody>
	        	</Modal>			
			</React.Fragment>  
		);
	}
}

export default withRouter(Header);

