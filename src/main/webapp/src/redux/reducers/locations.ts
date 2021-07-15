const INITIAL_STATE = {
    isLoading: false,
    locations: {},
    msg: {}
}
export const reducer = (state = INITIAL_STATE, action) => {
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