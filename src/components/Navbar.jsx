import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useSelector } from "react-redux";
import Modal from "../pages/Modal";
import Login from "./Login";
import Register from "./Register";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true)

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
    const [showMenu, setShowMenu] = useState(false)

    const openSignUp = () => {
      setIsLogin(false)
      setIsModelOpen(true)
    }

    const openLogin = () => {
      setIsLogin(true)
      setIsModelOpen(true)
    }

    const products = useSelector(state => state.cart.products)


    const [user, setUser] = useState(null);

    // Listen for authentication state change
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(setUser);
      return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error(error.message);
      }
    };

  return (
   <nav className="bg-white flex flex-col items-center gap-5 justify-center md:mx-[4.5rem] md:w-[90%]">
    <div className="bg-black md:p-2 py-2 px-5 font-roboto text-white flex text-center items-center justify-center w-full">
        <p>Free shipping worldwide on all orders over $40</p>
    </div>
    <Link to='/' className="flex items-center justify-center flex-col">
        <img src={assets.logo} alt="" />
        <h3 className="text-2xl">Lou Paperie</h3>
    </Link>
    <hr className="w-full bg-black h-[2px]"/>
    <div className="w-full flex gap-5 md:gap-[4rem] items-center">
        <div className="w-2/4 md:w-1/4 flex hover:border border-black mx-3 p-3 gap-3">
            <img width={25} height={25} className="cursor-pointer" src={assets.search_icon} alt="" />
            <input className="w-3/4 border-none md:border-b md:border-black outline-none text-black font-roboto" type="text" placeholder="Search..." />
        </div>
        <div className="md:w-2/4 flex items-center justify-center font-roboto">
        <div onClick={()=>setShowMenu(!showMenu)} className="absolute right-8 top-[7rem] cursor-pointer md:hidden">
            {showMenu ? 
        <img width={30} height={30} src={assets.close_icon} alt="" />
            :
        <img className="z-[100]" width={30} height={30}  src={assets.menu_icon} alt="" />
        }
        </div>
        <div className={`flex flex-col md:gap-0 gap-5 bg-white text-center md:flex-row pt-5 md:items-center md:pb-5 pb-12 absolute md:static md:z-auto z-[50]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${showMenu ? 'top-[11.5rem] opacity-100':'top-[-490px] opacity-0 md:opacity-100'}`}>
             <Link
              to="/"
              onClick={() => handleLinkClick('home')}
              className={`${
                activeLink === 'home' ? 'text-gray-400 text-xl md:text-lg' : "w-full md:w-[100px] text-xl md:text-lg hover:text-gray-400 duration-300"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => handleLinkClick('shop')}
              className={`${
                activeLink === 'shop' ? 'text-gray-400 text-lg' : "w-full md:w-[100px] text-lg hover:text-gray-400 duration-300"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick('about')}
              className={`${
                activeLink === 'about' ? 'text-gray-400 text-lg' : "w-full md:w-[100px] text-lg hover:text-gray-400 duration-300"
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => handleLinkClick('blog')}
              className={`${
                activeLink === 'blog' ? 'text-gray-400 text-lg' : "w-full md:w-[100px] text-lg hover:text-gray-400 duration-300"
              }`}
            >
              Blog
            </Link>
            <Link
              to='/contact'
              onClick={() => handleLinkClick('contact')}
              className={`${
                activeLink === 'contact' ? 'text-gray-400 text-lg' : "w-full md:w-[100px] text-lg hover:text-gray-400 duration-300"
              }`}
            >
              Contact
            </Link>
             </div>
        </div>
        <div className="w-2/4 md:w-1/4 flex gap-5 md:gap-3 items-center font-roboto">
            <div>
            {user ? (
              <Link
              onClick={handleLogout}
              className={`${
                activeLink === 'logout' ? 'text-gray-400 text-lg flex items-center gap-2 ' : "flex items-center gap-2 w-full text-lg hover:text-gray-400 duration-300"
              }`}
            >
              Logout
            </Link> 
            ) : (
              <Link
              onClick={() => setIsModelOpen(true)}
              className={`${
                activeLink === 'login' ? 'text-gray-400 text-lg flex items-center gap-2 ' : "flex items-center gap-2 w-full text-lg hover:text-gray-400 duration-300"
              }`}
            >
              <FaUserCircle/>
              Log In
            </Link> 
            )}
            </div>
            <div>
            <Link
              to="/cart"
              onClick={() => handleLinkClick('cart')}
              className={`${
                activeLink === 'cart' ? 'flex text-gray-400 text-lg' : "w-full flex text-lg hover:text-gray-400 duration-300"
              }`}
            >
              <img src={assets.cart} width={30} alt="cart" className="relative" /> {products.length > 0 && (
                <p className="text-[11px] font-bold rounded-full bg-red-400 flex items-center justify-center text-white w-4 h-4 ml-5 absolute ">{products.length}</p>
              )}
            </Link>
            </div>
        </div>
    </div>
    <hr className="w-full bg-black h-[2px]"/>
    <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
              {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
   </nav>

  );
};

export default Navbar;
