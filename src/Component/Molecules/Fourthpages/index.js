import React,{Component} from 'react';
import './App.css'
import {Row, Col, Container} from 'reactstrap' 
import DarkTheme from 'react-dark-theme'
import Fourthpages from '.'
import ImageUploader from 'react-images-upload'
import StarRatingComponent from 'react-star-rating-component'

const lightTheme = {
  
  background: 'white',
  text: 'black',
}
const darkTheme ={
  background: 'black',
  text: 'white',
}
export default class fourthpages extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  
  render(){
    
    const { rating } = this.state;
  return (
    <div className="text-center"><h2>Rating from state: {rating}</h2>
    <h1>
    <StarRatingComponent 
      name="rate1" 
      starCount={10}
      value={rating}
      onStarClick={this.onStarClick.bind(this)}
    /></h1>
       <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
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