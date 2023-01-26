import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='store' element={<Store />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='compare' element={<CompareProducts />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='signup' element={<Signup />} />
          <Route path='reset-password' element={<Resetpassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
