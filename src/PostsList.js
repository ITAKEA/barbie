import React, { useState, useEffect } from 'react';
import './PostsList.css';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://13.69.24.73:8080/api/posts") // 13.69.24.73
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
        <img src='barbielogo.png' alt='logo' className='logo' />
        <ul className="list-group">
            {posts.map(post => (
                <li key={post.id} className="list-group-item">
                    <a href={`/post/${post.id}`} className="post-title">{post.title}</a>
                </li>
            ))}
        </ul>
    </div>
);
}

export default PostsList;
