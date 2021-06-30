// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from '../reducers/todoReducer';

// const rootReducer = {
//     todos: todoReducer
// }

// const store = configureStore ({
//     reducer: rootReducer,
// });

// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;