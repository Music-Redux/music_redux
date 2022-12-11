/* eslint-disable */
import React from "react";

export const Comment = ({ comment, users }) => {
  const user = users.find((user) => user.id === comment.user_id);

  return <div className="text-white">Comment</div>;
};
