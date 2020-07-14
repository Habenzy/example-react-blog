import React from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom';

import Header from './Header'
import Home from './Home'
import PostPage from './PostPage'
import Author from './Author'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post' component={PostPage} />
        <Route path='/author' component={Author} />
      </Switch>
    </div>
  );
}

export default App;
