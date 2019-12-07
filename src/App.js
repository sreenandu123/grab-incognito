import React from 'react';
import './App.css';
import GrabMobileComponent from "./GrabMobileComponent";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from "./notFound";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={GrabMobileComponent} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} /> */}
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
