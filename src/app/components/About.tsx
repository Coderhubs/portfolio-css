import React from 'react';
import Image from 'next/image';

const About = () => {
  const skills = [
    'HTML, CSS, TypeScript',
    'Next.js, Tailwind CSS',
    'Problem Solving, Leadership',
    'Team Management',
    'Creativity, Artistic',
  ];
  const qualifications = [
    'Governor Initiative and Cloud Computing (Web Developer)',
    'Bachelor\'s in BBA (Human Resources)',
    'Internships (Efu Life Insurance)',
    'Internships (Youth Awareness)',
  ];

  return (
    <div id="About" className="about-section">
      {/* Background Image Section */}
      <div className="background-image"></div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Title */}
        <h1 className="section-title">About Me</h1>
        
        {/* Description */}
        <p className="description">
          Welcome to my website! I am working on myself to gain more expertise in the following skills. I am passionate about becoming a better developer and continually improving my knowledge in the latest technologies and frameworks. Stay tuned for more updates as I grow!
        </p>

        {/* Image Gallery */}
        <div className="image-gallery">
          {[ 
            "/image/ts-js.jpeg", 
            "/image/team.jpeg", 
            "/image/leadership.jpeg", 
            "/image/html-css.jpg", 
            "/image/creativity.jpeg", 
            "/image/nextjs.jpeg"
          ].map((src, index) => (
            <div key={index} className="image-item">
              <Image
                src={src}
                alt={`Skill image ${index + 1}`}
                className="image"
                layout="fill"
                quality={75}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Skills & Qualifications Section */}
        <div className="skills-qualifications">
          {/* Skills */}
          <div className="skills">
            <h2 className="section-subtitle">My Skills</h2>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="qualifications">
            <h2 className="section-subtitle">My Qualifications and Experiences</h2>
            <ul className="qualifications-list">
              {qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
