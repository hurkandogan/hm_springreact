import type Location from '../../types/Location'

const INITIAL_STATE = {
    isLoading: false,
    locations: typeof Location !== 'undefined' ? [Location] : [],
    msg: {}
}
export const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOCATION_LOAD_START':
            return { ...state, isLoading: true, message: '' };
        case 'LOCATION_LOAD_SUCCESS':
            return { ...state, locations: action.payload, isLoading: false };
        case 'LOCATION_LOAD_ERROR':
            return { ...state, msg: action.payload, isLoading: false };
        default: return state;
    }
}