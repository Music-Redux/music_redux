/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk(
  "commentSlice/getComments",
  async ({ post_id }) => {
    return await axios
      .get(`http://127.0.0.1:8000/api/comments/${post_id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const initialState = {
  comments: [],
  status: "Pending",
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // createComment: (state, action) => {},
    // updateComment: (state, action) => {},
    // deleteComment: (state, action) => {},
  },
  extraReducers: {
    [getComments.pending]: (state) => {
      state.status = "Pending";
    },

    [getComments.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getComments.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// export const { createComment, updateComment, deleteComment } = comentSlice.actions;

export default commentSlice.reducer;
