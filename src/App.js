import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text'
import Button from './Button';
import Spinner from './spinner';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: true  // this is the internal state of my app component
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {this.state.clicked && <p>woodcutting2222</p>}

          <button onClick={this.handleClick}>click me</button>
          <p>Hi im below this</p>
          {/* <Text message="Hello Friend"/>
          <Text message="Friend"/>
          <Text message="Bye Friend"/>
          <Text message="Bye"/> */}
          <Button clickPropsFunction={this.handleClick}/>
          <Text message="cool"/>

          <Spinner loading={!this.state.clicked}/>
        
        </header>
      </div>
    );
  }
}

export default App;
