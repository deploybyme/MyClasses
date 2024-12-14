"use client";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/app/firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import StudentExpence from "@/app/components/Main/StudentData/StudentExpence";

export default function TotalExp(props) {
  const [NewExpence, setNewExpence] = useState(0);
  const [countExpence, setCountExpence] = useState(0);
  const [oldExpence, setOldExpence] = useState(0);

  const [countBalance, setCountBalance] = useState(0);
  const [OldBalance, setOldBalance] = useState(0);
  const [NewBalance, setNewBalance] = useState(0);

  const [showblock, setShowBlock] = useState(false);
  const [shownone, setShownOne] = useState(true);

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "AdminMember", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        alert("User is Not Found");
        console.log("User is Not Found");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "StudentRegister"));
      let totalExpence = 0;
      let newExpence = 0;
      let oldExpence = 0;

      querySnapshot.forEach((doc) => {
        const courseFee = parseInt(doc.data().courseFee) || 0; // Default to 0
        totalExpence += courseFee;

        if (doc.data().studentType === "New") {
          newExpence += courseFee;
        }

        if (doc.data().studentType === "Old") {
          oldExpence += courseFee;
        }
      });

      setNewExpence(newExpence);
      setCountExpence(totalExpence);
      setOldExpence(oldExpence);

      // --------------------- Total Balance  ---------------------------
      let oldBalance = 0;
      let newBalance = 0;
      let countBalance = 0;

      querySnapshot.forEach((doc) => {
        const balance = parseInt(doc.data().balance) || 0; // Default to 0
        countBalance += balance;

        if (doc.data().studentType === "New") {
          newBalance += balance;
        }
        if (doc.data().studentType === "Old") {
          oldBalance += balance;
        }
      });

      setCountBalance(countBalance);
      setOldBalance(oldBalance);
      setNewBalance(newBalance);
    }
    fetchData();
  }, []);

  return (
    <>
      {userDetails ? (
        <>
          <div className="pt-3">
            <div className="row mx-md-4 mx-2">
              <div className="col-12 col-md-12 text-center box overflow-hidden">
                <div className="row mx-1">
                  <div className="col-12 col-md-4">
                    <p className="form-label">
                      <b className="mt-3">New Expense</b>
                    </p>
                    <h1 className="data_number">
                      <p className="fs-4">
                        <i className="bi bi-currency-rupee"></i>
                        {NewExpence}
                      </p>
                    </h1>
                  </div>

                  <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                    <p className="form-label">
                      <b className="col-12 col-md-4 mt-3">Total Expense</b>
                    </p>
                    <h1 className="data_number">
                      <b className="col-12 col-md-4 fs-3">
                        <i className="bi bi-currency-rupee"></i>
                        {countExpence}
                      </b>
                    </h1>
                  </div>

                  <div className="col-12 col-md-4">
                    <p className="form-label">
                      <b className="mt-3">Old Expense</b>
                    </p>
                    <h1 className="data_number">
                      <p className="fs-4">
                        <i className="bi bi-currency-rupee"></i>
                        {oldExpence}
                      </p>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 text-center box overflow-hidden">
                <div className="row mx-1">
                  <div className="col-12 col-md-4">
                    <p className="form-label">
                      <b className="mt-3">New Balance</b>
                    </p>
                    <h1 className="data_number">
                      <p className="fs-4">
                        <i className="bi bi-currency-rupee"></i>
                        {NewBalance}
                      </p>
                    </h1>
                  </div>

                  <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                    <p className="form-label">
                      <b className="col-12 col-md-4 mt-3">Total Balance</b>
                    </p>
                    <h1 className="data_number">
                      <b className="col-12 col-md-4 fs-3">
                        <i className="bi bi-currency-rupee"></i>
                        {countBalance}
                      </b>
                    </h1>
                  </div>

                  <div className="col-12 col-md-4">
                    <p className="form-label">
                      <b className="mt-3">Previous Balance</b>
                    </p>
                    <h1 className="data_number">
                      <p className="fs-4">
                        <i className="bi bi-currency-rupee"></i>
                        {OldBalance}
                      </p>
                    </h1>
                  </div>
                </div>
              </div>

              <ul className="nav nav-pills my-2 border rounded text-light justify-content-center bg-light" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <button
                    className="nav-link link-light border"
                    style={{ backgroundColor: "black" }}
                    onClick={() => {
                      setShowBlock(!showblock);
                      setShownOne(!shownone);
                    }}
                  >
                    {showblock ? "Show Balance" : "Show Paid"}
                  </button>
                </li>
              </ul>
              <div className="tab-content px-0" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
                  <StudentExpence
                    showblock={showblock ? "none" : "block"}
                    shownone={shownone ? "none" : "block"}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
         <div className='container px-4'>
            <div className="card-text placeholder-glow mt-3">
              <span className="placeholder bg-light col-12 " style={{ height: "80px", borderRadius: "15px" }}></span>
            </div>

            <div className="card-text placeholder-glow mt-1">
              <span className="placeholder bg-light col-12 " style={{ height: "80px", borderRadius: "15px" }}></span>
            </div>

            <div className="card-text placeholder-glow mt-2 mb-0">
              <span className="placeholder bg-light col-12 rounded" style={{ height: "45px" }}></span>
            </div>

            <div className="card-text placeholder-glow mt-5">
              <span className="placeholder bg-light col-4 rounded-pill" style={{ height: "40px" }}></span>
            </div>

            <div className="card-text placeholder-glow mt-5">
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
            <div className="card-text placeholder-glow mt-1">
              <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
            </div>
          </div>
      )}
    </>
  );
}
