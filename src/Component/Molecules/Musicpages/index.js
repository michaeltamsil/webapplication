import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, Container} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import Musicpages from '.'
import MusicPlayer from 'react-responsive-music-player';

import Sound from 'react-sound';
import naruto_silhouette from './naruto_silhouette.mp3'
import naruto from './naruto.jpg'
export default class musicpages extends Component {

  render(){
      const playlist = [{
          url:'./naruto_silhouette.mp3',
          cover:'./naruto.jpg',
          title:'Silhouette',
          artist:['Kana-Boon']
      }]
  return (
    <Container>
    <div className="App">
    <MusicPlayer playlist={playlist} />
    </div>
    </Container>
   );
 }
}