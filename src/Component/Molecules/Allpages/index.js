import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar, Container, Card, Row, Col} from 'reactstrap'
import Game from './../../Atom/Game'
import Popup from 'reactjs-popup'
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import {FaHome, FaGamepad} from 'react-icons/fa'
import {MdApps, MdMusicNote} from 'react-icons/md'
import {TiAdjustBrightness} from 'react-icons/ti'
import {GoGear} from 'react-icons/go'
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
        
        <SideNav 
        
        
        >
          <SideNav.Toggle/>
          <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon >
              <h2>
                <FaHome/>
              </h2>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="Game">
            <NavIcon>
              <h2>
                <FaGamepad/>
              </h2>
            </NavIcon>
            <NavText>
                Game
            </NavText>
        </NavItem>
        <NavItem eventKey="MdApps">
            <NavIcon>
              <h2>
                <MdApps/>
              </h2>
            </NavIcon>
            <NavText>
                Application
            </NavText>
            
        </NavItem>
        
        <NavItem eventKey="MdMusicNote">
            <NavIcon>
              <h2>
                <MdMusicNote/>
              </h2>
            </NavIcon>
            <NavText>
              Music
            </NavText>
            
        </NavItem>
        
        <NavItem eventKey="GoGear">
            <NavIcon>
              <h2>
                <GoGear/>
              </h2>
            </NavIcon>
            <NavText>
                Settings
            </NavText>
            
        </NavItem>
          </SideNav.Nav>

        </SideNav>
        
        <Navbar>
<Container className="mt-4">
        <h2 color="primary">RiverWebBase</h2>
          <Button><TiAdjustBrightness/></Button>
          </Container>
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