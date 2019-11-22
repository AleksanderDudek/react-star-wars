
import React from 'react';

import '../styles/index.scss';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Welcome from './welcome/Welcome';
import Game from './game/Game';

const history = createBrowserHistory();

function App(): JSX.Element {
// tslint:disable-next-line:indent
  return <Router history={history}>
            <div>
                <Route exact path='/' component={Welcome} />
                <Route path='/game' component={Game} />
            </div>
        </Router>;
}

export default App;