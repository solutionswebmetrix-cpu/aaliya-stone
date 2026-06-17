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
              <a href="https://www.facebook.com/profile.php?id=100069074210563" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.998 4.388 10.958 10.125 11.854v-8.38H7.078V12h3.047V9.252c0-3.016 1.793-4.678 4.53-4.678 1.305 0 2.677.233 2.677.233v2.954h-1.504c-1.484 0-1.945.92-1.945 1.862V12h3.313l-.532 3.474h-2.781v8.38C19.612 22.958 24 17.998 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/aaliyastones?igsh=MTU3NzNjNTl2OXIzeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.741 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.073-1.689.073-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.165.422.361 1.057.414 2.227.057 1.266.071 1.646.071 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.165-1.057.361-2.227.414-1.265.057-1.646.071-4.85.071s-3.585-.014-4.85-.071c-1.17-.056-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.165-.422-.361-1.057-.414-2.227-.057-1.266-.071-1.646-.071-4.85s.015-3.585.071-4.85c.055-1.169.249-1.805.415-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.165 1.057-.361 2.227-.414C8.417 2.176 8.798 2.16 12 2.16zm0 5.27c-2.52 0-4.57 2.05-4.57 4.57s2.05 4.57 4.57 4.57 4.57-2.05 4.57-4.57-2.05-4.57-4.57-4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.812 11.812 0 0012.05 0C5.495 0 .162 5.332.162 11.885c0 2.102.552 4.13 1.584 5.915L.006 24l6.307-1.658a11.812 11.812 0 005.748 1.549h.004c6.556 0 11.888-5.332 11.888-11.884a11.82 11.82 0 00-3.485-8.377z"/>
                </svg>
              </a>
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
