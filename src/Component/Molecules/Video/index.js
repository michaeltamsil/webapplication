import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, Container} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
export default class video extends Component {
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
      <Container className="text-center mt-4 mb-4">
        <iframe width="727" height="409" src="https://www.youtube.com/embed/PELys8li6lY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </Container>
    </div>
   );
 }
}