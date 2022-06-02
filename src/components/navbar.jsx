import React, { Component } from 'react';

const NavBar = ({totalCounters}) =>
{
    return (
        <nav className="navbar bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge text-white bg-primary rounded m-2">
                    {totalCounters}
                </span>
                </a>
        </div>
        </nav>
    );
}
 
export default NavBar;