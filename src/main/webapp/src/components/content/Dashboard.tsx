import React, { useEffect, useState } from 'react';
import api from '../connection/common_http';
import authService from '../connection/auth.service';

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        artwork_count: 0,
        artwork_locations_count: 0,
    });

    useEffect(() => {
        setLoading(true);
        api.get('/api/dashboard')
            .then(response => {
                if (response.status !== 200) {
                    authService.signout();
                    window.location.reload();
                }
                setData(response.data);
            })
            .catch(error => console.log(error));
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="loader">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6 col-md-12">
                                <h1 className="m-0">Dashboard</h1>
                                <hr />
                                <h3 className="mb-3">Artwork:</h3>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>{data.artwork_count ?? 0}</h3>
                                            <p>Artwork Pieces</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>{data.artwork_locations_count ?? 0}</h3>
                                            <p>Artwork Locations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <h3 className="mb-3">Verwaltungsaufwendungen: </h3>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-light">
                                        <div className="inner">
                                            <h3>0000€</h3>
                                            <p>Verwaltungskosten</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box bg-light">
                                        <div className="inner">
                                            <h3>00000€</h3>
                                            <p>Versicherungskosten</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            )
            }
        </div >

    );
};

export default Dashboard;