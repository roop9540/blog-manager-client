import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './layout/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './layout/Footer';
import Blogs from './pages/blog/Blogs';
import EditBlogs from './pages/blog/EditBlogs';
import BlogHome from './pages/blog/BlogHome';


function App() {
  return (
    <>
      <BrowserRouter >
        <header className='sticky-top'>
          <Header />
        </header>
        <main className='' >
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/blog' element={<Blogs/>} />
            <Route path='/blog/:slug' element={<BlogHome/>} />


          </Routes>
        </main>

        <footer className='d-flex justify-content-center' >
          <Footer />
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
