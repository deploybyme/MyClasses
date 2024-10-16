"use client"
import React ,{useEffect , useState} from 'react'
import { db } from '@/app/firebase'
import { getDocs , collection, getCountFromServer } from 'firebase/firestore'


export default function GetStudentData(props) {
    const[countOldExpence,setcountOldExpence] = useState(0);
    const[countExpence,setcountExpence] = useState(0);

    const[countStudent,setcountStudent] = useState(0);
    const[countMember,setcountMember] = useState(0);
    const[countOldCollect,setcountOldCollect]=useState(0);
    const[countCollect,setcountCollect]=useState(0);

  
useEffect(()=>{
      async function fetchData(){
      // --------------------- Total Balance  ---------------------------
        const ExpencequerySnapshot = await getDocs(collection(db, "StudentRegister"))
        let totalExpence = 0;
        let totalOldExpence =0;
        ExpencequerySnapshot.forEach((doc) => {
          if(doc.data().studentType="New"){
            totalExpence+=parseInt(doc.data().balance)
          }
          else{
            totalOldExpence+=parseInt(doc.data().balance)
          }
        });
        setcountExpence(totalExpence)
        setcountOldExpence(totalOldExpence)
      // --------------------- New Students  ---------------------------
      let totalMember = 0;
      ExpencequerySnapshot.forEach((doc) => {
        if(doc.data().studentType=="New"){
          totalMember++
        }
      });
      setcountMember(totalMember)
      
    // --------------------- Total Collect  ---------------------------
    let totalCollect = 0;
    let totalOldCollect = 0;
    ExpencequerySnapshot.forEach((doc) => {
      if(doc.data().studentType==="New"){
      totalCollect+=parseInt(doc.data().totalPaid)
      }
      else{
        totalOldCollect+=parseInt(doc.data().totalPaid)
      }
    });
    setcountCollect(totalCollect)
    setcountOldCollect(totalOldCollect)

      // --------------------- Student count  ---------------------------
        const SnapStudent = await getCountFromServer(collection(db, "StudentRegister"))
        const totalStudent = SnapStudent.data().count;
        setcountStudent(Math.round(totalStudent));
      }
      fetchData();
    },[]);     



  return (
    <div className="px-sm-4 px-md-5 px-3">

<div className="row mx-4">

<div className="col-12 col-md-12 text-center box m-1 overflow-hidden">
    <div className="row">

            <div className="col-12 col-md-6">
              <p className="form-label">{props.studentType} Students</p>
              <h1 className='data_number'>{props.studentType=="New"?countMember:countStudent-countMember}</h1>
            </div>

            <div className="col-12 col-md-6 bg-light">
              <p  className="form-label">Total Student</p>
              <h1 className='data_number'>{countStudent}</h1>
            </div>

    </div>
</div>

<div className="col-12 col-md-12 text-center box m-1 overflow-hidden">
    <div className="row">

            <div className="col-12 col-md-6">
              <p className="form-label">{props.studentType} Student Balance</p>
              <h1 className='data_number'>
              <i className="bi bi-currency-rupee"></i>
              {props.studentType=="New"?countExpence:countOldExpence}
              </h1>
            </div>

            <div className="col-12 col-md-6 bg-light">
              <p className="form-label">Total {props.studentType} Collection</p>
              <h1 className='data_number'>
              <i className="bi bi-currency-rupee"></i>
              {props.studentType=="New"?countCollect:countOldCollect}
              </h1>
            </div>

    </div>
</div>


</div>

    </div>
  )
}
