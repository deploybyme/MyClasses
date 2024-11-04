"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { getDocs, collection } from 'firebase/firestore';
import HistoryCard from './HistoryCard';

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "transition"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export default function History() {
  const [stdData, setStdData] = useState([]);
  const [countTransition, setCountTransition] = useState(0);
  const [countCollect, setCountCollect] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setStdData(data);

      // --------------------- Total Transition ---------------------------
      const transitionQuerySnapshot = await getDocs(collection(db, "transition"));
      let totalTransition = 0;
      transitionQuerySnapshot.forEach((doc) => {
        totalTransition += parseInt(doc.data().Paid) || 0; // Fallback to 0 if NaN
      });
      setCountTransition(totalTransition);

      // --------------------- Total Collect ---------------------------
      const studentRegisterQuerySnapshot = await getDocs(collection(db, "StudentRegister"));
      let totalCollect = 0;
      studentRegisterQuerySnapshot.forEach((doc) => {
        totalCollect += parseInt(doc.data().totalPaid) || 0; // Fallback to 0 if NaN
      });
      setCountCollect(totalCollect);
    }
    fetchData();
  }, []);

  const balance = (countCollect * 0.6) - countTransition;

  return (
    <>
      <div className={`alert ${balance >= 0 ? "alert-warning" : "alert-success"} mx-1`} role="alert">
        <div className="row">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            Total Transition: <i className="bi bi-currency-rupee"></i>{countTransition}
          </div>
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            {balance >= 0 ? "Balance Pending" : "Advance of "} : <i className="bi bi-currency-rupee"></i> 
            {Math.abs(balance)} {/* Display absolute value */}
          </div>
        </div>
      </div>

      {
        stdData.map((record) => (
          <div key={record.id} className="row mt-1">
            <div className="col">
              <HistoryCard 
                sr={record.id} 
                name={record.Name}    
                Paid={record.Paid}    
                Dot={record.date}
                stdname={record.studentName} 
                transitionTo={record.transitionTo}
                transitionType={record.transitionType}
              />
            </div>
          </div>  
        ))
      }
    </>
  );
}
