import React from 'react';
import Body from './components/Body';
import Faq from './components/FAQ';
import Shop from './components/Shop';
import Safety from './components/Safety';
import Header from './components/Header';
import Contact from './components/Contact';
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
        <Route exact path="/safety" component={Safety} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
