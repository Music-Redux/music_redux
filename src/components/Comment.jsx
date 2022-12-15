/* eslint-disable */
import React from "react";

export const Comment = ({ comment, user }) => {
  console.log(user);
  return (
    <>
      <div
        className="mb-4 mt-8"
        style={{ display: "flex", flexDirection: "row", gap: "4px" }}
      >
        <img
          //u can read the image like this
          // src={`data:image/jpeg;base64,${user.avatar}`}
          src={user?.avatar}
          class="mr-2 w-12 h-12 rounded-full"
          alt=""
        />
        <div className="bg-[#353535] outline  w-1/3 rounded-lg">
          <p className="text-white text-sm ml-2">{user ? user.name : "test"}</p>
          <span className="text-white text-sm ml-2 ">{comment.comment}</span>
        </div>
      </div>
    </>
  );
};
