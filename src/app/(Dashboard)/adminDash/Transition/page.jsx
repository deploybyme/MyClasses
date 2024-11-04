"use client";
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";
import { getDocs, collection } from 'firebase/firestore';

import StaffTransition from '@/app/components/Main/Transitions/StaffTransition';
import History from '@/app/components/Main/Transitions/History';

export default function Transition() {
  const [userDetails, setUserDetails] = useState(null);
  const [newCollect, setNewCollect] = useState(0);
  const [countCollect, setCountCollect] = useState(0);
  const [oldCollect, setOldCollect] = useState(0);
  const [oldBalance, setOldBalance] = useState(0);
  const [newBalance, setNewBalance] = useState(0);
  const [show, setShow] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "AdminMember", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          window.location.href = "/";
        }
      } else {
        window.location.href = "/";
      }
    });
  };

  useEffect(() => {
    fetchUserData();

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "StudentRegister"));
        let newCollect = 0;
        let oldCollect = 0;
        let totalCollect = 0;

        querySnapshot.forEach((doc) => {
          const totalPaid = parseInt(doc.data().totalPaid) || 0; // Fallback to 0 if NaN
          totalCollect += totalPaid;

          if (doc.data().studentType === "New") {
            newCollect += totalPaid;
          }

          if (doc.data().studentType === "Old") {
            oldCollect += totalPaid;
          }
        });

        setCountCollect(totalCollect);
        setNewCollect(newCollect);
        setOldCollect(oldCollect);

        let oldBalance = 0;
        let newBalance = 0;

        querySnapshot.forEach((doc) => {
          const balance = parseInt(doc.data().balance) || 0; // Fallback to 0 if NaN

          if (doc.data().studentType === "New") {
            newBalance += balance;
          }
          if (doc.data().studentType === "Old") {
            oldBalance += balance;
          }
        });

        setOldBalance(oldBalance);
        setNewBalance(newBalance);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {userDetails ? (
        <div className="px-sm-5 pt-3">
          <div className="alert alert-danger mx-1" role="alert">
            <div className="row">
              <div className="col-12 mb-2 mb-md-0 text-center">
                <i className="bi bi-exclamation-triangle-fill"></i> This Transition is only for Faizan Mirza
              </div>
            </div>
          </div>

          <div className="row mx-4">
            <div className="col-12 col-md-12 text-center p-1 box m-1 overflow-hidden">
              <div className="row">
                <div className="col-12 col-md-4">
                  <p className="form-label">
                    <b className='mt-3'>Newly Collection</b>
                  </p>
                  <h1 className='data_number'>
                    <p className='fs-4'><i className="bi bi-currency-rupee"></i> {newCollect}</p>
                  </h1>
                </div>

                <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                  <p className="form-label">
                    <b className='col-12 col-md-4 mt-3'>Total Collection</b>
                  </p>
                  <h1 className='data_number'>
                    <b className='col-12 col-md-4 fs-3'><i className="bi bi-currency-rupee"></i> {countCollect}</b>
                  </h1>
                </div>

                <div className="col-12 col-md-4">
                  <p className="form-label">
                    <b className='mt-3'>Previous Collection</b>
                  </p>
                  <h1 className='data_number'>
                    <p className='fs-4'><i className="bi bi-currency-rupee"></i> {oldCollect}</p>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 text-center p-1 box m-1 overflow-hidden">
              <div className="row">
                <div className="col-12 col-md-4">
                  <p className="form-label">
                    <b className='mt-3'>Newly Balance</b>
                  </p>
                  <h1 className='data_number'>
                    <p className='fs-4'><i className="bi bi-currency-rupee"></i> {newBalance}</p>
                  </h1>
                </div>

                <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                  <p className="form-label">
                    <b className='col-12 col-md-4 mt-3'>60% of Total Collection</b>
                  </p>
                  <h1 className='data_number'>
                    <b className='col-12 col-md-4 fs-3'><i className="bi bi-currency-rupee"></i> {countCollect * 0.6}</b>
                  </h1>
                </div>

                <div className="col-12 col-md-4">
                  <p className="form-label">
                    <b className='mt-3'>Previous Balance</b>
                  </p>
                  <h1 className='data_number'>
                    <p className='fs-4'><i className="bi bi-currency-rupee"></i> {oldBalance}</p>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <ul className="nav nav-pills mb-3 mx-2 border justify-content-center rounded text-light bg-light" id="pills-tab" role="tablist">
            <li className="nav-item me-2" role="presentation">
              <button className="nav-link link-dark border border-dark active"
                id="pills-Transition-tab" data-bs-toggle="pill" data-bs-target="#pills-Transition"
                type="button" role="tab" aria-controls="pills-Transition" aria-selected="false"
                onClick={() => { setShow(!show); }}
              >
                {show ? "Show History" : "Do Transition"}
              </button>
            </li>
          </ul>

          <div className="tab-content overflow-hidden" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-Transition" role="tabpanel" aria-labelledby="pills-Transition-tab">
              {userDetails ? (
                show ? (
                  <>
                    <h5 className='text-center rounded bg-light mx-2 py-2'>Do Transition</h5>
                    <StaffTransition UserMember={userDetails.name} />
                  </>
                ) : (
                  <History />
                )
              ) : (
                <>User Not Found</>
              )}
            </div>
          </div>
        </div>
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
