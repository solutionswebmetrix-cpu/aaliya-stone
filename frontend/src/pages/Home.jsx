import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../utils/data';
import { getProductImage } from '../utils/productImages';
import { CONTACT_INFO, formatWhatsAppMessage, formatEmailSubject, formatEmailBody } from '../utils/constants';

// Import banner images and about image
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import aboutImage from '../assets/about.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const products = featuredProducts;
  const loading = false;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleWhatsApp = () => {
    const msg = formatWhatsAppMessage(formData.name, formData.email, 'N/A', formData.message);
    window.open(`${CONTACT_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(formData.subject || formatEmailSubject());
    const body = encodeURIComponent(formatEmailBody(formData.name, formData.email, 'N/A', formData.message));
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  useEffect(() => {

    // GSAP Animations
    gsap.fromTo('.hero-title', 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', stagger: 0.3, delay: 0.5 }
    );
    gsap.fromTo('.hero-subtitle', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.3 }
    );
    gsap.fromTo('.hero-cta', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, delay: 1.8 }
    );

    // ScrollTrigger for sections
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

  const interiorProducts = [
    { name: 'Makrana White Marble', image: 'Makrana white marble.png', slug: 'makrana-white-marble' },
    { name: 'Black Galaxy Granite', image: 'Black galaxy granite.png', slug: 'black-galaxy-granite' },
    { name: 'Rainforest Brown Marble', image: 'Rainforest brown.png', slug: 'rainforest-brown-marble' },
    { name: 'Basalt Stone', image: 'Basalt.png', slug: 'basalt' }
  ];

  const projects = [
    { name: 'Luxury Villa', type: 'Residential', image: 'Blue Agate Stone Vanity Top.png' },
    { name: 'Five-Star Hotel', type: 'Hospitality', image: 'Sandstone Garden Planters.png' },
    { name: 'Temple & Sacred Space', type: 'Religious', image: 'Luxury Hand-Carved Marble Mandir.png' }
  ];

  return (
    <div className="app">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-slider">
          <div className="hero-slider-track">
            {/* First set of images */}
            <div className="hero-slider-slide">
              <img src={banner1} alt="Banner 1" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner2} alt="Banner 2" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner3} alt="Banner 3" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner4} alt="Banner 4" />
            </div>
            {/* Duplicate set for infinite scroll */}
            <div className="hero-slider-slide">
              <img src={banner1} alt="Banner 1" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner2} alt="Banner 2" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner3} alt="Banner 3" />
            </div>
            <div className="hero-slider-slide">
              <img src={banner4} alt="Banner 4" />
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="hero-subtitle-top">PREMIUM NATURAL STONE EXPORTER</span>
          </motion.div>
          <h1 className="hero-title">
            Crafting Timeless<br />
            <span className="gold-text">Stone Masterpieces</span>
          </h1>
          <p className="hero-subtitle serif">
            Premium Natural Stones Exported Worldwide to Architects, Interior Designers & Luxury Projects
          </p>
          <div className="hero-cta">
            <a href="#products" className="cta-primary">
              <div className="btn-bg"></div>
              <span>Explore Collection</span>
            </a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </div>
        </div>

        <div className="scroll-indicator">
          <motion.div 
            className="scroll-indicator-inner" 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="scroll-dot"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-dark">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal-up">
              <span className="section-label">OUR HERITAGE</span>
              <h2 className="section-title">
                Excellence in <span className="gold-text">Natural Stone</span>
              </h2>
              <p className="serif">
                For over three decades, Aaliya Stones has been at the forefront of the natural stone industry, exporting premium quality marble, granite, and other natural stones to the world's most prestigious projects.
              </p>
              <p className="serif">
                From iconic buildings to luxury residences, our stones have adorned spaces that define timeless elegance and unparalleled craftsmanship.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper reveal-up">
              <img 
                src={aboutImage} 
                alt="Stone Factory" 
              />
              <div className="about-accent-box"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">OUR PRODUCTS</span>
            <h2 className="section-title">
              Premium <span className="gold-text">Stone Collections</span>
            </h2>
          </div>
          
          <div className="product-grid">
            {loading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'white' }}>Loading products...</div>
            ) : (
              products.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} className="product-card" style={{ textDecoration: 'none' }}>
                  <div className="product-image-wrapper">
                    {product.images?.[0] && getProductImage(product.images[0]) ? (
                      <img src={getProductImage(product.images[0])} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: '#2a2a2a' }}></div>
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
              ))
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal-up">
            <Link to="/products" className="cta-primary" style={{ textDecoration: 'none' }}>
              <div className="btn-bg"></div>
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interior Collection */}
      <section id="interior" className="section section-dark">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">INTERIOR COLLECTION</span>
            <h2 className="section-title">
              Luxury <span className="gold-text">Stone Elements</span>
            </h2>
          </div>
          
          <div className="collection-grid">
            {interiorProducts.map((product, index) => (
              <Link key={`interior-${index}`} to={`/product/${product.slug}`} className="collection-card" style={{ textDecoration: 'none' }}>
                <div className="product-image-wrapper">
                  <img src={getProductImage(product.image)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="collection-overlay"></div>
                <div className="collection-content">
                  <h3 className="collection-title">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <span className="section-label">OUR PROJECTS</span>
            <h2 className="section-title">
              Prestigious <span className="gold-text">Projects</span>
            </h2>
          </div>
          
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={`project-${index}`} className="project-card">
                <div className="product-image-wrapper">
                  <img src={getProductImage(project.image)} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3 className="project-title">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal-up">
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="section-title">
                Let's Create <span className="gold-text">Together</span>
              </h2>
              <p className="serif">
                Contact our team to discuss your project requirements, request samples, or get a detailed quote. We're here to help you find the perfect natural stone for your vision.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 98280 10456</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@aaliyastones.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Opp. Anand Nagar<br />Manglana Road<br />Makrana 341505<br />Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal-up">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows="6"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '0.75rem',
                      background: '#25D366',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.812 11.812 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleEmail}
                    className="contact-submit"
                    style={{ margin: 0 }}
                  >
                    <div className="btn-bg"></div>
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
