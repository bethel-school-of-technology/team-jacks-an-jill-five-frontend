import React from "react";
import { Link } from "react-router-dom";

function FairlistRefresh() {

    const refresh = () => window.location.reload(true);

    return (
        <>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6">
        <Link to={-1} className="btn btn-warning mx-1">Back</Link>
        </div>
        <div className="col-lg-6" id="returnBtn">
        <Link to={refresh} className="btn btn-warning mx-1">Refresh fair list</Link>
        </div>
        </div>
        </div>
        </>
    )
}

export default FairlistRefresh;