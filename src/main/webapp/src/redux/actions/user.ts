import AuthService from '../../connection/auth.service';

export const loadUser = () => (dispatch) => {
    dispatch({ type: 'USER_LOAD_SUCCESS', payload: AuthService.getCurrentUser() });
}