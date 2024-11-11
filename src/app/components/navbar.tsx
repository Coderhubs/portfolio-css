import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img
            src="image/logo.jpg"
            alt="Simra"
            width={64}
            height={64}
          />
        </a>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href={"#About"} className="nav-link">About</Link>
          <Link href={"#project"} className="nav-link">Projects</Link>
          <Link href={"#contact"} className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;