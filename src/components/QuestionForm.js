import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class QuestionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isFormModalOpen : false
        }
        this.toggleFormModal = this.toggleFormModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
        this.toggleFormModal();
        console.log("Current state is: "+JSON.stringify(values));
        alert("Current state is: "+JSON.stringify(values));
    }

    toggleFormModal() {
        this.setState({
            isFormModalOpen : !this.state.isFormModalOpen
        });
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleFormModal}>
                    <span className="fa fa-pencil fa-lg"></span> Add a Question
                </Button>
                <Modal isOpen={this.state.isFormModalOpen} toggle={this.toggleFormModal}>
                <ModalHeader toggle={this.toggleFormModal}>Add a question</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label className="col-12">Category</Label>
                            <Col>
                                <Control.select model=".category" name="category"
                                    className="form-control">
                                    <option>Self-Awareness</option>
                                    <option>Self-Management</option>
                                    <option>Responsible Decision-Making</option>
                                    <option>Social Awareness</option>
                                    <option>Relationship Skills</option>
                                    <option>Other</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="question">Question</Label>
                            <Col>
                                <Control.text model=".question" id="question" name="question"
                                    placeholder="Add a Question"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters ',
                                        maxLength: 'Must be 15 characters or less '
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="comment"> Comment</Label>
                            <Col>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control" 
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            	</Modal> 
            </div>
        );
    }	
}

export default QuestionForm;