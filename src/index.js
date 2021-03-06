import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chapter06 from './Chapter06'
import LoginControl from './Chapter07/LoginControl'
import AttendanceBook from './Chapter08/AttendanceBook'
import SignUp from './Chapter09/SignUp'
import Calculator from './Chapter10/Calculator'
import UserProfileList from './Chapter11/UserProfileList'
import MainScreen from './screen/MainScreen'
import AppRouter from './AppRouter'

// ReactDOM.render(<Chapter06/>, document.getElementById('root'))
// ReactDOM.render(<LoginControl />, document.getElementById('root'))
// ReactDOM.render(<AttendanceBook />, document.getElementById('root'))
// ReactDOM.render(<SignUp />, document.getElementById('root'))
// ReactDOM.render(<Calculator/>, document.getElementById('root'))
// ReactDOM.render(<UserProfileList/>, document.getElementById('root'))
ReactDOM.render(<AppRouter />, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
