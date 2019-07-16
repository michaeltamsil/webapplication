import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar, Container, Card, Row, Col, Spinner} from 'reactstrap'
import Game from './../../Atom/Game'
import Popup from 'reactjs-popup'
import {HashRouter,Switch,NavLink, Route} from 'react-router-dom'
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import {FaHome, FaGamepad} from 'react-icons/fa'
import {MdApps, MdMusicNote} from 'react-icons/md'
import {TiAdjustBrightness} from 'react-icons/ti'
import {GoGear} from 'react-icons/go'
import Secondpages from '../Secondpages';
import Firstpages from './../Firstpages'
import Thirdpages from './../ThirdPages'
import Musicpages from './../Musicpages'
import Fourthpages from './../Fourthpages'
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
        <HashRouter>
        <SideNav >
          <SideNav.Toggle/>
          <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon >
            <NavLink to="home">
              <h2>
                <FaHome/>
              </h2>
              </NavLink>
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        
        <NavItem eventKey="Game">
            <NavIcon>
            <NavLink to="game">
              <h2>
                <FaGamepad/>
              </h2>
        </NavLink>
            </NavIcon>
            <NavText>
                Game
            </NavText>
        </NavItem>

        <NavItem eventKey="MdApps">
          
            <NavIcon>
            <NavLink to="Application">
              <h2>
                <MdApps/>
              </h2>
              </NavLink>
            </NavIcon>
            <NavText>
                Application
            </NavText>
            
        </NavItem>
        
        <NavItem eventKey="MdMusicNote">
            <NavIcon>
            <NavLink to="Music">
              <h2>
                <MdMusicNote/>
              </h2>
              </NavLink>
            </NavIcon>
            <NavText>
              Music
            </NavText>
            
        </NavItem>
        
        <NavItem eventKey="GoGear">
            <NavIcon>
            <NavLink to="Settings">
              <h2>
                <GoGear/>
              </h2>
              </NavLink>
            </NavIcon>
            <NavText>
                Settings
            </NavText>
            
        </NavItem>
          </SideNav.Nav>

        </SideNav>
        
        <Navbar>
        <Container className="mt-4">
        <h2>RiverWebBase</h2>
        </Container>
        </Navbar>
        <br/>
        <Container>
        <Switch>
                        <Route exact path="/"component ={Firstpages}/>
                        <Route exact path="/Home"component ={Firstpages}/>
                        <Route exact path="/Game"component={Game}/>
                        <Route exact path="/Application"component={Thirdpages}/>
                        <Route exact path="/Music"component={Musicpages}/>
                        <Route exact path="/Settings"component={Fourthpages}/>
                    </Switch>
                    </Container> 
        
        </HashRouter>
      </header>
    </div>
    
   );
 }
}