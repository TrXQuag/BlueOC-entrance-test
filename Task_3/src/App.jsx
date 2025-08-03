import { useState } from 'react'
import './App.css'
import PostForm from './features/posts/PostForm'
import PostList from './features/posts/postList'

function App() {
  return (
    <>
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1>Posts</h1>
      <PostForm />
      <hr />
      <PostList />
    </div>
    </>
  )
}

export default App
