import React,{ Component } from 'react'; 
import Person from './Person';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="marge">
        
          <ul className="head">
            <li>LOGO</li>
            <li>PRODUCTS</li>
            <li>LOCATION</li>
            <li>CONTACT US</li>
            <li>ABOUT US</li>
            <li><button type="button">ORDER NOW</button></li>
          </ul>
        
        
        </div>
        <Person/>
        <div className="footer">
          <div className="inlineBlock">
            <ul>
              <li>Colors</li>
              <li>Prices</li>
              <li>Sizes</li>
              <li>Materials</li>
              <li>Woods</li>
              <li>Plastics</li>
            </ul>
            </div>
          <div className="inlineBlock">
          <ul>
             <li>Colors</li>
              <li>Prices</li>
              <li>Sizes</li>
              <li>Materials</li>
              <li>Woods</li>
              <li>Plastics</li>
            </ul>
          </div>
          <div className="inlineBlock">
          <ul>
              <li>Colors</li>
              <li>Prices</li>
              <li>Sizes</li>
              <li>Materials</li>
              <li>Woods</li>
              <li>Plastics</li>
            </ul>
          </div>
          <div className="inlineBlock">
          <ul>
            <li>Contact Us</li>
            <li>Customer Care</li>
            <li>Warranty</li>
            <li>FAQ</li>
			      <li>Financing</li>
			      <li>Careers</li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

