import React from 'react';
import './App.css';
import GrabMobileComponent from "./GrabMobileComponent";
import SignedInComponent from "./SignedInComponent";
import UserComponent from "./UserComponent";
import PayDueComponent from "./PayDueComponent";
import AvailCreditComponent from "./AvailCreditComponent";
import SignUpComponent from "./SignUpComponent";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from "./notFound";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={GrabMobileComponent} />
        {/* {/* <Route path="/users" component={Users} /> */}
        <Route path="/home" component={SignedInComponent} />
        <Route path="/user" component={UserComponent} />
        <Route path="/pay-dues" component={PayDueComponent} />
        <Route path="/avail-credit" component={AvailCreditComponent} />
        <Route path="/signup" component={SignUpComponent} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
  </MuiPickersUtilsProvider>
  );
}

export default App;
