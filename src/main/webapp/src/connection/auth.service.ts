import api from './common_http';

const signin = (data) => {
    return api.post("/login", data)
        .then((response) => {
            if (response.headers.authorization) {
                const user = {
                    firstName: response.headers.firstname,
                    lastName: response.headers.lastname,
                    token: response.headers.authorization,
                    role: response.headers.role
                }
                console.log(response);
                localStorage.setItem("user", JSON.stringify(user));
            }
        })
        .catch(err => console.log(err));
};

const signout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || '{}');
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    signin,
    signout,
    getCurrentUser
};