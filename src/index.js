import './index.css';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import PossessCheckerContainer from './containers/PossessCheckerContainer';
import reducer from './reducers';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router>
            <Route path="/:param?" component={PossessCheckerContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
