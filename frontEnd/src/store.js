// Redux store.
// this is basically sere we connect the reducers and middlewares stuffs
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers.js';

const reducer = combineReducers({
	productList: productListReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

// the way we add this store into our application is through a provider
// and the provider comes from react-redux.
// we wrap our <app/> with this provider in index.js
