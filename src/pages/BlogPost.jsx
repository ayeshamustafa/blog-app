import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ blog, onDelete }) => (
  <div>
    <h3>{blog.title}</h3>
    <p>{blog.content}</p>
    <button onClick={() => onDelete(blog.id)}>Delete</button>
    <Link to={`/blog/${blog.id}/edit`}>Edit</Link>
  </div>
);

export default BlogPost;
