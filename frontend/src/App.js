import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navb';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';



function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}

    
export default App;
