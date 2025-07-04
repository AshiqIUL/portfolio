import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div>© {new Date().getFullYear()} Ashiq Zaffar • All rights reserved</div>
      <div className="mt-2">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-light text-decoration-none mx-2">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-light text-decoration-none mx-2">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;

