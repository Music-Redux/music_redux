/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comments } from "./Comments.jsx";

export const CommentForm = ({ postId }) => {
  const post_id = parseInt(postId);
  const user_id = 1;
  const [comment, setComment] = useState();

  const data = new FormData();

  data.append("user_id", user_id);
  data.append("comment", comment);
  data.append("post_id", post_id);

  var config = {
    method: "post",
    url: `http://127.0.0.1:8000/api/create_comment`,
    headers: {},
    data: data,
  };

  const handleCreateComment = (e) => {
    let comm = document.getElementById("comment");
    e.preventDefault();
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setComment("");
    comm.value = "";
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleCreateComment(e);
        }}
      >
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Add a comment..."
          className="w-3/4 p-3 rounded outline"
          required
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        {/* <button
          type="submit"
          className="mx-2 bg-[#BB2649] text-gray-300 p-3.5 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          comment
        </button> */}
      </form>
      <Comments postId={post_id} comment={comment} />
    </>
  );
};
