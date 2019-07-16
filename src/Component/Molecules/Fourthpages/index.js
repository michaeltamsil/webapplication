import React,{Component} from 'react';
import './App.css'
import { Button, Modal, ModalHeader,Spinner, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, NavLxink} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import {FaBeer} from 'react-icons/fa'
import {MdSettings} from 'react-icons/md'
import Fourthpages from '.'
export default class fourthpages extends Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div>
       <Spinner color="primary" className="spin"/>
       <h1>
       <FaBeer/>
       <MdSettings/>
       </h1>
       </div>
      </header>
    </div>
   );
 }
}