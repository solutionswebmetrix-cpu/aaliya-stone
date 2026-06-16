import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../utils/data';

const AdminProducts = () => {
  const products = getAllProducts();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', margin: 0 }}>Manage Products</h1>
        <Link to="/admin/dashboard" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </div>

      <div style={{ background: 'var(--dark)', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#1a1a1a' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Name</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Subcategory</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} style={{ borderTop: '1px solid #333' }}>
                <td style={{ padding: '1rem', color: 'white' }}>{prod.name}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{prod.category?.name}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{prod.subcategory?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
