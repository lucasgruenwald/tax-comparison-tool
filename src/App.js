import './App.css';
import React from 'react';
import Headings from './components/headings/headings.component';
import AboutYou from './components/about-you/about-you.component';
import Details from './components/details/details.component';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      'I am self employed': false,
      'I like personal guidance': false,
      'I invest in cryptocurrency': false,
      'I bought or sold a house': false,
      'I might need audit help': false,
    }
  }

  handleClick = event => {
    console.log(`${event} was previously ${this.state[event]}`)

    this.state[event] ? 
    this.setState({[event]: false})
    : 
    this.setState({[event]: true});
  }


  render(){

  return (
    <div>
      <AboutYou handleClick={this.handleClick}/>
      <Headings/>
      <Details/>
    </div>
  )
  }
}

export default App;
