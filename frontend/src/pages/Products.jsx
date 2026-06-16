import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories, getAllProducts } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const products = getAllProducts();
  const categories = getAllCategories();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || [product.name, product.description, product.category?.name, product.tags?.join(' ')].some((field) => field?.toLowerCase().includes(query));
    const matchesCategory = !categoryFilter || product.category?.slug === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // ScrollTrigger for section header
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      gsap.fromTo(el, 
        { y: 100, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: el, 
            start: 'top 85%', 
            toggleActions: 'play none none reverse' 
          } 
        }
      );
    });

    // ScrollTrigger for product cards
    gsap.utils.toArray('.product-card').forEach((el) => {
      gsap.fromTo(el, 
        { y: 80, opacity: 0, scale: 0.95 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: el, 
            start: 'top 90%', 
            toggleActions: 'play none none reverse' 
          } 
        }
      );
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">OUR COLLECTION</span>
            <h1 className="section-title">All Products</h1>
          </div>
          <div className="product-filters">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, category or feature"
              className="product-filter-input"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="product-filter-select"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                <div className="product-image-wrapper">
                  {product.images?.[0] ? (
                    <img src={getProductImage(product.images[0], product.name)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2a2a2a' }}>
                      <span style={{ color: '#666' }}>No Image</span>
                    </div>
                  )}
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category?.name || ''}</div>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
