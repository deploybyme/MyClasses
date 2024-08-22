"use client"
import React ,{useEffect , useState} from 'react'
import {auth, db} from "@/app/firebase";
import { doc,getDoc, getDocs , collection } from 'firebase/firestore'


import StudentExpence from '@/app/components/Main/StudentData/StudentExpence'


export default function TotalExp(props) {

  const[countExpence,setcountExpence] = useState(0);
  const[countBalance,setcountBalance] = useState(0);  
  const[countCollect,setcountCollect] = useState(0); 

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,"AdminMember",user.uid);
          const docSnap = await getDoc(docRef)
          if(docSnap.exists()){
              setUserDetails(docSnap.data());
              
          }else{
              alert("User is Not Found");
              console.log("User is Not Found");
          }
      })
  };
  useEffect(()=>{
      fetchUserData()
  },[]);

  useEffect(()=>{
    async function fetchData(){

    // --------------------- Total Expance  ---------------------------
     const querySnapshot = await getDocs(collection(db, "StudentRegister"))
      let totalExpence = 0;
      querySnapshot.forEach((doc) => {
        totalExpence+=parseInt(doc.data().courseFee)
      });
      setcountExpence(totalExpence)
    // --------------------- Total Collect  ---------------------------
    let totalCollect = 0;
    querySnapshot.forEach((doc) => {
      totalCollect+=parseInt(doc.data().totalPaid)
    });
    setcountCollect(totalCollect)

    // --------------------- Total Balance  ---------------------------
    let totalBalance = 0;
    querySnapshot.forEach((doc) => {
      totalBalance+=parseInt(doc.data().balance)
    });
    setcountBalance(totalBalance)

    }
    fetchData();
  },[]);
  
  return (
<>
     

{ userDetails ? (
    <>
    <div className="px-sm-5 pt-3">
      
          <div className="row m-4">

            <div className="col-12 col-md-6 text-center p-1 box m-1">
              <p className="form-label">Total Expence</p>
              <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countExpence} </h1>
            </div>

            <div className="col-12 col-md-5 text-center p-1 box m-1">
              <p className="form-label">Total Collection</p>
              <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countCollect}</h1>
            </div>

            <div className="col-12 col-md-6 text-center p-1 box m-1">
              <p className="form-label">Total Balance</p>
              <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countBalance}</h1>
            </div>

            <div className="col-12 col-md-5 text-center p-1 box m-1">
              <p className="form-label">60% of Collection</p>
              <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countCollect*0.6}</h1>
            </div>


          </div>


<ul className="nav nav-pills mb-3 mx-2 border rounded text-light justify-content-left bg-light" id="pills-tab" role="tablist">
  <li className="nav-item me-1" role="presentation">
    <button className="nav-link link-dark border active" id="pills-student-tab" data-bs-toggle="pill" data-bs-target="#pills-student" type="button" role="tab" aria-controls="pills-student" aria-selected="true">Balance</button>
  </li>

  <li className="nav-item ms-1" role="presentation">
    <button className="nav-link link-dark border" id="pills-student-paid-tab" data-bs-toggle="pill" data-bs-target="#pills-student-paid" type="button" role="tab" aria-controls="pills-student-paid" aria-selected="false">Paid</button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">

  <div className="tab-pane fade show active" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
      <StudentExpence Balance="none" Paid="block"/>
  </div>

  <div className="tab-pane fade" id="pills-student-paid" role="tabpanel" aria-labelledby="pills-student-paid-tab">
      <StudentExpence Balance="block" Paid="none"/>
  </div>

</div>


    </div>
    </>
      ) : (
          <div className='d-flex justify-content-center'>
              

              <div className="spinner-border my-5" role="status">
                  <span className="sr-only"></span>
              </div>

          </div>
  )}
</>

  )
}
