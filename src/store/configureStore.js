import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weightReducer from './reducers/weight'
import authReducer from './reducers/auth'
import infoReducer from './reducers/info'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default () => {
    const store = createStore(
        combineReducers({
            weight: weightReducer,
            auth: authReducer,
            info: infoReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}




