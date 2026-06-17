import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCategories, getProductsBySubcategory, searchProducts } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const categories = getAllCategories();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  const searchResults = searchProducts(searchQuery);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search and mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle mouse leave from entire mega menu with delay
  const handleMegaMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveCategory(null);
      setMegaMenuOpen(false);
    }, 250);
    setHideTimeout(timeout);
  };

  // Handle mouse enter to clear any existing timeout
  const handleMegaMenuMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setMegaMenuOpen(true);
    // Set first category as active if none is active
    if (!activeCategory && categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  };

  // Handle mouse enter on Products link
  const handleProductsLinkMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setMegaMenuOpen(true);
    // Set first category as active
    if (categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  };

  // Handle category hover
  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Helper to get first product image for a subcategory
  const getSubcategoryImage = (subSlug) => {
    const products = getProductsBySubcategory(subSlug);
    if (products.length > 0) {
      return getProductImage(products[0].image, products[0].name);
    }
    return null;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={() => {setMobileMenuOpen(false); setMegaMenuOpen(false); setActiveCategory(null); setSearchOpen(false);}}>
          <img src={logo} alt="Aaliya Stones Logo" className="logo-img" />
        </Link>
        
        {/* Search */}
        <div className="search-container" ref={searchContainerRef}>
          <button 
            className="search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {searchOpen && (
            <div className="search-dropdown">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                    setSearchOpen(false);
                    setSearchQuery('');
                  }
                }}
                autoFocus
              />
              
              {searchQuery.trim() && (
                <div className="search-results">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.slice(0, 5).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.slug}`}
                          className="search-result-item"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <img src={getProductImage(product.image, product.name)} alt={product.name} />
                          <div className="search-result-info">
                            <span className="search-result-name">{product.name}</span>
                            <span className="search-result-category">{product.category?.name || ''}</span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to={`/search?q=${encodeURIComponent(searchQuery.trim())}`}
                        className="search-result-item view-all"
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery('');
                        }}
                      >
                        View all results
                      </Link>
                    </>
                  ) : (
                    <div className="search-result-item no-result">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setSearchOpen(false);
          }}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><a href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li className={`megamenu-wrapper ${megaMenuOpen ? 'active' : ''}`} onMouseLeave={handleMegaMenuMouseLeave}>
            <Link 
              to="/products" 
              className="nav-link"
              onMouseEnter={handleProductsLinkMouseEnter}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            
            {/* Mega Menu for Desktop */}
            <div 
              className="megamenu"
              onMouseEnter={handleMegaMenuMouseEnter}
            >
              <div className="megamenu-content">
                {/* Left Panel: Main Categories */}
                <div className="megamenu-categories">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className={`megamenu-category ${activeCategory === cat.id ? 'active' : ''}`}
                      onMouseEnter={() => handleCategoryHover(cat.id)}
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
                
                {/* Right Panel: Subcategories - Conditionally Rendered */}
                {activeCategory && (
                  <div className="megamenu-subcategories">
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
                              currentCat.subcategories.map((sub) => {
                                const subImage = getSubcategoryImage(sub.slug);
                                return (
                                  <Link
                                    key={sub.id}
                                    to={`/subcategory/${sub.slug}`}
                                    className="megamenu-sublink"
                                    onClick={() => { setMegaMenuOpen(false); setActiveCategory(null); }}
                                  >
                                    {subImage && (
                                      <div className="megamenu-sublink-image">
                                        <img src={subImage} alt={sub.name} />
                                      </div>
                                    )}
                                    <span className="megamenu-sublink-text">{sub.name}</span>
                                  </Link>
                                );
                              })
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
                )}
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
