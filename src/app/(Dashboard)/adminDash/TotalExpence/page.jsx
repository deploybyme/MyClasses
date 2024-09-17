"use client"
import React ,{useEffect , useState} from 'react'
import {auth, db} from "@/app/firebase";
import { doc,getDoc, getDocs , collection } from 'firebase/firestore'


import StudentExpence from '@/app/components/Main/StudentData/StudentExpence'


export default function TotalExp(props) {

  const[NewExpence,setNewExpence] = useState(0);
  const[countExpence,setcountExpence] = useState(0);
  const[oldExpence,setoldExpence] = useState(0);
 
  
  const[countBalance,setcountBalance] = useState(0);  
  const[countCollect,setcountCollect] = useState(0); 

  const[showblock,setshowblock] = useState(false); 
  const[shownone,setshownone] = useState(true); 

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
      let newExpence = 0;
      let oldExpence = 0;

      querySnapshot.forEach((doc) => {
        
          totalExpence+=parseInt(doc.data().courseFee)
        
        if(doc.data().studentType == "New"){
          newExpence+=parseInt(doc.data().courseFee)
        }

        if(doc.data().studentType == "Old"){
          oldExpence+=parseInt(doc.data().courseFee)
        }

      });
      setNewExpence(newExpence)
      setcountExpence(totalExpence)
      setoldExpence(oldExpence)

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
      
          <div className="row mx-4">

            <div className="col-12 col-md-12 text-center p-1 box m-1 overflow-hidden">
                <div className="row">

                        <div className="col-12 col-md-4">
                            <p className="form-label">
                                <b className='mt-3'>New Expence</b> 
                            </p>
                            <h1 className='data_number'>
                                <p className=' fs-4'><i className="bi bi-currency-rupee"></i>{NewExpence} </p> 
                            </h1>
                        </div>

                        <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                            <p className="form-label">                           
                                <b className='col-12 col-md-4 mt-3'>Total Expence</b>
                            </p>
                            <h1 className='data_number'>
                                <b className='col-12 col-md-4 fs-3'><i className="bi bi-currency-rupee"></i>{countExpence} </b>
                            </h1>
                        </div>

                        <div className="col-12 col-md-4">
                            <p className="form-label">
                                <b className='mt-3'>Old Expence</b> 
                            </p>
                            <h1 className='data_number'>
                                <p className=' fs-4'><i className="bi bi-currency-rupee"></i>{oldExpence} </p> 
                            </h1>
                        </div>


                </div>
            </div>

            <div className="col-12 col-md-12 text-center p-1 box m-1 overflow-hidden">
                <div className="row">

                        <div className="col-12 col-md-4">
                            <p className="form-label">
                                <b className='mt-3'>Total Collection</b> 
                            </p>
                            <h1 className='data_number'>
                                <p className=' fs-4'><i className="bi bi-currency-rupee"></i> {countCollect} </p> 
                            </h1>
                        </div>

                        <div className="col-12 col-md-4 border border-right-0 border-left-0 bg-light rounded">
                            <p className="form-label">                           
                                <b className='col-12 col-md-4 mt-3'>Total Balance</b>
                            </p>
                            <h1 className='data_number'>
                                <b className='col-12 col-md-4 fs-3'><i className="bi bi-currency-rupee"></i> {countBalance} </b>
                            </h1>
                        </div>

                        <div className="col-12 col-md-4">
                            <p className="form-label">
                                <b className='mt-3'>60% of Collection</b> 
                            </p>
                            <h1 className='data_number'>
                                <p className=' fs-4'><i className="bi bi-currency-rupee"></i> {countCollect*0.6} </p> 
                            </h1>
                        </div>


                </div>
            </div>

          </div>


<ul className="nav nav-pills mb-3 mx-2 border rounded text-light justify-content-center bg-light" id="pills-tab" role="tablist">

  <li className="nav-item">
    <button className="nav-link link-light border"  style={{backgroundColor:'black'}}
    onClick={()=>{
      setshowblock(!showblock)
      setshownone(!shownone)
    }} >{showblock?"Show Balance":"Show Paid"}</button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">

  <div className="tab-pane fade show active" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
      <StudentExpence 
        showblock={showblock?"none":"block"}
        shownone={shownone?"none":"block"}
      />
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
