import React, { Component } from 'react'
import './App.css';
import img from "./img.png";
import Profil from './Profil';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      
      title:"Person",
      obj:{
        fullName:"oussema",
        Bio:"none",
        imgSrc:img,
        proffesion:"web developer",
        show : false
      },
      
      
    }
  }
  
  
  click = () =>{
    this.setState({
      show: ! this.state.show
    })
  }



  render() {
    return (
      <div className="App">
   
     <button onClick={this.click} >STATE</button>
     {
       this.state.show ?  <Profil pers={this.state}/> :null
     }
    
     
    </div>
    )
  }
}







 









