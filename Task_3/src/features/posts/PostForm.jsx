import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'

export default function PostForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body,  setBody ] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    if (title && body) {
      dispatch(addPost({ title, body }))
      setTitle('')
      setBody('')
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: '2rem' }}>
      <input
        style={{ display: 'block', width: '100%', marginBottom: '.5rem' }}
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        style={{ display: 'block', width: '100%', marginBottom: '.5rem' }}
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Body"
        rows={4}
      />
      <button type="submit">
        Add Post
      </button>
    </form>
  )
}
