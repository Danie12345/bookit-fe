import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import user from './user/userSessions';
import reservations from './reservations/reservations';
import vehicles from './vehicles/vehicles';

const reducer = combineReducers({ user, vehicles, reservations });

const store = createStore(
  reducer,
  applyMiddleware(
    // add midelwheres here
    thunk,
    logger,
  ),
);

export default store;
