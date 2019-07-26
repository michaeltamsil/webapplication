import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Nav, NavItem, Container, Row, Col} from 'reactstrap'
import {HashRouter,NavLink, Route,Switch} from 'react-router-dom'
import Musicpages from '.'
import MusicPlayer from 'react-responsive-music-player';
import naruto_silhouette from './naruto_silhouette.mp3'
import naruto from './naruto.jpg'
import bokunohero from './bokunoheroacademia.png'
import bokunoheromp from './bokunohero.mp3'
import tokyoghoulmp from './tokyoghoul.mp3'
import tokyoghoul from './tokyoghoul.jpg'
export default class musicpages extends Component {

  render(){
      const playlist = [{
          url:naruto_silhouette,
          cover:naruto,
          title:'Silhouette',
          artist:['Kana-Boon']
      }]
      const playlist1 = [{
        url:bokunoheromp,
        cover:bokunohero,
        title:'Peace Sign',
        artist:['Kenshi Yonezu']  
   
    }]
     const playlist2 = [{
        url:tokyoghoulmp,
        cover:tokyoghoul,
        title:'Unravel',
        artist:['TK']
  }]
  return (<div><h1 className="text-center">Music</h1>
      <Row><Col sm="12" md={{ size: 8, offset: 3 }}>
    <div className="text-center">
    
    <MusicPlayer playlist={playlist} />
    <br/>
    <br/>
    <MusicPlayer playlist={playlist1} />
    <br/>
    <br/>
    <MusicPlayer playlist={playlist2} />
    </div>
    </Col></Row>
    </div>
   );
 }
}