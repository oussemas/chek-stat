import React, { Component } from 'react'

export default class Profil extends Component {
  state={
    time:0
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
      time : this.state.time +1
      
    })
     }, 1000);
    }
  render() {
    return (
      <>
      
      <h1>{this.props.pers.title}</h1> 
     <h3>{this.props.pers.obj.fullName}</h3>
     <h3>{this.state.time}</h3>
     <h3>{this.props.pers.obj.Bio}</h3>
     <img src={this.props.pers.obj.imgSrc}></img>
     <h3>{this.props.pers.obj.proffesion}</h3> 
    </>
    )
  }
}
