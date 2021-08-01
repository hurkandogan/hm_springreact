import React, { useState, useEffect } from 'react';
import LocationHeader from './LocationHeader';
import { useParams } from 'react-router-dom';
import api from '../../connection/common_http';

import LocationIF from '../types/Location';

const Location = (props) => {

    const locationId = useParams<{ locationId: string }>().locationId;
    const [location, setLocation] = useState({} as LocationIF);
    
    useEffect(() => {
        api.get(`/api/location/${locationId}`)
             .then(response => setLocation(response.data))
             .catch(err => console.log(err));
    }, [locationId]);

    return (
        <div className="content-wrapper">
            <LocationHeader
                locationName={location.name}
                locationShortName={location.shortName}
                locationInvoiceCount={location.invoices}
                // TODO: length is undefined on invoices
            />
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        {/* <a className="page-link">Previous</a> */}
                    </li>
                    <li className="page-item">
                        {/* <a className="page-link">1</a> */}
                    </li>
                    <li className="page-item">
                        {/* <a className="page-link">2</a> */}
                    </li>
                    <li className="page-item">
                        {/* <a className="page-link">3</a> */}
                    </li>
                    <li className="page-item">
                        {/* <a className="page-link">Next</a> */}
                    </li>
                </ul>
            </nav>
            <ul className="nav nav-tabs"
                id="myTab"
                role="tablist">
                <li className="nav-item"
                    role="presentation">
                    <button className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true">2019</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false">2020</button>
                </li>
                <li className="nav-item"
                    role="presentation">
                    <button className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false">2021</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab">...</div>
                <div className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab">...</div>
            </div>
        </div>
  );
}

export default Location;