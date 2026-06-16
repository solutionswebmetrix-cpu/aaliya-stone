import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, getAllCategories } from '../utils/data';

const AdminDashboard = () => {
  const products = getAllProducts();
  const categories = getAllCategories();
  const subcategories = categories.flatMap(cat => cat.subcategories.map(sub => ({ ...sub, category: cat })));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ color: 'white', marginBottom: '2rem' }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/admin/categories" style={{ background: 'var(--gold)', color: 'black', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            Manage Categories
          </Link>
          <Link to="/admin/subcategories" style={{ background: 'var(--gold)', color: 'black', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            Manage Subcategories
          </Link>
          <Link to="/admin/products" style={{ background: 'var(--gold)', color: 'black', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            Manage Products
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ background: 'var(--dark)', padding: '2rem', borderRadius: '8px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{categories.length}</div>
          <div style={{ color: 'white' }}>Categories</div>
        </div>
        <div style={{ background: 'var(--dark)', padding: '2rem', borderRadius: '8px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{subcategories.length}</div>
          <div style={{ color: 'white' }}>Subcategories</div>
        </div>
        <div style={{ background: 'var(--dark)', padding: '2rem', borderRadius: '8px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{products.length}</div>
          <div style={{ color: 'white' }}>Products</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ background: 'var(--dark)', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Recent Products</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {products.slice(0, 5).map((p) => (
              <li key={p.id} style={{ color: 'white', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                {p.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: 'var(--dark)', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.slice(0, 5).map((c) => (
              <li key={c.id} style={{ color: 'white', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
