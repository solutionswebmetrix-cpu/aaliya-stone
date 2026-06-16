import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../utils/data';

const AdminSubcategories = () => {
  const categories = getAllCategories();
  const subcategories = categories.flatMap(cat => cat.subcategories.map(sub => ({ ...sub, category: cat })));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: 'white', margin: 0 }}>Manage Subcategories</h1>
        <Link to="/admin/dashboard" style={{ color: 'var(--gold)', textDecoration: 'none' }}>← Back to Dashboard</Link>
      </div>

      <div style={{ background: 'var(--dark)', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#1a1a1a' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Name</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: 'white' }}>Slug</th>
            </tr>
          </thead>
          <tbody>
            {subcategories.map((sub) => (
              <tr key={sub.id} style={{ borderTop: '1px solid #333' }}>
                <td style={{ padding: '1rem', color: 'white' }}>{sub.name}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{sub.category.name}</td>
                <td style={{ padding: '1rem', color: 'white' }}>{sub.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubcategories;
