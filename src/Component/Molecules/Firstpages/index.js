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
export default class Allpages extends Component {

  render(){
  return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container className="text-center mt-6">
        <div>
        <h2>Welcome to the RiverWebBase !!</h2>
        </div>
        <div className="mt-4">
          <h3>RiverWebBase is WebApplication for entertainment</h3>
        </div>
        <div>
          <h3>Enjoy The WebApplication</h3>
        </div>
        
        <div className="mt-4">
        <Spinner type="grow" color="primary"/>
        <Spinner type="grow" color="primary"/>
        <Spinner type="grow" color="primary"/>
        </div>
        </Container>
        </div>
   );
 }
}
 
 
 
 
 