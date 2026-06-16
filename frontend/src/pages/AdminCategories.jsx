import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../utils/data';

const AdminCategories = () => {
  const categories = getAllCategories();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', margin: 0 }}>Manage Categories</h1>
        <Link to="/admin/dashboard" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </div>

      <div style={{ background: 'var(--dark)', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#1a1a1a' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Name</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Slug</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Subcategories</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} style={{ borderTop: '1px solid #333' }}>
                <td style={{ padding: '1rem', color: 'white' }}>{cat.name}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{cat.slug}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{cat.subcategories.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategories;
