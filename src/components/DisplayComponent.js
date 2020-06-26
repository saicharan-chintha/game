import React, { Component } from 'react';
import {Media } from 'reactstrap';
import { Card, CardSubtitle, CardBody, CardTitle, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderQuestions({questions}) {

    const  qs = questions.map((question) => {
        return (
            <div key={question.id} className="col-12 col-md-5 m-1">
                <Card body inverse style={{ backgroundColor: '#92a8d1', borderColor: '#333' }}>      
                        <CardTitle>{question.id} {")"} {question.question}</CardTitle>
                        <CardSubtitle> {question.category} </CardSubtitle>
                    <CardBody>
                        <ul>
                            <label><input type="radio" name="op" value={question.options.option1}/>{` ${question.options.option1}`}</label><br></br>
                            <label><input type="radio" name="op" value={question.options.option2}/>{` ${question.options.option2}`}</label><br></br>
                            <label><input type="radio" name="op" value={question.options.option3}/>{` ${question.options.option3}`}</label><br></br>
                            <label><input type="radio" name="op" value={question.options.option4}/>{` ${question.options.option4}`}</label>
                        </ul>
                    <Button className="bg-primary">Delete</Button>
                    </CardBody>
                </Card>     
            </div>
        );
    });

    return (
        <div className="row">
            {qs}
        </div>
    );
}

function RenderScenarios({scenarios}) {
    
    const inf = scenarios.map((info) => {
        return (
            <div key={info.id} className="col-12 col-md-5 m-1">
                <Card body inverse style={{ backgroundColor: '#92a8d1', borderColor: '#333' }}> 
                    <CardBody>
                        <p>{info.category}</p>
                        <p>{info.scenario}</p>
                        <p>{info.cstmt1}</p>
                        <p>{info.cstmt2}</p>
                        <p>{info.cstmt3}</p>
                    </CardBody>
                </Card>
            </div>
        );
    });
    
    return (
        <div className="row">
            {inf}
        </div>
    );
}

function RenderElements({elements}) {

    const el = elements.map((element) => {
        return(
            <div className="row">
                <div className="col-3">
                    {element.info}
                </div>
                <div className="col-3">
                    {element.val}
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            {el}
        </div>
    )
}

function RenderInformation({information}) {

    const inf = information.map((info) => {
        return (
            <div key={info.id} className="col-12 col-md-5 m-1">
                <Card body inverse style={{ backgroundColor: '#92a8d1', borderColor: '#333' }}>
                    <CardBody>
                        <RenderElements elements={info.elements}/>
                    </CardBody>
                </Card>
            </div>
        );
    });
    
    return (
        <div className="row">
            {inf}
        </div>
    );
}

function DisplayQuestions({questions}) {
    if(questions.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(questions.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{this.props.questions.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Display Page</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <RenderQuestions questions={questions.questions} />   
                </div>
            </div>
        );
    }
}

function DisplayScenarios({scenarios}) {
    if(scenarios.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(scenarios.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{scenarios.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Scenarios Added so far</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <RenderScenarios scenarios={scenarios.scenarios} />   
                </div>
            </div>
        );
    }
}

function DisplayInformation({information}) {
    if(information.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(information.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{information.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Information Added so far</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <RenderInformation information={information.information} />   
                </div>
            </div>
        );
    }
}

class Display extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <DisplayQuestions questions = {this.props.questions}/>
                <DisplayScenarios scenarios = {this.props.scenarios}/>
                <DisplayInformation information = {this.props.information}/> 
            </div>
        );
    }
}

export default Display;