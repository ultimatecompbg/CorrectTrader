import React from 'react';
import ReactDOM from 'react-dom';
import SendData from './App';
import * as serviceWorker from './serviceWorker';
import './styles/bulmaswatch.min.css';
import RandomCompany from './home.jsx'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation.jsx';


/*function Apply() {
  return (
    
    <div className="App">
      <SendData />
    </div>
  );
}
*/

const rootElement = document.getElementById("root");
ReactDOM.render(<Navigation/>, rootElement);