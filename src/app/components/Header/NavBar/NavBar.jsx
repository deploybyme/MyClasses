"use client"
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import 'bootstrap-icons/font/bootstrap-icons.min.css';

export default function NavBar(props) {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        window.location.href = "/";
        return; // Early return if user is not authenticated
      }

      const docRef = doc(db, props.Directory, user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        window.location.href = "/";
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <nav id="navbar" className="navbar navbar-dark border-bottom-dark shadow fixed-top me-0 me-lg-2">
        <div className="container-fluid">
          <button className="navbar-toggler shadow-none border-0 dash-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <i className="bi bi-menu-button-wide text-light m-0 fs-3"></i>
          </button>
          <a className="navbar-brand">
            <span className="d-flex"> 
              <i className="bi bi-feather text-light me-2"></i>
              <b className='fw-light'>MyClasses</b>
            </span>
          </a>

          <div className="btn-group me-sm-3 me-2">
            <button type="button" className="btn btn-light p-0 dropdown-toggle rounded-pill shadow-none border-0 d-flex align-items-center" data-bs-toggle="dropdown">
              {userDetails ? (
                <>
                  <div className="rounded-circle bg-light avatar fw-bold d-flex align-items-center justify-content-center">
                    {userDetails.name?userDetails.name.charAt(0).toUpperCase():""}
                </div>
                  <b className='mx-2 pe-0 pe-lg-2 fw-normal username1'>{userDetails.name}</b>
                </>
              ) : (
                <>
                  <small className='p-3 border border-black rounded-pill'></small>
                </>
              )}
            </button>
            <ul className="dropdown-menu dropdown-menu-end px-1">
              {userDetails ? (
                <>
                  <li className='pt-1 username text-center'>
                    <b className='fw-bold'>{userDetails.name}</b>
                  </li>
                  <li className='pt-1 username text-center text-secondary'>
                    <b className='fw-bold'>{userDetails.course ? userDetails.course : userDetails.MemberType}</b>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
