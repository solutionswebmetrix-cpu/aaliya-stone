import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchProducts } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = searchProducts(query);

  return (
    <div className="app">
      <Navbar />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">Search Results</span>
            <h1 className="section-title">
              {query ? `Results for "${query}"` : 'Search our products'}
            </h1>
          </div>
          
          {results.length > 0 ? (
            <div className="product-grid">
              {results.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                  <div className="product-image-wrapper">
                    <img src={getProductImage(product.image, product.name)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="product-content">
                    <div className="product-category">{product.category?.name || product.categorySlug}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description?.slice(0, 80)}...</p>
                    <div className="product-link">
                      View Details
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="reveal-up" style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h2 style={{ color: 'white', marginBottom: '1rem' }}>No results found</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Try searching for something else</p>
              <Link to="/products" className="cta-primary" style={{ textDecoration: 'none', marginTop: '2rem', display: 'inline-block' }}>
                <div className="btn-bg"></div>
                <span>View All Products</span>
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchPage;
