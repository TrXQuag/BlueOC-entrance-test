import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Fetch all posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
  }
)

// Add a post by userid = 1
export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ title, body }) => {
    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { title, body, userId: 1 }
    )
    return data
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending,   state => { state.status = 'loading' })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items  = action.payload
      })
      .addCase(fetchPosts.rejected,  (state, action) => {
        state.status = 'failed'
        state.error  = action.error.message
      })
      .addCase(addPost.fulfilled,    (state, action) => {
        state.items.unshift(action.payload)
      })
  }
})

export default postsSlice.reducer
