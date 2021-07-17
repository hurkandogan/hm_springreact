import {
    applyMiddleware,
    createStore,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { locationReducer } from './reducers/locations';
import { userReducer } from './reducers/user';

export const store = createStore(
    combineReducers({
        locations: locationReducer,
        loggedUser: userReducer
    }),
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;