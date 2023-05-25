import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="button-container">
          <Link to="/" className="button" activeClassName="active">Home</Link>
          <Link to="/create" className="button" activeClassName="active">Create</Link>
          <Link to="/blog" className="button" activeClassName="active">Blog</Link>
          <Link to="/edit" className="button" activeClassName="active">Edit</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;



