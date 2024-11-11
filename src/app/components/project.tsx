'use client';

import React from 'react';
import Image from 'next/image';

const Project = () => {
  const projects = [
    {
      id: 1,
      name: 'Static Resume',
      image: '/image/static.jpg',
      link: 'https://hackathone-m001.vercel.app/'
    },
    {
      id: 2,
      name: 'Dynamic Resume',
      image: '/image/Dynamic.jpg',
      link: 'https://h-milestone-005.vercel.app/'
    },
    {
      id: 3,
      name: 'CLI based Projects',
      image: '/image/Cli.jpg',
      link: 'https://github.com/Coderhubs'
    },
    {
      id: 4,
      name: 'GIAIC-Clone-Website',
      image: '/image/web.png',
      link: 'https://clone-website-self.vercel.app/'
    },
  ];

  return (
    <div id="project">
      <div className="project-container">
        <div className="project-overlay"></div>

        <h2 className="project-title">My Recent Projects</h2>

        <div className="projects-wrapper">
          <div className="projects-grid">
            {/* First Row (Projects 1 and 2) */}
            <div className="projects-row">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div className="project-image-container">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={250}
                      height={167}
                      className="project-image"
                    />
                    <div className="project-image-overlay"></div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row (Projects 3 and 4) */}
            <div className="projects-row">
              {projects.slice(2, 4).map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div className="project-image-container">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={250}
                      height={167}
                      className="project-image"
                    />
                    <div className="project-image-overlay"></div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;