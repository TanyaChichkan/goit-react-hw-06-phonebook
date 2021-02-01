import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {phoneBookReducer} from './reducer/contactsReducer';

const store = createStore(phoneBookReducer, composeWithDevTools());

export default store;