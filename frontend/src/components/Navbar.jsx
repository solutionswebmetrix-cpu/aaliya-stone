import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../utils/data';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const categories = getAllCategories();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse enter on category or submenu
  const handleMouseEnter = (categoryId = null) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    if (categoryId !== null) {
      setActiveCategory(categoryId);
    }
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveCategory(null);
    }, 200);
    setHideTimeout(timeout);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={() => {setMobileMenuOpen(false); setMegaMenuOpen(false); setActiveCategory(null);}}>
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
          <li className={`megamenu-wrapper ${megaMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/products" 
              className="nav-link"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            
            {/* Mega Menu for Desktop */}
            <div 
              className="megamenu"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => {
                setMegaMenuOpen(false);
                setActiveCategory(null);
                if (hideTimeout) clearTimeout(hideTimeout);
              }}
            >
              <div className={`megamenu-content ${activeCategory ? 'active' : ''}`}>
                {/* Left Panel: Main Categories */}
                <div 
                  className="megamenu-categories"
                  onMouseLeave={handleMouseLeave}
                >
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className={`megamenu-category ${activeCategory === cat.id ? 'active' : ''}`}
                      onMouseEnter={() => handleMouseEnter(cat.id)}
                    >
                      <Link to={`/category/${cat.slug}`} onClick={() => { setMegaMenuOpen(false); setActiveCategory(null); }}>
                        {cat.name}
                      </Link>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  ))}
                </div>
                
                {/* Right Panel: Subcategories */}
                <div 
                  className={`megamenu-subcategories ${activeCategory ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(null)}
                  onMouseLeave={handleMouseLeave}
                >
                  {(() => {
                    const currentCat = categories.find(c => c.id === activeCategory);
                    if (!currentCat) return null;
                    return (
                      <>
                        <div className="megamenu-subheader">
                          <h3>{currentCat.name}</h3>
                          <Link to={`/category/${currentCat.slug}`} onClick={() => { setMegaMenuOpen(false); setActiveCategory(null); }}>
                            View All
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                        <div className="megamenu-sublist">
                          {currentCat.subcategories?.length > 0 ? (
                            currentCat.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                to={`/subcategory/${sub.slug}`}
                                className="megamenu-sublink"
                                onClick={() => { setMegaMenuOpen(false); setActiveCategory(null); }}
                              >
                                {sub.name}
                              </Link>
                            ))
                          ) : (
                            <Link
                              to={`/category/${currentCat.slug}`}
                              className="megamenu-sublink"
                              onClick={() => { setMegaMenuOpen(false); setActiveCategory(null); }}
                            >
                              View {currentCat.name} Collection
                            </Link>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </li>
          
          {/* Mobile Menu: Accordion */}
          {mobileMenuOpen && (
            <div className="mobile-product-menu">
              {categories.map((cat) => (
                <div key={cat.id} className="mobile-accordion-item">
                  <button 
                    className="mobile-accordion-header"
                    onClick={() => setExpandedMobileCat(expandedMobileCat === cat.id ? null : cat.id)}
                  >
                    {cat.name}
                    <svg 
                      className={`mobile-accordion-arrow ${expandedMobileCat === cat.id ? 'rotated' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobileCat === cat.id && (
                    <div className="mobile-accordion-content">
                      <Link 
                        to={`/category/${cat.slug}`} 
                        className="mobile-accordion-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View All {cat.name}
                      </Link>
                      {cat.subcategories?.length > 0 && cat.subcategories.map((sub) => (
                        <Link 
                          key={sub.id} 
                          to={`/subcategory/${sub.slug}`} 
                          className="mobile-accordion-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
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
