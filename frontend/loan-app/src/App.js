import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import AuthForm from './AuthForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
        <h2>Welcome to Loan Application App</h2>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginForm />
            
          </Route>
        </Switch>
        <AuthForm />
      </div>
    </Router>
    
  );
};

export default App;
