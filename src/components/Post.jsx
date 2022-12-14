/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentForm } from "./CommentForm";
export const Post = ({ post, user }) => {
  console.log(user);
  return (
    <>
      <div className="w-3/4 bg-[#1e1e1e] mt-5 border-2 border-rose-500 p-6 rounded-lg">
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <img src={user?.avatar} width="10%" alt="" className="rounded-lg" />
          <p className="text-white mt-2">{user ? user.name : "test"}</p>
        </div>

        <p className="text-white m-4 ml-0">{post?.description}</p>

        <CommentForm postId={post?.id} />
      </div>
    </>
  );
};
