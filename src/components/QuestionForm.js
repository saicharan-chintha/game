import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
//const maxLength = (len) => (val) => !(val) || (val.length <= len);
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
        this.props.postQuestion(values.category,values.question,values.comment,values.option1,values.option2,values.option3,values.option4,values.answer);
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
                                        required, minLength: minLength(3)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".question"
                                    show="touched"
                                    messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters '
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="">Add Options</Label>
                            <Col sm={{size:5}} className="mb-2">
                                <Control.text model=".option1" id="option1" name="option1"
                                    placeholder="Option 1"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".option1"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
                                    }}
                                />
                            </Col>
                            <Col sm={{size:5, offset:1}} className="mb-2">
                                <Control.text model=".option2" id="option2" name="option2"
                                    placeholder="Option 2"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".option2"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
                                    }}
                                />
                            </Col>
                            <Col sm={{size:5}} className="mb-2">
                                <Control.text model=".option3" id="option3" name="option3"
                                    placeholder="Option 3"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".option3"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
                                    }}
                                />
                            </Col>
                            <Col sm={{size:5, offset:1}} className="mb-2">
                                <Control.text model=".option4" id="option4" name="option4"
                                    placeholder="Option 4"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".option4"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label className="col-12" htmlFor="answer">Correct Option</Label>
                            <Col>
                                <Control.text model=".answer" id="answer" name="answer"
                                    placeholder="Correct Option"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".answer"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
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