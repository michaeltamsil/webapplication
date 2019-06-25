import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar, Container, Card, Row, Col} from 'reactstrap'

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
        <Container className="text-center mt-4 mb-4">
        <h1 className="mb-4">Game</h1>
        <iframe width="100%" height="450" frameborder="0" src="https://riverhuang-batam.github.io/snakegameriv/snakegameriv/snakegame.html" ></iframe>
          <Button color="success" onClick={this.toggle}  className="mt-4" ><h4>Start</h4></Button>{' '}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>play the game?</ModalHeader>
              <ModalBody>
                  play the game fullscreen by paying 5$
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" href="https://riverhuang-batam.github.io/snakegameriv/snakegameriv/snakegame.html">OK</Button>
                  <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
          </Container>

      </header>
    </div>
    
   );
 }
}