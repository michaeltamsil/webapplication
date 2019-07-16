import React,{Component} from 'react';
import './App.css'
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
    <div>
      <div>
        <DarkTheme light={lightTheme} dark={darkTheme}/>
      </div>

    </div>
   );
 }
}