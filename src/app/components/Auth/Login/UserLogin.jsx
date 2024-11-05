"use client";
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase'; // Make sure to import Firestore
import Modal from '../SignUp/Modal';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // updated import for Next.js 13+

export default function UserLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Only run the router logic after the component has mounted
  useEffect(() => {
    setIsMounted(true); // Set to true once component is mounted
  }, []);

  // Check if user is already logged in on client-side component mount
  useEffect(() => {
    if (isMounted) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/userDash'); // Redirect to dashboard if already signed in
        }
      });
      return () => unsubscribe();
    }
  }, [isMounted, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set persistence to 'local', so user stays logged in even after closing the browser
      await setPersistence(auth, browserLocalPersistence);
      
      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard
      router.push("/userDash");

    } catch (error) {
      alert(error.message); 
    }
  };

  return (
    <div className="d-flex justify-content-center align-self-center py-5 mt-5">
      <form id="LoginForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 text-end">
            <Link className='text-decoration-none text-info text-end' href="/AdminLogin">Admin</Link>
          </div>
          <div className='col-12'>
            <div className='container d-flex flex-column'>
              <i className="bi bi-feather align-self-center icon"></i>
              <h5 className='fw-light mt-1 text-center'>Student</h5>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <label htmlFor="LoginEmail" className="form-label">Student Email</label>
            <input type="email" className="form-control shadow-none"
              placeholder="Enter your Email" id="LoginEmail" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <label htmlFor="LoginPassword" className="form-label">Password </label>
            <input type={`${show ? "text" : "password"}`} className="form-control shadow-none" required
              placeholder="Enter Password" id="LoginPassword" minLength={4} maxLength={11}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-check shadow-none mt-1">
              <input className="form-check-input" type="checkbox" id="Show" onClick={() => setShow(!show)} />
              <label className="form-check-label" htmlFor="Show">
                <small>Show Password</small>
              </label>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <input type="submit" className="form-control shadow-none btn btn-success" />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <button type="button" className="nav-link text-decoration-none link-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Register Student
            </button>
          </div>
        </div>
      </form>   
      <Modal />
    </div>
  );
}
