import React, { useEffect, useState } from 'react';
import api from '../../connection/common_http';
import authService from '../../connection/auth.service';


const Dashboard = () => {

    const [data, setData] = useState({
        artwork_count: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.get('/api/dashboard')
            .then(response => {
                if (response.status === 401) {
                    authService.signout();
                    window.location.reload();
                }
                setData(response.data);
            })
            .catch(err => console.log(err));
        setLoading(false);
    }, []);

    return (
        <div>
            {
                loading ?
                    (
                        <div className="loader" >
                            < div className="spinner-border text-primary" role="status" >
                                <span className="sr-only"></span>
                            </div >
                        </div >
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
                                                    <h3>{data.artwork_count ?? ''}</h3>
                                                    <p>Artwork Pieces</p>
                                                </div>
                                                {/* <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                                            </div>
                                        </div>
                                        <hr />
                                        <h3 className="mb-3">Verwaltungsaufwendungen:</h3>
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
                        </div>
                    )
            }
        </div>

    );
};

export default Dashboard;