import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//initial state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blogs = []);
      })
      .addCase(fetchBlogs.fullfilled, (state, action) => {
        (state.isLoading = false), (state.blogs = action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        (state.isLoading = false),
          (state.blogs = []),
          (state.isError = true),
          (state.error = action.error?.message);
      });
  },
});

export default blogsSlice.reducer;
