import './index.css';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Route, Switch, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import HomeContainer from './containers/HomeContainer';
import PossessCheckerContainer from './containers/PossessCheckerContainer';
import AssemblyAdjusterContainer from './containers/AssemblyAdjusterContainer';
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
                <header className='Header'>
                    <div className='Header__counter'>
                        <div className='Header__start'>■パーツ所持率チェッカー</div>
                        <div className='Header__end'></div>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path='/PossessChecker' component={PossessCheckerContainer} />
                    <Route path='/AssemblyAdjuster' component={AssemblyAdjusterContainer} />
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
