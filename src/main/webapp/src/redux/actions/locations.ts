import api from '../../connection/common_http';

export const getLocations = () => (dispatch) => {
    dispatch({type: "LOCATION_LOAD_START"});
    api.get("/api/location")
        .then(response => dispatch({ type: 'LOCATION_LOAD_SUCCESS', payload: response.data }))
        .catch(err => console.log({ type: 'LOCATION_LOAD_ERROR' , payload: err }));
}