import { combineReducers } from 'redux';

import Alert from '../types/Alert';
//import User from '../components/types/User';
//import Location from '../components/types/Location';

import { locationReducer } from './reducers/locationsReducer';
import { userReducer } from './reducers/userReducer';
import { alertReducer } from './reducers/alertReducer';

export interface AppState {
    locations: any;
    user: any;
    alert: Alert;
}

export const rootReducer = combineReducers({
    locations: locationReducer,
    user: userReducer,
    alert: alertReducer
});