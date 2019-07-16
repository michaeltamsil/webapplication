import React,{Component} from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, NavLxink} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import AllPages from './../Allpages'
export default class Mainpages extends Component {
   constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <h1>RiverWebBase</h1>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Start?</ModalHeader>
              <ModalBody>
                  Start the RiverWebBase
              </ModalBody>
              <ModalFooter>
              <NavLink href="./../Allpages/index.js">
                  <Button color="primary" onClick={this.toggle}>OK</Button>
                  </NavLink>
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Switch>
              <Route exact path="/Allpages" component={AllPages}/>
          </Switch>
          </HashRouter>
          <Form>
            <FormGroup>
              <Input type="email" name="email" id ="email" placeholder="E-mail"/>
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="password"/>
            </FormGroup>
            <Button color="success" onClick={this.toggle} className="mt-4" style={{ borderRadius: 3}}><h1>{this.props.buttonLabel}Start</h1></Button>{' '}
          </Form>
      </header>
    </div>
   );
 }
}