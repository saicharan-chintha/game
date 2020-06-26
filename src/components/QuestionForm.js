import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
//const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class QuestionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isFormModalOpen : false,
            isScenarioModalOpen : false,
            isInfoModalOpen : false,
            curMatchIndex : 1,
            match: []
        }
        this.toggleFormModal = this.toggleFormModal.bind(this);
        this.toggleScenarioModal = this.toggleScenarioModal.bind(this);
        this.toggleInfoModal = this.toggleInfoModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleScenarioSubmit = this.handleScenarioSubmit.bind(this);
        this.handleInfoSubmit = this.handleInfoSubmit.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
	}

	handleSubmit(values) {
        this.toggleFormModal();
        console.log("Current state is: "+JSON.stringify(values));
        //alert("Current state is: "+JSON.stringify(values));
        this.props.postQuestion(values.category,values.question,values.comment,values.option1,values.option2,values.option3,values.option4,values.answer);
    }

    handleScenarioSubmit(values) {
        this.toggleScenarioModal();
        console.log("Current state is: "+JSON.stringify(values));
        //alert("Current state is: "+JSON.stringify(values));
        this.props.postScenario(values.category,values.scenario,values.stmt1,values.stmt2,values.stmt3,values.cstmt1,values.cstmt2,values.cstmt3);
    }

    handleInfoSubmit(values) {
        var data = { info: values.info, val: values.val, id: this.state.curMatchIndex };
        this.setState({
        curMatchIndex: this.state.curMatchIndex + 1,
        match: [...this.state.match, data]
        });
    }

    sendInfo() {
        var postData = this.state.match;
        this.props.postMatch(postData);
    }

    toggleFormModal() {
        this.setState({
            isFormModalOpen : !this.state.isFormModalOpen
        });
    }

    toggleScenarioModal() {
        this.setState({
            isScenarioModalOpen : !this.state.isScenarioModalOpen
        });
    }

    toggleInfoModal() {
        this.setState({
            isInfoModalOpen : !this.state.isInfoModalOpen
        });
    }

    render() {
        return(
                  <div className="container">
                    <div className="row">
                      <div className="col-12 mb-4 mt-3">
                        <h4>Click on the buttons below to add content</h4>
                      </div>
                      <div className=" col-12 col-md-6 mb-4">
                        <center>
                        <div size="lg" className="mb-3 box" outline>
                            Questions&nbsp;
                            <br></br>
                            <Button outline onClick={this.toggleFormModal} className="bg-primary mr-4 btnbox">
                              <span className="fa fa-lg fa-pencil"></span> Add
                            </Button>
                        </div>
                        </center>
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <center>
                        <div size="lg" className="mb-3 box" outline>
                          Scenarios&nbsp;&nbsp;
                          <br></br>
                          <Button outline onClick={this.toggleScenarioModal} className="bg-primary mr-4 btnbox">
                            <span className="fa fa-lg fa-pencil"></span> Add
                          </Button>
                        </div>
                        </center>
                      </div>
                      <div className="col-12 offset-md-3 col-md-6 mb-4">
                        <center>
                        <div outline size="lg" className="mb-3 box">
                           Match Information
                          <br></br>
                          <Button outline onClick={this.toggleInfoModal} className="bg-primary mr-4 btnbox">
                            <span className="fa fa-lg fa-pencil"></span> Add
                          </Button>
                        </div>
                        </center>
                      </div>

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

                        <Modal isOpen={this.state.isScenarioModalOpen} toggle={this.toggleScenarioModal}>
                        <ModalHeader toggle={this.toggleScenarioModal}>Add a Scenario</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleScenarioSubmit(values)}>
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
                                    <Label className="col-12" htmlFor="scenario"> Add a Scenario</Label>
                                    <Col>
                                        <Control.textarea model=".scenario" id="scenario" name="scenario"
                                            rows="6"
                                            className="form-control" 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12">Add next actions to take in shuffled order</Label>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="stmt1">Statement 1</Label>
                                    <Col>
                                        <Control.text model=".stmt1" id="stmt1" name="stmt1"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".stmt1"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="stmt2">Statement 2</Label>
                                    <Col>
                                        <Control.text model=".stmt2" id="stmt2" name="stmt2"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".stmt2"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="stmt3">Statement 3</Label>
                                    <Col>
                                        <Control.text model=".stmt3" id="stmt3" name="stmt3"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".stmt3"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12">Add next actions to take in correct order</Label>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="cstmt1">Statement 1</Label>
                                    <Col>
                                        <Control.text model=".cstmt1" id="cstmt1" name="cstmt1"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".cstmt1"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="cstmt2">Statement 2</Label>
                                    <Col>
                                        <Control.text model=".cstmt2" id="cstmt2" name="cstmt2"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".cstmt2"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label className="col-12" htmlFor="cstmt3">Statement 3</Label>
                                    <Col>
                                        <Control.text model=".cstmt3" id="cstmt3" name="cstmt3"
                                            placeholder="Add"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".cstmt3"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
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

                        <Modal isOpen={this.state.isInfoModalOpen} toggle={this.toggleInfoModal}>
                        <ModalHeader toggle={this.toggleInfoModal}>Add Matching objects one by one</ModalHeader>
                        <ModalBody>
                            <Form model="infoForm" onSubmit={(values) => this.handleInfoSubmit(values)}>
                                <Row>
                                    <Col sm={{size:5}} className="mb-2">
                                        <Control.text model=".info" id="info" name="info"
                                            placeholder="Information"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".info"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                    <Col sm={{size:5, offset:1}} className="mb-2">
                                        <Control.text model=".val" id="val" name="val"
                                            placeholder="Value"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".val"
                                            show="touched"
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Add
                                        </Button>
                                        <Button className="bg-success" onClick={this.sendInfo}>
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                                </Form>
                        </ModalBody>
                        </Modal>
                </div>
            </div>
        );
    }	
}

export default QuestionForm;