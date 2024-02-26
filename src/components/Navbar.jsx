import React from 'react';
import{ Link } from 'react-router-dom'

const Navbar = () => {
 
    return (
      <div>
        <nav>
          <Link to="/">All</Link>
          <Link to="/fullstackdevelopment">FullStackDevelopment</Link>
          <Link to="datascience">DataScience</Link>
          <Link to="/cybersecurity">CyberSecurity</Link>
          <Link to="/career">Career</Link>
        </nav>
      </div>
    );
};

export default Navbar;