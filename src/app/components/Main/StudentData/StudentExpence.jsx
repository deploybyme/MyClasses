'use client'
import React, { useState, useEffect } from 'react';
import { db } from '@/app/firebase';
import { doc, collection, getDocs, updateDoc } from 'firebase/firestore';

export default function StudentExpence(props) {
  const [Pay, setPay] = useState("");  // This will store the current payment being entered
  const [updateName, setUpdateName] = useState("");
  const [UpdateCourse, setUpdateCourse] = useState("");
  const [TotalPaid, setTotalPaid] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [fetchData, setfetchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [id, setId] = useState();

  const dbref = collection(db, "StudentRegister");

  const fetchFirebaseDatabase = async () => {
    try {
      const snapshot = await getDocs(dbref);
      const fetchdata = snapshot.docs.map((doc) => ({
        id: doc.id, ...doc.data()
      }));

      // Filter data safely by checking if 'name' exists
      const filteredData = fetchdata.filter((data) =>
        data.name && data.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setfetchData(filteredData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchFirebaseDatabase();
  }, [searchTerm]);

  const passData = async (id) => {
    const matchId = fetchData.find((data) => data.id === id);
    if (matchId) {
      setUpdateName(matchId.name);
      setUpdateCourse(matchId.course);
      setTotalPaid(Number(matchId.totalPaid) || 0);
      setBalance(Number(matchId.balance) || 0);
      setId(matchId.id);
    }
  }

  const refresh = () => {
    window.location.reload();
  }

  const update = async () => {
    const updateRef = doc(dbref, id);
    try {
      const totalPaidNumber = Number(TotalPaid) || 0;
      const payNumber = Number(Pay) || 0;
      const balanceNumber = Number(Balance) || 0;

      // Create the new payment object
      const newPayment = {
        payment: payNumber,
        timestamp: "Paid on " + new Date().toDateString() + " | " + new Date().toLocaleTimeString()  // Current timestamp
      };

      // Get the current payments array or initialize it if it doesn't exist
      const currentPayments = Array.isArray(fetchData.find((data) => data.id === id)?.payments)
        ? fetchData.find((data) => data.id === id).payments
        : [];

      // Add the new payment to the payments array
      const updatedPayments = [...currentPayments, newPayment];

      // Update the total paid amount
      let add = totalPaidNumber + payNumber;

      // Update the document in Firestore
      await updateDoc(updateRef, {
        totalPaid: add,
        TimeStamp: new Date().toDateString() + " | " + new Date().toLocaleTimeString(),  // Current timestamp
        balance: balanceNumber - payNumber,
        payments: updatedPayments,  // Save the updated array of payment objects
      });

      alert("Update Data Successfully");
      await refresh();
    } catch (error) {
      console.error("Error updating data: ", error);
      alert("Error Occurred");
    }
  }

  return (
    <>
      <div className='container my-3 py-3 border-dark '>
        <div className="row">
          <div className="col-md-5 col-12">
            <input
              id='search'
              className="form-control shadow-none ps-3 border-dark rounded-pill"
              type="search"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <>
        {
          fetchData.map((data, index) => (
            <div key={data.id} className="accordion shadow-0 mt-1 overflow-hidden" style={{ display: (data.balance === 0) ? props.shownone : props.showblock }}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${data.id}StudentDetails`} aria-expanded="false" aria-controls="collapseTwo">
                    <div className="row w-100">
                      <div className="col-12 col-md-4 d-flex align-items-center">
                        <span className="rounded-circle text-dark avatar fw-bold d-flex align-items-center justify-content-center me-2" style={{ background: `rgb(${(Math.pow((data.name).charCodeAt(2), 7) % 200) + 100},${(Math.pow((data.name).charCodeAt(1), 7) % 200) + 100},${(Math.pow((data.name).charCodeAt(3), 7) % 200) + 100})` }}>{((data.name).charAt(0).toUpperCase())}</span>
                        <b>{data.name}</b>
                      </div>
                      <div className="col-12 col-md-4 mt-md-0 mt-2">
                        <b className='pt-2'> son/daughter of : </b> {data.fatherName}
                      </div>
                      <div className="col-12 col-md-3 text-start p-2 mt-md-0 mt-2 mx-2 fw-light rounded"
                        style={{
                          background: `${data.balance >= 3000 ? "#ff0000" : data.balance >= 2500 ? "#ffac00" : data.balance >= 2000 ? "#ffff00" : data.balance >= 500 ? "#97ff00" : "#2cff00"}`
                        }}>
                        <b>{data.balance ? "Balance :" + data.balance : (<><small>(The Fee Paid in Full)</small></>)}</b>
                      </div>
                    </div>
                  </div>
                </h2>
                <div id={`${data.id}StudentDetails`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="row mt-1 w-100">
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col-5 col-md-4"><b>Course Fee</b></div>
                          <div className="col-1 col-md-2"><b>:</b></div>
                          <div className="col-4">{data.courseFee}</div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                        <div className="row">
                          <div className="col-5 col-md-4"><b>Paid</b></div>
                          <div className="col-1 col-md-2"><b>:</b></div>
                          <div className="col-4">{data.totalPaid}</div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-1 w-100">
                      <div className="col-12 col-md-6">
                        <b>Date of Admission</b>
                      </div>

                      <div className="col-12 col-md-6 text-start mt-sm-0 mt-1">
                        {data.admissionDate}
                      </div>
                    </div>

                    <div className="row mt-1 w-100">
                      <div className="col-12 col-md-6">
                        <b>Last Payment on </b>
                      </div>

                      <div className="col-12 col-md-6 text-start mt-sm-0 mt-1">
                        {data.TimeStamp ? data.TimeStamp : "Not in record yet!"}
                      </div>
                    </div>

                    {/* Payments History */}
                    <div className="row mt-2 w-100 mx-0">
                      <b className='px-0'>Payments History:</b>
                      <div className="col-12 px-0">
                        {data.payments && data.payments.length > 0 ? (
                          <ul className="list-group mt-2">
                            {data.payments.map((payment, idx) => (
                              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{payment.timestamp}</span>
                                <span className="btn btn-outline-dark px-3 py-2 fw-bold">{payment.payment}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No payments recorded.</p>
                        )}
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col d-flex justify-content-end">
                        <button type="button" className='btn btn-primary mt-2'
                          data-bs-toggle="modal" data-bs-target={`#updateDataModal${index}`}
                          onClick={() => { passData(data.id) }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------Update Modal-------------------- */}
              <div className="modal fade" id={`updateDataModal${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Fee</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <label htmlFor={`name${index}`} className="form-label"><b>Student Name</b></label>
                          <input type="text" className="form-control shadow-none" disabled
                            id={`name${index}`} value={updateName || ""}
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor={`course${index}`} className="form-label"><b>Course</b></label>
                          <input type="text" className="form-control shadow-none" disabled
                            id={`course${index}`} value={UpdateCourse || ""}
                          />
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-12 col-md-6">
                          <label htmlFor={`Paid${index}`} className="form-label"><b>Fee Paying</b></label>
                          <input type="text" className="form-control shadow-none" required
                            id={`Paid${index}`} value={Pay} maxLength={4} placeholder='0000'
                            onChange={(e) => setPay(e.target.value)} />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor={`Time${index}`} className="form-label"><b>TimeStamp</b></label>
                          <input type="text" className="form-control shadow-none" readOnly
                            id={`Time${index}`} value={new Date().toLocaleString()}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className='btn btn-primary mx-2'
                        onClick={update}
                      >Update</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------- */}

            </div>
          ))
        }
      </>
    </>
  );
}
