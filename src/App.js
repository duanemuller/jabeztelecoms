import React from 'react';
import NavigationBar from './components/layouts/NavigationBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Coverage from './components/pages/Coverage'
import Contact from './components/pages/Contact'
import NotFoundPage from './components/pages/NotFoundPage'


import './App.css';

function App() {
  return (
    <div>
     
   <NavigationBar/>
   <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/coverage" component={Coverage} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
  );
}

export default App;
