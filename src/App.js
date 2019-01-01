import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, incrementAsync } from './actions/counter'
import { fetchUserRequest } from './actions/user'
// generator的函数学习
// import './generator'


class App extends Component {
  render () {
    const { isFetching, error, user } = this.props.user
    let data
    if (error) {
      data = error
      // console.dir(error.response.message);
    } else if (isFetching) {
      data = "Loading..."
    } else {
      data = user && user.data.length
    }
    console.log(data)
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
          <h1>{data}</h1>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}
export default connect(mapStateToProps, { increment, incrementAsync, fetchUserRequest })(App);
