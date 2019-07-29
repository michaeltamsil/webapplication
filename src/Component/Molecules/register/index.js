import React,{Component} from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import AllPages from './../Allpages'
import { Redirect } from 'react-router';
export default class register extends Component {
 
render(){
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <h1>RiverWebBase</h1>
        
          </HashRouter>
          <Form method="POST">
            <FormGroup>
              <Input type="email" name="email" id ="email" placeholder="E-mail" required/>
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="password" required/>
            </FormGroup>
            <Button color="primary" className="mt-4" onClick={this.success} style={{ borderRadius: 3}}><h5>confirm</h5></Button>{' '}
          </Form>
      </header>
 
    </div>
   );
 }
}