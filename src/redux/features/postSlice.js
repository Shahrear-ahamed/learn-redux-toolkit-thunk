import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
