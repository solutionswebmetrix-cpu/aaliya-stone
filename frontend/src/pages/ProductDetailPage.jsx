import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductBySlug } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { slug, productSlug } = useParams();
  const product = getProductBySlug(productSlug || slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) return;

    document.title = product.seoTitle || product.name;

    const setMeta = (key, value, isProperty = false) => {
      if (!value) return;
      const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let metaTag = document.head.querySelector(selector);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (isProperty) metaTag.setAttribute('property', key);
        else metaTag.name = key;
        document.head.appendChild(metaTag);
      }
      metaTag.content = value;
    };

    setMeta('description', product.metaDescription || product.description);
    setMeta('og:title', product.ogTitle || product.name, true);
    setMeta('og:description', product.ogDescription || product.metaDescription || product.description, true);
    setMeta('og:image', product.images?.[0] ? getProductImage(product.images[0]) : '', true);
  }, [product]);

  if (!product) {
    return (
      <div className="app">
        <Navbar />
        <div className="container" style={{ padding: '200px 0', textAlign: 'center', color: 'white' }}>Product not found</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div style={{ marginBottom: '30px' }}>
            <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
              ← Back to Home
            </Link>
            {product.category && (
              <span style={{ margin: '0 10px', color: 'rgba(255,255,255,0.4)' }}>/</span>
            )}
            {product.category && (
              <Link to={`/category/${product.category.slug}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                {product.category.name}
              </Link>
            )}
            {product.subcategory && (
              <span style={{ margin: '0 10px', color: 'rgba(255,255,255,0.4)' }}>/</span>
            )}
            {product.subcategory && (
              <Link to={`/subcategory/${product.subcategory.slug}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                {product.subcategory.name}
              </Link>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <div style={{ aspectRatio: '1/1', background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src={getProductImage(product.images[activeImage])}
                  alt={product.imageAlt || product.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {product.imageCaption && (
                <div className="image-caption">{product.imageCaption}</div>
              )}
              {product.images.length > 1 && (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(4, product.images.length)}, 1fr)`, gap: '10px' }}>
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      style={{
                        aspectRatio: '1/1',
                        background: '#1a1a1a',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: activeImage === idx ? '2px solid var(--gold)' : '2px solid transparent',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <img
                        src={getProductImage(img)}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="section-label">{product.category?.name || ''}</span>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', color: 'white', marginBottom: '20px' }}>{product.name}</h1>
              <p className="serif" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '30px' }}>
                {product.description}
              </p>

              <div className="product-tags">
                {(product.tags || []).map((tag, idx) => (
                  <span key={idx} className="product-tag">{tag}</span>
                ))}
              </div>

              <a href="#contact" className="cta-primary" style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '30px' }}>
                <div className="btn-bg"></div>
                <span>Request Quote</span>
              </a>
            </div>
          </div>

          <div className="product-detail-section">
            {product.features && product.features.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>Features</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '2px' }}>•</span>
                      <span className="serif" style={{ color: 'rgba(255,255,255,0.8)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>Benefits</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '2px' }}>•</span>
                      <span className="serif" style={{ color: 'rgba(255,255,255,0.8)' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>Applications</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.applications.map((app, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '2px' }}>•</span>
                      <span className="serif" style={{ color: 'rgba(255,255,255,0.8)' }}>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.maintenance && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>Maintenance</h2>
                <p className="serif" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>{product.maintenance}</p>
              </div>
            )}

            {product.whyChoose && (
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--gold)' }}>Why Choose {product.name}</h2>
                <p className="serif" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>{product.whyChoose}</p>
              </div>
            )}

            {(product.sections || []).map((section) => (
              <div key={section.title} style={{ marginBottom: '2rem' }}>
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          {product.faq?.length > 0 && (
            <div className="product-faq">
              <h2>Frequently Asked Questions</h2>
              {product.faq.map((item) => (
                <div key={item.question} className="product-faq-item">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          {product.structuredData && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product.structuredData) }} />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
