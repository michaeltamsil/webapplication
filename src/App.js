import React,{Component} from 'react';
//import './App.css';
import Allpages from './Component/Molecules/Allpages'
import Mainpages from './Component/Molecules/Mainpages'
import Loadingpages from './Component/Molecules/Loadingpages'
import {HashRouter, Switch, Route} from 'react-router-dom'
export default class riverwebbase extends Component{
  render(){
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component ={Mainpages}/>
        <Route exact path="/loading" component={Loadingpages}/>
        <Route path="" component={Allpages}/>
      </Switch>
    </HashRouter>
  );
}
}

