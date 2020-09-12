import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const formatName = (name) => {
  return name.firstName + " " + name.lastname
}

const name={
  firstName: "Muh",
  lastname: "Jamaludin"
}

const element = <h1>Hello, {formatName(name)} !</h1>

ReactDOM.render(
  element,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();