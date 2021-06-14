import './App.css';
import React from 'react';
import Home from './component/pages/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Playground from './component/pages/Playground';
import BingoState from './context/bingo/BingoState';

function App() {
  return (
    <BingoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/play/:numbers" component={Playground}></Route>
        </Switch>
      </Router>
    </BingoState>
  );
}

export default App;
