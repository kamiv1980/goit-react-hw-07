/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { contactsReducer, notesReducer, isLoadingReducer } from './contacts/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ contacts: contactsReducer, notes: notesReducer, loading: isLoadingReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
