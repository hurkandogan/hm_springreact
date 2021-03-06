import type User from '../../types/User'

const INITIAL_STATE = {
    isLoading: false,
    user: {} as User,
    msg: {}
}
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case 'USER_LOAD_START':
        //     return { ...state, isLoading: true, message: '' };
        case 'USER_LOAD_SUCCESS':
            return { ...state, user: action.payload, isLoading: false };
        // case 'USER_LOAD_ERROR':
        //     return { ...state, msg: action.payload, isLoading: false };
        default: return state;
    }
    //TODO: Error handling!
}