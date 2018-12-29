import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { increment, incrementAsync } from './actions/counter'
// generator的函数学习
// import './generator'


class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React-Saga
          </a>
          <p className="App-intro">
            {this.props.counter}
          </p>
          <p>
            <button onClick={this.props.increment}>+</button>
            <br/>
            <button onClick={this.props.incrementAsync}>Async +</button>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps, { increment, incrementAsync })(App);
