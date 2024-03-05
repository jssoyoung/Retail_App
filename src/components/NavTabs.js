import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
        <li className="nav-item">
        <a
          href="#women"
          onClick={() => handlePageChange('Women')}
          className={currentPage === 'Women' ? 'nav-link active' : 'nav-link'}
        >
          Women
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#men"
          onClick={() => handlePageChange('Men')}
          className={currentPage === 'Men' ? 'nav-link active' : 'nav-link'}
        >
          Men
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#kids"
          onClick={() => handlePageChange('Kids')}
          className={currentPage === 'Kids' ? 'nav-link active' : 'nav-link'}
        >
          Kids
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
