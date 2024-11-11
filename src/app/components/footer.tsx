import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <p>&copy; Sumra Jabeen Personal Portfolio, 2024</p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/simra.jabeen.96?mibextid=ZbWKwL"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/image/facebook.png"
                alt="Facebook-Logo"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sumra-jabeen-12037a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/image/linkedin.png"
                alt="LinkedIn-Logo"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.instagram.com/simra_mumbai/profilecard/?igsh=bTBrYjk2cDBodzB6"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/image/instagram.png"
                alt="Instagram-Logo"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;