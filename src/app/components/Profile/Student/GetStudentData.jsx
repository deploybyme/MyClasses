"use client"
import React ,{useEffect , useState} from 'react'
import { db } from '@/app/firebase'
import { getDocs , collection, getCountFromServer } from 'firebase/firestore'


export default function GetStudentData() {

    const[countExpence,setcountExpence] = useState(0);
    const[countStudent,setcountStudent] = useState(0);
    const[countMember,setcountMember] = useState(0);
  
useEffect(()=>{
      async function fetchData(){
      // --------------------- Total Balance  ---------------------------
        const ExpencequerySnapshot = await getDocs(collection(db, "StudentRegister"))
        let totalExpence = 0;
        ExpencequerySnapshot.forEach((doc) => {
          totalExpence+=parseInt(doc.data().balance)
        });
        setcountExpence(totalExpence)
      // --------------------- Member count  ---------------------------
        const SnapMember = await getCountFromServer(collection(db, "AdminMember"))
        const totalMember = SnapMember.data().count;
        setcountMember(Math.round(totalMember));
      // --------------------- Student count  ---------------------------
        const SnapStudent = await getCountFromServer(collection(db, "StudentRegister"))
        const totalStudent = SnapStudent.data().count;
        setcountStudent(Math.round(totalStudent));
      }
      fetchData();
    },[]);     



  return (
    <div className="px-sm-4 px-md-5 px-3">
      
          <div className="row m-4 ">

          <div className="col-12 col-md-6 text-center p-1 box m-1">
              <p className="form-label">Members</p>
              <h1 className='data_number'>{countMember}</h1>
            </div>

            <div className="col-12 col-md-5 text-center p-1 box m-1">
              <p  className="form-label">Total Student</p>
              <h1 className='data_number'>{countStudent}</h1>
            </div>

            <div className="col-12 col-md-6 text-center p-1 box m-1">
              <p className="form-label">Total Balance</p>
              <h1 className='data_number'>
              <i className="bi bi-currency-rupee"></i>
              {countExpence}
              </h1>
            </div>

            <div className="col-12 col-md-5 text-center p-1 box m-1">
              <p className="form-label">60 % of Total Balance</p>
              <h1 className='data_number'>
              <i className="bi bi-currency-rupee"></i>
              {countExpence*0.6}
              </h1>
            </div>

          </div>

    </div>
  )
}
