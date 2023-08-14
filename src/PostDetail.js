import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetail.css';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [translatedPost, setTranslatedPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/${id}`) // http://13.69.24.73:8080/
            .then(response => {
                setPost(response.data);
                setComments(response.data.comments);
            })
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    const handleTranslate = () => {
        axios.get(`http://13.69.24.73:8080/api/posts/${id}/translated`)
            .then(response => {
                setTranslatedPost(response.data);
            })
            .catch(error => console.error('Error translating post:', error));
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    const displayPost = translatedPost || post;
    const displayComments = translatedPost ? translatedPost.comments : comments;

    return (
      <div className="container mt-5">
          <div className="card">
              <div className="card-body">
                  <h2 className="card-title">{displayPost.title}</h2>
                  <p className="card-text">{displayPost.content}</p>
                  <button className="btn btn-primary" onClick={handleTranslate}>Translate</button>
              </div>
          </div>
          <h3 className="mt-4">Comments:</h3>
          <ul className="list-group">
              {displayComments.map(comment => (
                  <li key={comment.id} className="list-group-item">
                      <strong>{comment.author}</strong>: {comment.content}
                  </li>
              ))}
          </ul>
      </div>
  );
}

export default PostDetail;

