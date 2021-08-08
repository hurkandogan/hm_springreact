import { combineReducers } from 'redux';

import { locationReducer } from './reducers/locationsReducer';
import { userReducer } from './reducers/userReducer';

export interface AppState {
    locations: any;
    user: any;
}

export const rootReducer = combineReducers({
    locations: locationReducer,
    user: userReducer
});