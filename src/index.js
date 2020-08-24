import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import personsReducer from './store/reducers/persons';
import newsReducer from './store/reducers/news';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    prs: personsReducer,
    nws: newsReducer
})


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(reduxImmutableStateInvariant(), thunk)
));

ReactDOM.render(<Provider store={store}><App appTitle="News Corp" /></Provider>, document.getElementById('root'));
registerServiceWorker();
