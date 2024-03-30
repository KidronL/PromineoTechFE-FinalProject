import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Users from './routes/users/users.component';
import Inventory from './routes/inventory/inventory.component';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './routes/landing/landing.component';


export default function App() {

  return (
  <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Kidron's Sneaker Portal</Navbar.Brand>
                </Container>
                <Container>
                    <Link to="/home">
                        Home
                    </Link>
                    <Link to="/users">
                        Users
                    </Link>
                    <Link to="/inventory">
                        Inventory
                    </Link>
                </Container>
            </Navbar>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
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
