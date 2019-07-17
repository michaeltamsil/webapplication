import React,{Component} from 'react';
import './App.css'
import {Row, Col, Container} from 'reactstrap' 
import DarkTheme from 'react-dark-theme'
import Fourthpages from '.'

const lightTheme = {
  background: 'white',
  text: 'black',
}
const darkTheme ={
  background: 'black',
  text: 'white',
}
export default class fourthpages extends Component {
  
  render(){
  return (
    <div className="text-center">
      <Row><Col>
      <div >
      <h5> Website Theme   </h5>
      </div>
      </Col>
      <Col>
      <DarkTheme light={lightTheme} dark={darkTheme}/>
      </Col>
      </Row>
      <Row>
      <Col>
      <div >
      <h5> Website Theme   </h5>
      </div>
      </Col>
      <Col>
      <DarkTheme light={lightTheme} dark={darkTheme}/>
      </Col>
      </Row>
    </div>
   );
 }
}