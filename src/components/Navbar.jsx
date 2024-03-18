import React, { useState, useEffect } from 'react';

const Navbar = () => {
  
  // useEffect(() => {
  //   console.log("Final Todo:", todo);
  // }, [todo]); // Log whenever todo changes

  return (
    <div>
      
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand h1 m-auto">
            <h2>iTask</h2>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
