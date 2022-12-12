/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comments } from "./Comments.jsx";
import { useAuthUser } from "react-auth-kit";

export const CommentForm = ({ postId }) => {
  const post_id = parseInt(postId);
  const auth = useAuthUser();
  const user_id = auth()?.id;
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
    document.querySelector(".comment").value = "";
    e.preventDefault();
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setComment("");
  };
  return (
    <>
      <Comments postId={post_id} comment={comment} />

      {auth() ? (
        <form
          onSubmit={(e) => {
            handleCreateComment(e);
          }}
        >
          <input
            type="text"
            name="comment"
            placeholder="Write a comment"
            className="w-3/4 p-3 rounded outline comment"
            required
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          {/* <button type="submit" className="text-white mx-5">
            comment
          </button> */}
        </form>
      ) : null}
    </>
  );
};