import React, { useState } from "react";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Please enter both email and password");
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      Cookies.set("authToken", token, { expires: 7 }); // Set cookie for 7 days
      toast.success("Login successful!");
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
      toast.error("Invalid email or password");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      Cookies.set("authToken", token, { expires: 7 }); // Set cookie for 7 days
      toast.success("Google signup successful!");
      navigate("/");
    } catch (err) {
      setError("Google signup failed. Please try again.");
      toast.error("Google signup failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-xl shadow-2xl border border-purple-500/20">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="p-3 rounded-full bg-purple-700 inline-flex">
                <LogIn size={28} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="mt-2 text-sm text-purple-300">Sign in to continue to your account</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-purple-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-10 py-3 border-2 border-purple-700 focus:border-purple-500 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock size={18} className="text-purple-400" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-10 py-3 border-2 border-purple-700 focus:border-purple-500 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn size={18} className="text-purple-300 group-hover:text-purple-200" />
                </span>
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2">Sign in with Google</span>
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="font-medium text-purple-400 hover:text-purple-300 flex items-center justify-center mt-1">
              Sign up now <ArrowRight size={16} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}