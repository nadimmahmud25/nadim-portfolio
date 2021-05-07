import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import ContactPage from './components/ContactPage/ContactPage';
import BlogPage from './components/BlogPage/BlogPage';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/work">
            <Projects/>
          </Route>

          <Route path="/contact">
            <ContactPage/>
          </Route>

          <Route path="/blog">
            <BlogPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
