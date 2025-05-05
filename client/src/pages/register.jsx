import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { User, Lock, Mail, CheckCircle } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-purple-50 rounded-lg shadow-lg">
      <h2 className="text-3xl mb-6 font-bold text-center text-purple-700">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="flex items-center border p-3 rounded bg-white">
          <Mail className="mr-3 text-purple-500" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center border p-3 rounded bg-white">
          <Lock className="mr-3 text-purple-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center border p-3 rounded bg-white">
          <Lock className="mr-3 text-purple-500" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full outline-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white p-3 w-full rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>
      <div className="flex items-center justify-center mt-6 text-purple-600">
        <CheckCircle className="mr-2" /> Already have an account? <a href="/login" className="font-bold underline ml-1">Login</a>
      </div>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
}