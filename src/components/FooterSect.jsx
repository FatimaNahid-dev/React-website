import React from 'react';
import { Link } from 'react-router-dom';

function FooterSect() {
  return (
    <section id="footer" className="bg-dark mt-auto">        
      <div id="footer-nav" className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <ul className="footer-links">
              <li><Link to="/" className="text-decoration-none align-items-center">Home</Link></li>
              <li><Link to="/about" className="text-decoration-none align-items-center">About</Link></li>
              <li><Link to="/services" className="text-decoration-none align-items-center">Services</Link></li>
              <li><Link to="/blog" className="text-decoration-none align-items-center">Blog</Link></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="footer-links">
              <li><Link to="/contact"  className="text-decoration-none align-items-center">Contact</Link></li>
              <li><Link to="/faq"  className="text-decoration-none align-items-center">FAQ</Link></li>
              <li><Link to="/privacy"  className="text-decoration-none align-items-center">Privacy Policy</Link></li>
              <li><Link to="/terms"  className="text-decoration-none align-items-center">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="footer-links">
              <li><Link to="/contact"  className="text-decoration-none align-items-center">Products</Link></li>
              <li><Link to="/faq"  className="text-decoration-none align-items-center">Team</Link></li>
              <li><Link to="/privacy"  className="text-decoration-none align-items-center">News Letter</Link></li>
              <li><Link to="/terms"  className="text-decoration-none align-items-center">Resources</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col text-center text-light">
      <p>&copy; 2023 U-MartZz. All rights reserved.</p>
      </div>
    </section>
  );
}

export default FooterSect;
