import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductBySlug } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RequestQuoteModal from '../components/RequestQuoteModal';

const ProductDetailPage = () => {
  const { slug, productSlug } = useParams();
  const currentSlug = productSlug || slug;
  const product = getProductBySlug(currentSlug);
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Reset active image to 0 whenever product changes
    setActiveImage(0);
    
    if (!product) return;

    document.title = product.metaTitle || product.seoTitle || product.name;

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
  }, [product, currentSlug]);

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
      <RequestQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName={product.name} />
      <section className="section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <Link to="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: '500' }}>
              ← Back to Home
            </Link>
            {product.category && (
              <span style={{ margin: '0 1rem', color: 'rgba(255,255,255,0.4)' }}>/</span>
            )}
            {product.category && (
              <Link to={`/category/${product.category.slug}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: '500' }}>
                {product.category.name}
              </Link>
            )}
            {product.subcategory && (
              <span style={{ margin: '0 1rem', color: 'rgba(255,255,255,0.4)' }}>/</span>
            )}
            {product.subcategory && (
              <Link to={`/subcategory/${product.subcategory.slug}`} style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: '500' }}>
                {product.subcategory.name}
              </Link>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="product-detail-grid">
            <div>
              <div className="product-gallery-main" style={{ aspectRatio: '1/1', background: '#1a1a1a' }}>
                {getProductImage(product.images[activeImage]) ? (
                  <img
                    src={getProductImage(product.images[activeImage])}
                    alt={product.imageAlt || product.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%' }}></div>
                )}
              </div>
              {product.imageCaption && (
                <div className="image-caption">{product.imageCaption}</div>
              )}
              {product.images.length > 1 && (
                <div className="product-gallery-thumbnails">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`product-gallery-thumbnail ${activeImage === idx ? 'active' : ''}`}
                      style={{
                        aspectRatio: '1/1',
                        background: '#1a1a1a',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {getProductImage(img) ? (
                        <img
                          src={getProductImage(img)}
                          alt={`Thumbnail ${idx + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%' }}></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="section-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>{product.category?.name || ''}</span>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.75rem', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>{product.name}</h1>
              <p className="serif" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', lineHeight: '1.9', marginBottom: '2.5rem' }}>
                {product.description}
              </p>

              <div className="product-tags">
                {(product.tags || []).map((tag, idx) => (
                  <span key={idx} className="product-tag">{tag}</span>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="cta-primary"
                style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '3rem', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div className="btn-bg"></div>
                <span>Request Quote</span>
              </button>
            </div>
          </div>

          <div className="product-detail-section">
            {product.features && product.features.length > 0 && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h2>Features</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '3px', fontSize: '1.5rem', lineHeight: '1' }}>✦</span>
                      <span className="serif">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h2>Benefits</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '3px', fontSize: '1.5rem', lineHeight: '1' }}>✦</span>
                      <span className="serif">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h2>Applications</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {product.applications.map((app, idx) => (
                    <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginTop: '3px', fontSize: '1.5rem', lineHeight: '1' }}>✦</span>
                      <span className="serif">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.maintenance && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h2>Maintenance</h2>
                <p className="serif">{product.maintenance}</p>
              </div>
            )}

            {product.whyChoose && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h2>Why Choose {product.name}</h2>
                <p className="serif">{product.whyChoose}</p>
              </div>
            )}

            {(product.sections || []).map((section) => (
              <div key={section.title} style={{ marginBottom: '2.5rem' }}>
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
