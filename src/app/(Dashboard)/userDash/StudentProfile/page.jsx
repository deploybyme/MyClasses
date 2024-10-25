"use client"
import React, { useEffect, useState } from 'react';
import { auth, db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";  // Import signOut function
import { useRouter } from 'next/navigation';  // use Next.js router for navigation
import Profile from '@/app/components/Main/StudentComponent/Profile';

export default function StudentProfile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state
  const router = useRouter();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Fetch user data from Firestore
          const docRef = doc(db, "StudentRegister", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            // If user data not found, sign them out and redirect to login page
            await signOut(auth);
            router.push("/");  // Redirect to login page
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          await signOut(auth);
          router.push("/");  // Redirect to login page in case of error
        }
      } else {
        router.push("/");  // Redirect to login if not authenticated
      }
      setLoading(false);  // Stop loading after auth check
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
          <Profile 
            Name={userDetails.name} 
            Email={userDetails.email}
            Phone={userDetails.phone} 
            fatherName={userDetails.fatherName}
            AdmissionDate={userDetails.admissionDate}
            Id={userDetails.uid} 
            Course={userDetails.course}
            CMarks={userDetails["C Marks"]}
            CppMarks={userDetails["Cpp Marks"]}
            HtmlMarks={userDetails["HTML Marks"]}
            CssMarks={userDetails["CSS Marks"]}
            JsMarks={userDetails["JS Marks"]}
          />
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
