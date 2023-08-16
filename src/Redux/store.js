import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';


const reducer=combineReducers({
    adminProducts:productReducer,
    adminUsers: userReducer,
})

const middleware=[thunk]

const store=createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
)
export default store;