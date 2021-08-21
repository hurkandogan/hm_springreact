import { combineReducers } from 'redux';

import Alert from '../components/types/Alert';
import Location from '../components/types/Location';

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