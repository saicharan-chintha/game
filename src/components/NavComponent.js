import React, { Component } from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, Button, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/display">
                                        <span className="fa fa-eye fa-lg"></span> Review
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/head">
                                        <span className="fa fa-plus fa-lg"></span> Add Content
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavComponent;