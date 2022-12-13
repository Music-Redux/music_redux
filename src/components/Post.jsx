/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentForm } from "./CommentForm";
export const Post = ({ post, user }) => {
  return (
    <>
      <div className="w-3/4 bg-[#1e1e1e] mt-5 border-2 border-rose-500 p-6 rounded-lg">
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <img
            //u can read the image like this
            // src={`data:image/jpeg;base64,${user.avatar}`}
            src={user?.avatar}
            width="10%"
            alt=""
            className="rounded-lg"
          />
          <p className="text-white mt-2">
            {" "}
            {user ? user["first-name"] + "  " + user["last-name"] : "test"}
          </p>
        </div>

        <p className="text-white m-4 ml-0">{post?.description}</p>

        <CommentForm postId={post?.id} />
      </div>
    </>
  );
};
