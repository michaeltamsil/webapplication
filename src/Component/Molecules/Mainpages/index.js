import React,{Component} from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, NavLxink} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch, Link} from 'react-router-dom'
import AllPages from './../Allpages'
import Register from './../Register'
import { Redirect } from 'react-router';
export default class Mainpages extends Component {
   constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      isLogin: false
    };

    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  success = () => {
    this.setState({
      modal: false,
      isLogin: true
    })
  }

  registers = () => {
    this.setState({
      modal: false,
      isRegis: true
    })
  }
  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }
  render(){
    let goToLoading = '';
    if (this.state.isLogin){
      goToLoading = <Redirect to="/loading"/>;
    }

  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <h1>RiverWebBase</h1>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Login?</ModalHeader>
              <ModalBody>
                  login to the RiverWebBase??
              </ModalBody>
              <ModalFooter>
              <NavLink href="./../Allpages/index.js">
                  <Button color="primary" onClick={this.success} required>OK</Button>
                  </NavLink>
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
          <Switch>
              <Route exact path="/Allpages" component={AllPages}/>
          </Switch>
          </HashRouter>
          <Form method="POST">
            <FormGroup>
              <Input type="email" name="email" id ="email" placeholder="E-mail" required/>
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="password" required/>
            </FormGroup>
            <Button color="primary" onClick={this.toggle} className="mt-4" style={{ borderRadius: 3}}><h5>{this.props.buttonLabel}Login</h5></Button>{' '}
            <Link to="/Register"><Button color="success" className="mt-4" style={{borderRadius: 3}}><h5>Register</h5></Button></Link>
          </Form>
      </header>
      { goToLoading }
    </div>
   );
 }
}