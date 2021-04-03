import React from 'react';
import Body from './components/Body';
import Faq from './components/FAQ';
import Shop from './components/Shop'
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
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/shop" component={Shop} />
      </BrowserRouter>
    </div>
  );
}

export default App;
