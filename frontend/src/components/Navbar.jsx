import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../utils/data';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const categories = getAllCategories();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={() => {setMobileMenuOpen(false); setDropdownOpen(false);}}>
          <img src={logo} alt="Aaliya Stones Logo" className="logo-img" />
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><a href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
            <Link 
              to="/products" 
              className="nav-link"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Products
            </Link>
            <div 
              className="dropdown-menu"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {categories.map((cat) => (
                <div key={cat.id} className="dropdown-column">
                  <h4 className="dropdown-title">{cat.name}</h4>
                  {cat.subcategories?.length > 0 ? (
                    cat.subcategories.map((sub) => (
                      <Link 
                        key={sub.id} 
                        to={`/subcategory/${sub.slug}`} 
                        className="dropdown-item"
                        onClick={() => {setMobileMenuOpen(false); setDropdownOpen(false);}}
                      >
                        {sub.name}
                      </Link>
                    ))
                  ) : (
                    <Link
                      to={`/category/${cat.slug}`}
                      className="dropdown-item"
                      onClick={() => {setMobileMenuOpen(false); setDropdownOpen(false);}}
                    >
                      View {cat.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </li>
          <li><a href="/#interior" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Interior</a></li>
          <li><a href="/#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          <li><a href="/#contact" className="quote-btn" onClick={() => setMobileMenuOpen(false)}><div className="btn-bg"></div><span>Request Quote</span></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
