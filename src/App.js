import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, incrementAsync } from './actions/counter'
import { fetchUserRequest } from './actions/user'
// generator的函数学习
// import './generator'


class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://github.com/redux-saga/redux-saga"
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
            <br />
            <button onClick={this.props.incrementAsync}>Async +</button>
            <br />
            <button onClick={this.props.fetchUserRequest}>Get User</button>
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
export default connect(mapStateToProps, { increment, incrementAsync, fetchUserRequest })(App);
