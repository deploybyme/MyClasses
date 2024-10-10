"use client"
import React ,{useEffect , useState} from 'react'
import { db } from '@/app/firebase'
import { getDocs , collection } from 'firebase/firestore'
import HistoryCard from './HistoryCard'

async function fetchDataFromFirestone(){

    const querySnapshot = await getDocs(collection(db, "transition"))
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, ...doc.data()});
    });
    return data 
  }
  

export default function History() {
    const [stdData , setstdData] = useState([]);
    const[countTransition,setcountTransition] = useState(0); 
    const[countCollect,setcountCollect] = useState(0); 
    useEffect(()=>{
        async function fetchData(){
          const data = await fetchDataFromFirestone();
          setstdData(data)
    // --------------------- Total Expance  ---------------------------
    const transitionQuerySnapshot = await getDocs(collection(db, "transition"))
    let totalTransition = 0;
    transitionQuerySnapshot.forEach((doc) => {
      totalTransition+=parseInt(doc.data().Paid)
    });
    setcountTransition(totalTransition)
    // --------------------- Total Collect  ---------------------------
    const StudentRegisterQuerySnapshot = await getDocs(collection(db, "StudentRegister"))
    let totalCollect = 0;
    StudentRegisterQuerySnapshot.forEach((doc) => {
      totalCollect+=parseInt(doc.data().totalPaid)
    });
    setcountCollect(totalCollect)
        }
        fetchData();

    },[]);

  return (
    <>
      <div className={`alert ${(((countCollect*0.6) - countTransition)>=0)?"alert-warning":"alert-success "} mx-1`} role="alert">
      <div className="row">
            <div className="col-12 col-md-6 mb-2 mb-md-0">Total Transition : <i className="bi bi-currency-rupee"></i>{countTransition}</div>
            <div className="col-12 col-md-6 mt-2 mt-md-0">{(((countCollect*0.6) - countTransition)>=0)?"Balance Pending":"Advance of "} : <i className="bi bi-currency-rupee"></i> {(((countCollect*0.6) - countTransition)>0)?((countCollect*0.6) - countTransition) : (-((countCollect*0.6) - countTransition)) }</div>
      </div>
      </div>

      {  
       stdData.map((record)=>(
              <div key={record.id} className="row mt-1">
                <div className="col">

                 <HistoryCard sr={record.id} 
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
  )
}
