import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Body} />
      </BrowserRouter>
    </div>
  );
}

export default App;
