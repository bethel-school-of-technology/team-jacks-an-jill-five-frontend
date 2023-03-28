import React, { useEffect, useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Spinner } from "react-bootstrap";

const FairDetails = () => {

    let params = useParams();
    let navigate = useNavigate();

    let { getFair, deleteFair } = useContext(FairContext);

    let [fair, setFair] = useState({
        fairId: "",
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairZip: "",
        fairDescription: "",
        fairStartDate: "",
        fairEndDate: "",
        fairImage: "",
        fairWebsite: ""
    });

    useEffect(() => {
        async function fetch() {
            await getFair(params.fairId).then((fair) => setFair(fair))
        }
        fetch()
    }, [params.fairId]);

    return (
        <><div class="container-fluid padding">
            <div class="row text-center padding">
                <div class="col-12">
                    <h1 class="display-4">{fair.fairTitle}</h1>
                </div>
            </div>
        </div>
            <div class="container-fluid padding ">
                <div class="row padding">
                    <div class="col-lg-6 text-center">
                        <h4>{fair.fairCity}, {fair.fairState}</h4>
                    </div>
                    <div class="col-lg-6 text-center">
                        <h4>{fair.fairStartDate} - {fair.fairEndDate}</h4>
                    </div>
                </div>
                <div class="container-fluid py-3">
                    <div class="row padding">
                        <div class="col-lg-5">
                            <img src={fair.fairImage} className="fimage" class="img-fluid" alt="fair" />
                        </div>
                        <div class="col-lg-7">
                            <p className="fairDesc" class="ml-2 py-2">{fair.fairDescription}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div class="banner">
                <div class="container-fluid padding">
                    <div class="row">
                        <div class="col-lg-6 text-center">
                            <h3 className="fairComment">Comments</h3>
                        </div>
                    </div>
                </div>
                <div class="container-fluid py-3" className="commentContainer">
                    <div class="row py-1">
                        <div class="col-12 mb-2 py-2">
                            <p>Fair Comments will go here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button class="btn btn-lg">Add Comment</button>
            </div>
        </>
    )
}

export default FairDetails;