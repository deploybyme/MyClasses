"use client"
import React ,{useEffect , useState} from 'react'
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "@/app/firebase";
import { getDocs , collection } from 'firebase/firestore'

import StaffTransition from '@/app/components/Main/Transitions/StaffTransition'
import History from '@/app/components/Main/Transitions/History'


export default function Transition() {

  const [userDetails, setUserDetails] = useState(null);

  const[countCollect,setcountCollect] = useState(0); 

  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,"AdminMember",user.uid);
          const docSnap = await getDoc(docRef)
          if(docSnap.exists()){
              setUserDetails(docSnap.data());
          }else{
              window.location.href="/"
          }
      })
  };
  useEffect(()=>{
      fetchUserData()

      async function fetchData(){
        // --------------------- Total Collect  ---------------------------
         const querySnapshot = await getDocs(collection(db,"StudentRegister"))
    
         let totalCollect = 0;
         querySnapshot.forEach((doc) => {
           totalCollect+=parseInt(doc.data().totalPaid)
         });
         setcountCollect(totalCollect)
     
    
        }
        fetchData();
  },[]);

 

  const[Show,setShow] = useState(true); 
  
  return (
<>
     

{ userDetails ? (
    <>

    <div className="px-sm-5 pt-3">

      <div className="alert alert-danger mx-1" role="alert">
         <div className="row">
            <div className="col-12 mb-2 mb-md-0 text-center"><i className="bi bi-exclamation-triangle-fill"></i>This Transition is only for Faizan Mirza</div>
         </div>
      </div>

    <div className="row m-4">


<div className="col-12 col-md-5 text-center p-1 box m-1">
  <p className="form-label">Total Collection</p>
  <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countCollect}</h1>
</div>

<div className="col-12 col-md-5 text-center p-1 box m-1">
  <p className="form-label">60% of Collection</p>
  <h1 className='data_number'><i className="bi bi-currency-rupee"></i>{countCollect*0.6}</h1>
</div>


</div>
  
<ul className="nav nav-pills mb-3 mx-2 border justify-content-center rounded text-light bg-light" id="pills-tab" role="tablist">
  
  <li className="nav-item me-2" role="presentation">
    <button className="nav-link link-dark border border-dark active"
     id="pills-Transition-tab" data-bs-toggle="pill" data-bs-target="#pills-Transition"
     type="button" role="tab" aria-controls="pills-Transition" aria-selected="false"
     onClick={()=>{setShow(!Show)}}
     >{Show? "Show History" : "Do Transition"}</button>
  </li>


  
</ul>
<div className="tab-content overflow-hidden" id="pills-tabContent">
 
  <div className="tab-pane fade show active" id="pills-Transition" role="tabpanel" aria-labelledby="pills-Transition-tab">
  
  
  { userDetails ? 
    (
    Show?(
      <>
      <h5 className='text-center rounded bg-light mx-2 py-2'>Do Transition</h5>
      <StaffTransition UserMember={userDetails.name}/>
      </>
        ):( <History/>)
     ):(
     <>User Not Found</>
     )}
  
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
