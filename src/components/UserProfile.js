import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import FairContext from "../contexts/FairContext";
import {
    Button,
    ListGroup,
    Card,
    NavLink
} from "react-bootstrap";

const UserProfile = () => {

    const [user, setUser] = useState({
        username: "",
        userEmail: "",
        userCity: "",
        userState: "",
        userReferral: "",
        userImage: "",
        userId: ""
    });

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
        fairWebsite: "",
        userId: ""
    });


    const params = useParams();
    // const navigate = useNavigate()
    const { getUser } = useContext(UserContext)
    const { getFair } = useContext(FairContext)


    useEffect(() => {
        async function fetch() {
            await getUser(params.userId).then((user) => setUser(user))
        }
        fetch()
    }, [params.userId]);

    useEffect(() => {
        async function fetch() {
            await getFair(params.fairId).then((fair) => setFair(fair))
        }
        fetch()
    }, [params.fairId]);

    // const logOut = () => {}

    console.log(user);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.userImage} />
                <Card.Body>
                    <Card.Title>Welcome, {user.username}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{user.userCity}, {user.userState}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card key={fair.userId}>
                <Card.Header as="h5">{user.username}'s Fairs will display here.</Card.Header>
                <Card.Body>
                    <Card.Title>{fair.fairTitle}</Card.Title>
                    <Card.Text>
                        {fair.fairDescription}
                    </Card.Text>
                    <Button variant="primary" href={`/fairdetails/${fair.fairId}`}>Details</Button>
                </Card.Body>
            </Card>
        </>

    )
}

export default UserProfile;