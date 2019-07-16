import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, Container} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import Thirdpages from '.'
export default class thirdpages extends Component {
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
    <div>
      <Container className="text-center mt-4 mb-4">
       
       <h2 className="mt-4 mb-4">Web Application</h2>
     <iframe width="100%" height="450" frameborder="0" src="https://riverweather.netlify.com"></iframe>
       <Button color="success" onClick={this.toggle} className="mt-4" ><h4>Start</h4></Button>{' '}
       <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalHeader toggle={this.toggle}>Use the Application?</ModalHeader>
           <ModalBody>
               Use the Application with fullscreen by paying 5$
           </ModalBody>
           <ModalFooter>
               <Button color="primary" href="https://riverweather.netlify.com/">OK</Button>
               <Button color="danger" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>
       </Modal>
       </Container>
    </div>
   );
 }
}