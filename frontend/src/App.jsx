import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminCategories from './pages/AdminCategories';
import AdminSubcategories from './pages/AdminSubcategories';
import AdminProducts from './pages/AdminProducts';
import './styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/subcategory/:slug" element={<SubcategoryPage />} />
      <Route path="/product/:slug" element={<ProductDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/:categorySlug/:subcategorySlug/:slug" element={<ProductDetailPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/categories" element={<AdminCategories />} />
      <Route path="/admin/subcategories" element={<AdminSubcategories />} />
      <Route path="/admin/products" element={<AdminProducts />} />
    </Routes>
  );
}

export default App;
