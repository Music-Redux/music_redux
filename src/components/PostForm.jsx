/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "axios";

export const PostForm = () => {
  const [description, setDescription] = useState();
  const user_id = 2;

  const data = new FormData();

  data.append("user_id", user_id);
  data.append("description", description);

  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/create_post",
    headers: {},
    data: data,
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        handleCreatePost(e);
      }}
    >
      <input
        type="texet"
        name="description"
        placeholder="Post your feeling"
        className="w-3/4 p-3 rounded outline"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit" className="text-white mx-5">
        POST
      </button>
    </form>
  );
};
