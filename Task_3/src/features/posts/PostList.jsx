import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'

export default function PostList() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(state => state.posts)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts())
  }, [status, dispatch])

  if (status === 'loading') return <p>Loading…</p>
  if (status === 'failed')  return <p>Error: {error}</p>

  return (
    <ul>
      {items.map(post => (
        <li key={post.id} style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            <strong>Post #{post.id}</strong> by User {post.userId}
          </div>
          <h3 style={{ margin: '0.3rem 0' }}>{post.title}</h3>
          <p style={{ margin: 0 }}>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
