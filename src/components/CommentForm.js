import React, { useContext, useState } from "react";
import ChatIcon from "../ChatIcon.png";

function CommentForm() {
  return (
    <div class="custom-search">
      <input
        type="text"
        class="custom-search-input"
        placeholder="Drop a Comment"
      />
      <button class="custom-search-botton" type="submit">
        <img alt="icon" className="ChatPicture" src={ChatIcon} />
      </button>
    </div>
  );
}
// <div className="Comments">
//   <form className="CommentForm">
//     <textarea
//       className="CommentTextArea"
//       name="content"
//       placeholder="Leave a Comment..."
//       rows="3"
//     />
//     <button className="CommentButton">
//       <img className="ChatPicture" src={ChatIcon} />
//     </button>
//   </form>
// </div>
export default CommentForm;
