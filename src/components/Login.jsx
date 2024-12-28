import React, {useState} from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = ({ openSignUp }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");


   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setMessage("");


      try {
       const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;

        if(user.emailVerified) {
          setMessage(toast.success('Logged in Successfully', {position: 'top-center'}))
          window.location.href = '/'
        }else {
          setError("Please verify your email address before signing in.");
        }
      } catch (err) {
        setError(err.message);
      }
    }

  return (
    <div>
    <ToastContainer/>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-green-500">{message}</p>}
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

        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="italic">
            Forgot Password?
          </a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-black text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="items-center justify-center flex gap-3">
        <span className="text-gray-700">Don't have an Account?</span>
        <button className="font-semibold" onClick={openSignUp}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
