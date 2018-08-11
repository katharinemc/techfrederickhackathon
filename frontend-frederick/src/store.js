import {createStore, combineReducers, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
// import { reducer as formReducer } from 'redux-form'
import { mainReducer } from './reducers';



  const store = createStore(mainReducer);
//   applyMiddleware(thunk);




export default store;