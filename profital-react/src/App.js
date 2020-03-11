import React from 'react';
import Navbar from './components/layout/Navbar';
import Portfolio from './views/Portfolio';
import Trades from './views/trades/Trades';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Portfolio} />
          <Route path='/trades' exact component={Trades} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
