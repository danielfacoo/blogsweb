import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogs/blogsSlice";
import BlogReducer from "./features/blogs/singleBlog/BlogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: BlogReducer,
  },
});
