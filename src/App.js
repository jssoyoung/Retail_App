import React, { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Contact from './components/Contact';
import NavTabs from './components/NavTabs';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Women') {
      return <Women />;
    }
    if (currentPage === 'Men') {
      return <Men />;
    }
    if (currentPage === 'Kids') {
      return <Kids />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} ></Header>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
