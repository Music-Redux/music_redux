/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
export const Comments = ({ postId, comment }) => {
  const post_id = parseInt(postId);
  const [comments, setComments] = useState();
  const config = {
    method: "get",
    url: `http://127.0.0.1:8000/api/comments/${post_id}`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setComments(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [comment]);

  return (
    <div>
      {comments?.map((com, i) => {
        return (
          <div key={i} className="text-white">
            {com.comment}
          </div>
        );
      })}
    </div>
  );
};
