// THIS COMPONENT WAS KYLE's ATTEMPT WITH GETTING COMMENTS TO WORK
// IGORE IF YOU WISH


import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../components/AddFair.css";
import CommentContext from "../contexts/CommentContext";


const NewComment = () => {
    const [newComment, setNewComment] = useState({
        commentTitle: ""
    })
  
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
          navigate('/fairdetails/:fairId');
        }).catch(error => {
          console.log(error);
          navigate('/signin');
        });
    }

    return (
 <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control placeholder="type comment here" type="text"
            name="commentTitle" value={newComment.commentTitle} onChange={handleChange} />
        </Form.Group>

        <br></br>
        <Button type="submit">submit comment</Button>
      </Form>
    </div>

    )
}

export default NewComment
