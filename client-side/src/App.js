import React, { Component } from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Profile from './Component/Profile';
import Table1 from './Component/Table1';
import Table2 from './Component/Table2';
import Posts from './Component/Posts';
import { Helmet } from 'react-helmet';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
        <Helmet>
            <title>{"Testing Helme"}</title>
            <meta name="description" content={"Here Today, I checking Hemet"} />
            <meta name="viewport" content={"width=device-width, initial-scale=1"} />
            <meta name="theme-color" content={"#000000"} />
        </Helmet>
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} /> 
              <Route path="/profile" exact component={Profile} />
              <Route path="/table1" exact component={Table1} />
              <Route path="/table2" exact component={Table2} /> 
              <Route path="/posts/:id" exact component={Posts} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
        
        
      </div>
     );
  }
}
 
export default App;