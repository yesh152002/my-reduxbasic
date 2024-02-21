

import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state +1;  
    case 'DECREMENT':
      if (state<=0){
        return state;
      }
      else
      return state -1;  
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
const root =ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
