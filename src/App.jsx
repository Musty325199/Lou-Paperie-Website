import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import Footer from './components/Footer'
import ProtectedRoute from './ProtectedRoute'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { toast, ToastContainer } from 'react-toastify'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'



const App = () => {
  const [order, setOrder] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.emailVerified) {
          auth.signOut();
        }
      }
    });
  
    return () => unsubscribe();
  }, []);


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route path='/checkout' element={<Checkout setOrder={setOrder} />}/>
        <Route path='/order-confirmation' element={<Order order={order} />}/>
        <Route path='/blog-page/:id' element={<BlogPage/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App