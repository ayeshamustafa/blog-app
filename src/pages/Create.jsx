import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1 className="page-title">Create A Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
