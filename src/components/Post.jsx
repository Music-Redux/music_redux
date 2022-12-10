import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/fromDB/userSlice";
export const Post = ({ post }) => {
  const user = useSelector((state) =>
    state.Users?.data?.data.find((user) => user.id === post.user_id)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(post);
  console.log(user);
  return (
    <>
      <p className="text-white">post</p>
    </>
  );
};
