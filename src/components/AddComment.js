// THIS COMPONENT WAS KYLE's ATTEMPT WITH GETTING COMMENTS TO WORK
// IGORE IF YOU WISH


import React, { useContext, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import "../components/AddFair.css";
import CommentContext from "../contexts/CommentContext";
// trying again
import FairContext from '../contexts/FairContext';


const NewComment = () => {

  let { getFair } = useContext(FairContext);
  // let { getCurrentUser } = useContext(UserContext);
  let params = useParams()

    const [newComment, setNewComment] = useState({
        FairFairId: params.fairId,
        commentTitle: "",
        fairId: ""
    })

    let fairId = params.fairId;
    // useEffect(() => {
    //   async function fetch() {
    //       await getFair(fairId)
    //       // .then((changeFair) => setChangeFair(changeFair))
    //   }
    //   if (fairId !== undefined) {
    //     fetch();
    //   }
      
    //   }, [fairId])

  
    let { createComment } = useContext(CommentContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewComment((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      createComment(newComment).then(() => {
          navigate(`/fairdetails/${fairId}`);
          console.log("testing add comments function" + (fairId));
          console.log("here is your fair ID:" + (params.fairId))
        }).catch(error => {
          console.log(error);
          navigate('/signin');
        });
    }

    return (
 <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control placeholder="type your comment here (must be signed in)" type="text"
            name="commentTitle" value={newComment.commentTitle} onChange={handleChange} />
        </Form.Group>

        {/* <Form.Group>
          <Form.Control placeholder="Fair ID (we're working on populating this automatically" type="text"
            name="FairFairId" value={newComment.FairFairId} onChange={handleChange} />
        </Form.Group> */}

        <Button classname= "btn" variant="success" type="submit">submit comment</Button>
      </Form>
    </div>

    )
}

export default NewComment
