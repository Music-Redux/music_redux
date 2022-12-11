import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";
export const Posts = () => {
  const [posts, setPosts] = useState();
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/posts",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        setPosts(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {posts?.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
};
