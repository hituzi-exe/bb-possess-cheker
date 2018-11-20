import './index.css';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import PossessCheckerContainer from './containers/PossessCheckerContainer';
import reducer from './reducers';

const history = createBrowserHistory();

const store = createStore(
    reducer(history), // root reducer with router state
    compose(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
        ),
    ),
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <header class='Header'>
                    <div class='Header__counter'>
                        <div class='Header__start'>■パーツ所持率チェッカー</div>
                        <div class='Header__end'></div>
                    </div>
                </header>
                <Switch>
                    <Route path='/PossessChecker' component={PossessCheckerContainer} />
                    <Route path='/AssemblyAdjuster' component={PossessCheckerContainer} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
