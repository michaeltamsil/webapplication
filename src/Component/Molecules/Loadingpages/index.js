import React,{Component} from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, NavLink, Spinner} from 'reactstrap'
import {HashRouter, Route,Switch} from 'react-router-dom'
import { Redirect } from 'react-router';
import Loadingpages from '.'
export default class loadingpages extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        redirect: true
      })
    }, 3000)
  }
  render(){
    let tagHtml = '';
    if (this.state.redirect){
      tagHtml = <Redirect to="/home"/>;
    }
      

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>RiverWebBase</h1>
        <Spinner color="primary"/>
      </header>
      { tagHtml }
    </div>
   );
 }
}