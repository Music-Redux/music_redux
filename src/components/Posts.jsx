/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Post } from "./Post";
import { getUsers } from "../redux/fromDB/userSlice";
import { getPosts } from "../redux/fromDB/postSlice";
export const Posts = ({ description }) => {
  const users = useSelector((state) => state.Users.data?.data);
  const posts = useSelector((state) => state.Posts.data?.data);
  let user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [description]);

  console.log(users);
  console.log(posts);
  // let all = posts;
  // console.log(all);
  // posts.slice().sort((a, b) => b.id - a.id);
  return (
    <>
      {posts
        ?.slice()
        .sort((a, b) => b.id - a.id)
        .map((post, i) => {
          user = users.find((usr) => usr.id === post.user_id);
          return <Post post={post} key={i} users={user} />;
        })}
    </>
  );
};
