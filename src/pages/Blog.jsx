import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const Blog = () => {
  
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Blog 1', content: 'Hello!' },
    { id: 2, title: 'Blog 2', content: 'Welcome to my Blog!' },
    { id: 3, title: 'Blog 3', content: 'Hope you enjoy!' }
  ]);

  const handleDelete = (id) => {
    
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <h1 className="page-title">Existing Blogs</h1>

      {blogs.map(blog => (
        <div key={blog.id}>
          <BlogPost blog={blog} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
