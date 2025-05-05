import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Login</h2>
      <p>Test: Login component is rendering.</p> {/* Test message */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 w-full border"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 w-full border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white p-2 w-full mt-4"
      >
        Login with Google
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
