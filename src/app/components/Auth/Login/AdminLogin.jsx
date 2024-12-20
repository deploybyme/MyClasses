"use client";
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Updated import for Next.js 13+

export default function AdminLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error state
  const router = useRouter();

  // Check if user is already logged in on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/adminDash'); // Redirect to dashboard if already signed in
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state before making the request
    
    try {
      // Set persistence to 'local' to keep the user signed in
      await setPersistence(auth, browserLocalPersistence);

      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      
      // Redirect to admin dashboard
      router.push("/adminDash");

      // Reset form on success
      setEmail("");
      setPassword("");
      
    } catch (error) {
      setError(error.message); // Set error message to state
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="d-flex justify-content-center align-self-center py-5 mt-5">
      <form className='bg-light shadow text-black' id="LoginForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 text-end">
            <Link className='text-decoration-none text-info text-end' href="/">Student</Link>
          </div>

          <div className='col-12'>
            <div className='container d-flex flex-column'>
              <i className="bi bi-person align-self-center icon"></i>
              <h5 className='fw-light mt-1 text-center'>Admin</h5>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <label htmlFor="LoginEmail" className="form-label">Admin Email</label>
            <input 
              type="email" 
              className="form-control shadow-none" 
              placeholder="Enter your Email" 
              id="LoginEmail" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <label htmlFor="LoginPassword" className="form-label">Password</label>
            <input 
              type={show ? "text" : "password"} 
              className="form-control shadow-none" 
              required
              placeholder="Password [min-6 & max-11]"
              id="LoginPassword" 
              minLength={6} 
              maxLength={11}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-check shadow-none mt-1">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="Show" 
                onClick={() => setShow(!show)} 
              />
              <label className="form-check-label" htmlFor="Show">
                <small>Show Password</small>
              </label>
            </div>
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}

        <div className="row my-3">
          <div className="col-12">
            <button 
              type="submit" 
              className="form-control shadow-none btn btn-success" 
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
 