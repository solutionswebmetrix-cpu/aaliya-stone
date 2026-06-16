import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../utils/data';
import logo from '../assets/logo.png';

const Footer = () => {
  const categories = getAllCategories();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Aaliya Stones Logo" className="footer-logo-img" />
            <p className="serif">
              Crafting timeless natural stone masterpieces for luxury projects worldwide.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100069074210563" target="_blank" rel="noopener noreferrer" className="social-icon">F</a>
              <a href="https://www.instagram.com/aaliyastones?igsh=MTU3NzNjNTl2OXIzeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">I</a>
              {['LinkedIn', 'Pinterest'].map((social, idx) => (
                <div key={idx} className="social-icon">{social[0]}</div>
              ))}
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              {categories.slice(0,7).map((cat, idx) => (
                <li key={idx}><Link to={`/category/${cat.slug}`} className="footer-link">{cat.name}</Link></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {['About Us', 'Our Story', 'Projects', 'Gallery', 'Contact'].map((item, idx) => (
                <li key={idx}><a href="#" className="footer-link">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to our newsletter for updates on new products and collections.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Aaliya Stones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
