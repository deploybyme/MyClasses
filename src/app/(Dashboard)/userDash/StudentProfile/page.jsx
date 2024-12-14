"use client";
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/app/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Import updateDoc
import { signOut } from "firebase/auth";  // Import signOut function
import { useRouter } from 'next/navigation';  // use Next.js router for navigation
import Profile from '@/app/components/Main/StudentComponent/Profile';
import { serverTimestamp } from 'firebase/firestore'; // Import serverTimestamp for Firestore

export default function StudentProfile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUserData = async (user) => {
    try {
      // Fetch user data from Firestore
      const docRef = doc(db, "StudentRegister", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserDetails(userData);
        console.log(userData);

        // Save timestamp to Firestore (assuming the document already exists)
        const timestampRef = doc(db, "StudentRegister", user.uid);
        await updateDoc(timestampRef, {
          lastPageLoad: serverTimestamp(),  // Save the server-side timestamp
        });
      } else {
        // If user data not found, sign them out and redirect to login page
        await signOut(auth);
        router.push("/");  // Redirect to login page
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      await signOut(auth);
      router.push("/");  // Redirect to login page in case of error
    } finally {
      setLoading(false);  // Stop loading after the auth state and user data fetch
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fetchUserData(user);
      } else {
        router.push("/");  // Redirect to login if not authenticated
        setLoading(false);
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className='container'>
      <div className="card-text placeholder-glow mt-3">
          <span className="placeholder bg-light col-12 col-md-4 me-2 rounded" style={{ height: "250px" }}></span>
          <span className="placeholder bg-light col-12 col-md-7 mt-md-0 mt-2 rounded" style={{ height: "250px" }}></span>
      </div>

      <div className="card-text placeholder-glow mt-3">
          <span className="placeholder bg-light col-12 col-md-4 bg-transparent me-2 rounded" style={{ height: "0px" }}></span>
          <span className="placeholder bg-light col-12 col-md-7 rounded" style={{ height: "250px" }}></span>
      </div>
      
      <div className="card-text placeholder-glow mt-1">
          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
      </div>

      <div className="card-text placeholder-glow mt-1">
          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
      </div>
      <div className="card-text placeholder-glow mt-1">
          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
      </div>

      <div className="card-text placeholder-glow mt-1">
          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
      </div>
  </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="text-center my-5">
        <h5>Error: Unable to fetch user data</h5>
      </div>
    );
  }

  return (
    <>
      {userDetails.studentType ? (
        <Profile 
          Name={userDetails.name} 
          Email={userDetails.email}
          Phone={userDetails.phone} 
          fatherName={userDetails.fatherName}
          AdmissionDate={userDetails.admissionDate}
          Id={userDetails.uid} 
          Course={userDetails.course}
          ClassPerformance={userDetails["Class Performance"]}
          TheoryMarks={userDetails["Theory Performance"]}
          ProjectMarks={userDetails["Project Performance"]}
        />
      ) : (
                  <div className='container'>
                      <div className="card-text placeholder-glow mt-3">
                          <span className="placeholder bg-light col-12 col-md-4 me-2 rounded" style={{ height: "250px" }}></span>
                          <span className="placeholder bg-light col-12 col-md-7 mt-md-0 mt-2 rounded" style={{ height: "250px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-3">
                          <span className="placeholder bg-light col-12 col-md-4 bg-transparent me-2 rounded" style={{ height: "0px" }}></span>
                          <span className="placeholder bg-light col-12 col-md-7 rounded" style={{ height: "250px" }}></span>
                      </div>
                      
                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>
                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>
                  </div>
      )}
    </>
  );
}
