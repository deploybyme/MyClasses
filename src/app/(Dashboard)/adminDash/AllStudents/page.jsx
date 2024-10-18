"use client"
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";  // Import signOut function
import { useRouter } from 'next/navigation';  // use Next.js router for navigation
import GetStudentData from '@/app/components/Main/StudentData/GetStudentData';
import GetStudents from '@/app/components/Main/StudentData/GetStudents';

export default function AllStudent() {
  const [ToggleStudent, setToggleStudent] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state
  const router = useRouter();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Fetch admin user data from Firestore
          const docRef = doc(db, "AdminMember", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            // If user data not found, sign them out and redirect to login page
            await signOut(auth);
            router.push("/adminDash");  // Redirect to login page
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          await signOut(auth);
          router.push("/adminDash");  // Redirect to login page in case of error
        }
      } else {
        router.push("/adminDash");  // Redirect to login if not authenticated
      }
      setLoading(false);  // Stop loading after auth check
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Function to refresh the page
  async function refresh() {
    window.location.reload();
  }

  // Show spinner while loading user data
  if (loading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border my-5" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      {userDetails ? (
        <>
          <GetStudentData studentType={ToggleStudent ? "New" : "Old"} />

          <ul className="nav nav-pills mb-3 mx-2 border justify-content-center rounded text-light bg-light" id="pills-tab" role="tablist">
            <li className="nav-item me-2" role="presentation">
              <button className="nav-link link-dark border border-dark active"
                id="pills-Transition-tab" data-bs-toggle="pill" data-bs-target="#pills-Transition"
                type="button" role="tab" aria-controls="pills-Transition" aria-selected="false"
                onClick={() => setToggleStudent(!ToggleStudent)}
              >
                {ToggleStudent ? "Tab to Old Student" : "Tab to New Student"}
              </button>
            </li>
          </ul>

          <GetStudents studentType={ToggleStudent ? "New" : "Old"} />
        </>
      ) : (
        <div className='d-flex justify-content-center'>
          <div className="spinner-border my-5" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </>
  );
}
