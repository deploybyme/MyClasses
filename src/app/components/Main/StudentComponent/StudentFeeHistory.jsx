import React, { useState, useEffect } from 'react';
import { db, auth } from '@/app/firebase'; // Firebase imports
import { doc, getDoc } from 'firebase/firestore';

export default function StudentFeeHistory() {
  const [history, setHistory] = useState([]); // To store payment history

  const [userDetails, setUserDetails] = useState(null); // To store user details (student data)
  
  // Function to fetch user data
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "StudentRegister", user.uid); // Fetch data using user.uid
          const docSnap = await getDoc(docRef); // Get the document

          if (docSnap.exists()) {
            const studentData = docSnap.data();
            setHistory(studentData.payments || []); // Set payment history (empty array if no history)
          } else {
            console.log("No such student document found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        window.location.href = "/"; // Redirect if no user is logged in
      }
    });
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  return (
    <div className="col-md-12 mb-5 px-0">
      <div className="card mb-3">
        <h5 className="p-3 border-bottom">Paid History</h5>
        <div className="card-body">
          {/* Display course fee and payment history */}

          {/* Check if history exists */}
          {history.length > 0 ? (
            history.map((payment, index) => (
              <div key={index} className="row mb-3">
                <div className="col-sm-6">
                  <h6 className="mb-0">
                    <i className="bi bi-cash-coin me-2 fs-5 text-dark"></i>Amount
                  </h6>
                </div>
                <div className="col-sm-6 mt-md-0 my-2" style={{color:"green"}}>
                <i className="bi bi-currency-rupee me-2 fs-5"></i>{payment.payment} {/* Payment Amount */}
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-0">
                    <i className="bi bi-calendar-check me-2 fs-5 text-dark"></i>Full Date and Time
                  </h6>
                </div>
                <div className="col-sm-6 mt-md-0 my-2 text-primary">
                  {payment.timestamp} {/* Timestamp of the payment */}
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p>No payment history available.</p> // If no history is found
          )}
        </div>
      </div>
    </div>
  );
}
