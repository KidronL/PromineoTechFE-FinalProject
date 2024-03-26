import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Users from './routes/users/users.component';
import Inventory from './routes/inventory/inventory.component';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';


export default function App() {
  return (
  <div className="App">
    <Link to="/home">
      Home
    </Link>
    <Link to="/users">
      Users
    </Link>
    <Link to="/inventory">
      Inventory
    </Link>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
      </Switch>
    </div>
  );
}
