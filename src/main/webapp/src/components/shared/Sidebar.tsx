import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaSearch,
    FaTachometerAlt
} from 'react-icons/fa';
import {
    BsCircle,
    BsShield,
    BsWrench,
    BsHouseDoor
} from 'react-icons/bs';
import avatar from '../../sample_avatar.png';

import { AppState } from '../../redux';
import { useSelector } from 'react-redux';
const Sidebar = () => {

    const getLocations = useSelector((state: AppState) => state.locations.locations);
    const loggedUser  = useSelector((state : AppState) => state.user.user);

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <img src="#" className="brand-image img-circle elevation-3" style={{opacity: '0.8'}} /> */}
            <p className="brand-text font-weight-light copyright-text">HugOS <small>0.0.1</small></p>

            <div className="sidebar">
                <div className="user-panel mb-3 d-flex">
                <div className="image">
                    <img src={avatar} alt="Avatar" className="img-circle elevation-2" />
            	</div> 
                    <div className="info">
                        <p className="user-info">{loggedUser.firstName + " " + loggedUser.lastName}</p>
                    </div>
                </div>

                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" disabled={true} type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar" disabled={true}>
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">General</li>
                        <li className="nav-item menu-open">
                            <NavLink to={"/"}
                                className="nav-link"
                                activeClassName="active">
                                <FaTachometerAlt />
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">Artworks</li>
                        <li className="nav-item">
                            <NavLink to={"/artwork"}
                                className="nav-link"
                                activeClassName="active">
                                <BsCircle />
                                <p>Artworks</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">House Management (In Development)</li>
                        <li className="nav-item">
                            <NavLink to={"/versicherungen"}
                                className="nav-link"
                                activeClassName="active">
                                <BsShield />
                                <p>Versicherungen</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/renovierungskosten"}
                                className="nav-link"
                                activeClassName="active">
                                <BsWrench />
                                <p>Renovierungskosten</p>
                            </NavLink>
                        </li>
                        {getLocations.map(location => {
                            return (
                                <li className="nav-item" key={location.name}>
                                    <NavLink to={"/location/" + location.id}
                                        className="nav-link"
                                        activeClassName="active">
                                        <BsHouseDoor />
                                        <p>{location.name}</p>
                                    </NavLink>
                                </li>
                            );
                        })
                        }
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;