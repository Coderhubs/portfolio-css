// components/Body.js
import React from 'react';
import Image from 'next/image';

const Body = () => {
  return (
    <div className="container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      <div className="content">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="animate-fadeIn">
            Hello, I&apos;m <br /> Sumra Jabeen
          </h1>
           <p className="animate-fadeIn">
            Step into my digital world! Here, you&apos;ll find a collection of projects that fuse design, code, and functionality.
            <br /> Whether you&apos;re here to explore or be inspired, I invite you to dive into the work that drives my passion.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="image-section">
          <Image
            alt="Simra"
            loading="lazy"
            width={300}
            height={300}
            className="image"
            src="/image/simra.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;