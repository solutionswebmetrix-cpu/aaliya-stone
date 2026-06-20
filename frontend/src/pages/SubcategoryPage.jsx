import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findSubcategoryBySlug, getProductsBySubcategory } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import '../styles/products.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SubcategoryPage = () => {
  const { slug } = useParams();
  const subcategory = findSubcategoryBySlug(slug);
  const products = getProductsBySubcategory(slug);

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

  if (!subcategory) {
    return (
      <div className="app">
        <Navbar />
        <div className="container" style={{ padding: '200px 0', textAlign: 'center', color: 'white' }}>Subcategory not found</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">OUR SUBCATEGORY</span>
            <h1 className="section-title">{subcategory.name}</h1>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <Link to={`/category/${subcategory.category?.slug || ''}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              ← Back to {subcategory.category?.name}
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                  <div className="product-image-wrapper">
                      {getProductImage(product.images[0], product.name) ? (
                        <img src={getProductImage(product.images[0], product.name)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: '#2a2a2a' }}></div>
                      )}
                    </div>
                  <div className="product-content">
                    <div className="product-category">{product.category?.name || ''}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description?.slice(0, 100)}...</p>
                    <div className="product-link" style={{ textDecoration: 'none', color: 'var(--gold)' }}>
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
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p className="serif" style={{ color: 'rgba(255,255,255,0.6)' }}>No products available yet.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SubcategoryPage;
