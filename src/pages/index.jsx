import { useState, useEffect } from "react"
import '../style.css'
import { Link } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa";

function Forside() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const response = await fetch('api/posts')
    const data = await response.json()
    setPosts(data)
  }

  return (
    <>
      <div className="navbar">
        <h1 className="headline">List of posts:</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Forside</Link>
          <Link to="/opretpost" className="nav-link">Opret Post</Link>
        </div>
      </div>
     
      {posts.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="post-card">
            <div className="post-header">{post.title}</div>
            <div className="post-content">
              <div className="post-email">{post.content}</div>
              <div className="post-password">{post.author}</div>
            </div>
            <button className="delete-button"><FaTrashAlt /></button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Forside