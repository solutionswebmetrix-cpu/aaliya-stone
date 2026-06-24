import React, { useState } from 'react';
import { CONTACT_INFO, formatWhatsAppMessage, formatEmailSubject, formatEmailBody } from '../utils/constants';

const RequestQuoteModal = ({ isOpen, onClose, productName = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: productName ? `I'd like a quote for ${productName}` : ''
  });

  const handleWhatsApp = () => {
    const msg = formatWhatsAppMessage(formData.name, formData.email, formData.phone, formData.message, productName);
    window.open(`${CONTACT_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(formatEmailSubject(productName));
    const body = encodeURIComponent(formatEmailBody(formData.name, formData.email, formData.phone, formData.message, productName));
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{
        background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(212,175,55,0.2)',
        padding: '2.5rem',
        maxWidth: '600px',
        width: '100%',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}>&times;</button>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'white',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          {productName ? `Request Quote for ${productName}` : 'Request Quote'}
        </h2>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Phone</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <label style={{ color: 'var(--gold)', display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Message</label>
            <textarea
              rows="4"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '0.75rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical'
              }}
            ></textarea>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
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
                gap: '0.5rem',
                transition: 'transform 0.2s ease'
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
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, var(--gold), #c99a3e)',
                color: 'black',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'transform 0.2s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send via Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteModal;
