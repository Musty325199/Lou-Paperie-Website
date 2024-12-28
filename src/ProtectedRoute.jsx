import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Modal from "./pages/Modal";
import Login from "./components/Login";
import Register from "./components/Register";

const ProtectedRoute = ({ children }) => {

    const [isModelOpen, setIsModelOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(true);

    const openSignUp = () => {
        setIsLogin(false)
        setIsModelOpen(true)
      }
  
      const openLogin = () => {
        setIsLogin(true)
        setIsModelOpen(true)
      }
  


  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center font-roboto text-xl m-5">Loading...</p>;

  if (!user || !user.emailVerified) {
    return    <>
       <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
    {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
</Modal>
    </>

  
    // <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
