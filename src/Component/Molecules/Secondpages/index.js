import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, Container} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import Secondpages from '.'
import Game from './../../Atom/Game'
export default class secondpages extends Component {
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
      <Container className="text-center mt-4 mb-4">
        <Game/>
        </Container>
      </header>
    </div>
   );
 }
}