
import React from 'react';

import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Welcome from './welcome/Welcome';
import Game from './game/Game';

const history = createBrowserHistory();

function App(): JSX.Element {
// tslint:disable-next-line:indent
  return <Router>
            <div>
                <Route exact path='/' component={Welcome} />
                <Route path='/game' component={Game} />
            </div>
        </Router>;
}

export default App;