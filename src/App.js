import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ViolationsPage from './pages/ViolationsPage.js';
import About from './pages/AboutPage.js';
import InfractionsPage from './pages/InfractionsPage.js';
import SearchPage from './pages/SearchPage.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>

            <header>
              <h1>CPSC App, Take 2</h1>

              <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/about">About</Link>
              </nav>
            </header>

            <div className="content">
              <Route path="/" exact component={ViolationsPage} />
              <Route path="/violation/:id" component={InfractionsPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
