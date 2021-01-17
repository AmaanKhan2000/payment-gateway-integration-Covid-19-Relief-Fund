import React from 'react';

import HomePage from './pages/homepage/homepage';

import Payment from './pages/filepage/Payment';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/Payment' component={Payment}/>
    </Switch>
    </div>
  );
}

export default App;
