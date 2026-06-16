import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategoryBySlug, getProductsByCategory } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import '../styles/products.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const CategoryPage = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

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

  if (!category) {
    return (
      <div className="app">
        <Navbar />
        <div className="container" style={{ padding: '200px 0', textAlign: 'center', color: 'white' }}>Category not found</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">OUR CATEGORY</span>
            <h1 className="section-title">{category.name}</h1>
          </div>

          {category.bannerText && (
            <div className="category-banner reveal-up">
              <h2>{category.bannerText}</h2>
            </div>
          )}

          {category.description && (
            <div className="category-description reveal-up">
              {category.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}

          {category.subcategories.length > 0 && (
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ color: 'var(--gold)', marginBottom: '30px', fontSize: '1.5rem' }}>Subcategories</h3>
              <div className="product-grid">
                {category.subcategories.map((sub) => (
                  <Link key={sub.id} to={`/subcategory/${sub.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                    <div className="product-image-wrapper" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '250px' }}>
                      <div style={{ color: 'var(--gold)', fontSize: '3rem' }}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-category">{category.name}</div>
                      <h3 className="product-name">{sub.name}</h3>
                      <div className="product-link" style={{ textDecoration: 'none', color: 'var(--gold)' }}>
                        View Products
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {products.length > 0 && (
            <div>
              <h3 style={{ color: 'var(--gold)', marginBottom: '30px', fontSize: '1.5rem' }}>Products in {category.name}</h3>
              <div className="product-grid">
                {products.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                    <div className="product-image-wrapper">
                      <img src={getProductImage(product.images[0], product.name)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            </div>
          )}

          {products.length === 0 && category.subcategories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p className="serif" style={{ color: 'rgba(255,255,255,0.6)' }}>No products or subcategories available yet.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryPage;
