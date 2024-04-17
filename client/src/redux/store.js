import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogs/blogsSlice";
import BlogReducer from "./features/blogs/singleBlog/BlogSlice";
import filterReducer from "./features/blogs/filter/filterSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: BlogReducer,
    filter: filterReducer,
  },
});
