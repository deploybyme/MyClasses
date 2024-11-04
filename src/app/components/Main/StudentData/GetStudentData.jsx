"use client";
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase';
import { getDocs, collection, getCountFromServer } from 'firebase/firestore';

export default function GetStudentData(props) {
    const [countOldExpence, setCountOldExpence] = useState(0);
    const [countExpence, setCountExpence] = useState(0);
    const [countStudent, setCountStudent] = useState(0);
    const [countMember, setCountMember] = useState(0);
    const [countOldCollect, setCountOldCollect] = useState(0);
    const [countCollect, setCountCollect] = useState(0);

    useEffect(() => {
        async function fetchData() {
            // Fetch all student records
            const querySnapshot = await getDocs(collection(db, "StudentRegister"));
            let totalExpence = 0;
            let totalOldExpence = 0;
            let totalCollect = 0;
            let totalOldCollect = 0;
            let totalMember = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const balance = parseFloat(data.balance) || 0; // Safely parse balance
                const totalPaid = parseFloat(data.totalPaid) || 0; // Safely parse totalPaid

                // Calculate expenses and counts based on student type
                if (data.studentType === "New") {
                    totalExpence += balance;
                    totalCollect += totalPaid;
                    totalMember++;
                } else {
                    totalOldExpence += balance;
                    totalOldCollect += totalPaid;
                }
            });

            // Set states with calculated values
            setCountExpence(totalExpence);
            setCountOldExpence(totalOldExpence);
            setCountCollect(totalCollect);
            setCountOldCollect(totalOldCollect);
            setCountMember(totalMember);

            // Get total student count
            const SnapStudent = await getCountFromServer(collection(db, "StudentRegister"));
            setCountStudent(Math.round(SnapStudent.data().count));
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="row mx-md-4 mx-2">
                <div className="col-12 col-md-12 text-center box overflow-hidden">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="form-label">{props.studentType} Students</p>
                            <h1 className='data_number'>
                                {props.studentType === "New" ? countMember : countStudent - countMember}
                            </h1>
                        </div>
                        <div className="col-12 col-md-6 bg-light">
                            <p className="form-label">Total Students</p>
                            <h1 className='data_number'>{countStudent}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 text-center box overflow-hidden">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p className="form-label">{props.studentType} Student Balance</p>
                            <h1 className='data_number'>
                                <i className="bi bi-currency-rupee"></i>
                                {props.studentType === "New" ? countExpence : countOldExpence}
                            </h1>
                        </div>
                        <div className="col-12 col-md-6 bg-light">
                            <p className="form-label">Total {props.studentType} Collection</p>
                            <h1 className='data_number'>
                                <i className="bi bi-currency-rupee"></i>
                                {props.studentType === "New" ? countCollect : countOldCollect}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
