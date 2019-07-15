import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar, Container, Card, Row, Col} from 'reactstrap'
import Game from './../../Atom/Game'
import Popup from 'reactjs-popup'
export default class Allpages extends Component {
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
    
    <div >
      <header >
        <Navbar>

        <h2 color="primary">RiverWebBase</h2>

        </Navbar>
        <Container className="text-center mt-4 mb-4">
        <Game/>
       
          <h1 className="mt-4 mb-4">Web Application</h1>
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

      </header>
    </div>
    
   );
 }
}