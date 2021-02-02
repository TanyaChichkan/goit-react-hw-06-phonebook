import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducer/contactsReducer';
import {configureStore} from '@reduxjs/toolkit';

// const store = createStore(phoneBookReducer, composeWithDevTools());

const store = configureStore({
  reducer: rootReducer
});

export default store;