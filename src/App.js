import './App.css';
import React from 'react';
import Headings from './components/details/details.component';
import AboutYou from './components/about-you/about-you.component';
import Details from './components/details/details.component';
import Header from './components/site-header/site-header.component';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      'I want a pro to do my taxes': false,
      'I might need audit assistance': false,
      'I would like phone/chat support': false
    }
  }

  handleClick = event => {
    console.log(`${event} was previously ${this.state[event]}`)

    this.state[event] ? 
    this.setState({[event]: false})
    : 
    this.setState({[event]: true});
    console.log(this.state)
  }


  render(){

    
    

  return (
    <div>
      <Header/>
      <AboutYou handleClick={this.handleClick}/>
      <Details selections={this.state}/>
    </div>
  )
  }
}

export default App;
