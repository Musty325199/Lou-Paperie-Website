import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const Register = ({ openLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");


   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Send confirmation email
        await sendEmailVerification(user);
        setMessage(toast.success("Registration successful! Please check your email to verify your account."));
        setEmail("");
        setPassword("");

        if (!user.emailVerified) {
          setMessage(toast.info("Email not verified. Resending verification email..."));
          await sendEmailVerification(user);
          setMessage(toast.info("Verification email sent. Please check your inbox."));
        }

      } catch (err) {
        setError(err.message);
      }
    }

  return (
    <div>
      <ToastContainer/>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{toast.error(error)}</p>}
      {message && <p className="text-green-500">{toast.success(message)}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-black text-white py-2">
            Sign Up
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <div className="items-center justify-center flex gap-3">
        <span className="text-gray-700">Already have an Account?</span>
        <button className="font-semibold" onClick={openLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Register;
