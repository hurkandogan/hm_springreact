import React, { useState } from 'react';
import { registerValidation } from '../validation/RegisterFormValidation';
import api from '../../connection/common_http';

const Register = () => {

    interface NewUser {
        username: string;
        password: string;
        role: string;
        confirmPassword: string;
        firstName: string;
        lastName: string;
    }
    const initialState: NewUser = {
        username: '',
        password: '',
        role: 'initial',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    }
    const [newUser, setNewUser] = useState<NewUser>(initialState);
    const [passwordVerify, setPasswordVerify] = useState(false);

    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    }
    const passwordCheck = () => {
        if (newUser.password !== newUser.confirmPassword) {
            setPasswordVerify(true);
        } else {
            setPasswordVerify(false);
        }
    }

    const submitHandler = (e: any) => {
        e.preventDefault();
        if (registerValidation(newUser) && passwordVerify) {
            console.log("Please verify the form data");
        } else {
            api.post('/api/register', newUser)
                .then(response => {
                    console.log(response.data);
                    setNewUser(initialState);
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="content-wrapper register-user-form">
            <form onSubmit={submitHandler}>

                <h2>Register new User</h2>

                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="username">Mail Adresse as Username</label>
                        <input type="mail"
                            className="form-control"
                            autoComplete="off"
                            id="username"
                            name="username"
                            value={newUser.username ?? ''}
                            placeholder="Mail adress"
                            onChange={changeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="userRole">User Role</label>
                        <select className="form-control"
                            name="role"
                            id="role"
                            autoComplete="off"
                            value={newUser.role ?? ''}
                            onChange={changeHandler}>
                            <option value={'initial'}
                                disabled={true}>Choose a Role</option>
                            <option value={'SUPERADMIN'}>SuperAdmin</option>
                            <option value={'ADMIN'}>Admin</option>
                            <option value={'USER'}>User</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            className={"form-control" + (passwordVerify ? ' error' : '')}
                            name="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={newUser.password ?? ''}
                            onChange={changeHandler}
                            onBlur={passwordCheck} />
                    </div>
                    <div className="col">
                        <label htmlFor="confirmPassword">Verify Password</label>
                        <input type="password"
                            className={"form-control" + (passwordVerify ? ' error' : '')}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Verify password"
                            autoComplete="off"
                            value={newUser.confirmPassword ?? ''}
                            onChange={changeHandler}
                            onBlur={passwordCheck} />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            autoComplete="off"
                            value={newUser.firstName ?? ''}
                            onChange={changeHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            autoComplete="off"
                            value={newUser.lastName ?? ''}
                            onChange={changeHandler} />
                    </div>
                </div>
                <div className="row mt-3">

                </div>
                <div className="edit-form-btn">
                    <button className="btn btn-primary mt-3" type="submit">
                        Save
                        {false && (
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only"></span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;