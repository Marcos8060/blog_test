import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "../service";


const initialState = {
  blogs: [],
};

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const {
  setBlogs,
} = BlogSlice.actions;


export const getAllBlogs = () => async (dispatch) => {
  try {
    const response = await fetchBlogs();
    dispatch(setBlogs(response));
  } catch (error) {
  }
};



export default BlogSlice.reducer;
