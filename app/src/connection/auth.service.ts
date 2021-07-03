import api from './common_http';

const register = (firstName, lastName, mail, password) => {
  return api.post( "/api/signup", {
      firstName,
      lastName,
      mail,
      password
    });
};

const signin = (data) => {
    return api.post("/login", data)
        .then((response) => {
            if (response.headers.authorization) {
                const user = {
                    firstName: response.headers.firstname,
                    lastName: response.headers.lastname,
                    token: response.headers.authorization
                }
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
    register,
    signout,
    getCurrentUser
};