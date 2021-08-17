import React from 'react';
import './App.css';
import logo from './logo.svg';

const MyFunctionComponent = props => {
  return <div>{props.text || 'default'}</div>
}

class MyClassComponent extends React.Component {
  render() {
    return <div>{this.props.text || 'default class'}</div>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFunctionComponent text="1" />
        <MyFunctionComponent />
        <MyFunctionComponent text="3" />
        <MyClassComponent text="bla bla" />
        <MyClassComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
