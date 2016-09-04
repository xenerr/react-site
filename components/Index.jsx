import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image.jsx';
export default class Index extends Component {
  render() {
    const images = ['./src/img/logo.gif', '/image2.jpg', '/image3.jpg'];
    return (
      <div className="header">
        <h1>Hello World</h1>
        { images.map((imageSource) => <Image source={imageSource} />) }
      </div>
    )
  }
} 
ReactDOM.render(<Index/>, document.querySelector('main'));