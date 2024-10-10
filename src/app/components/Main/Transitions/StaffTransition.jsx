"use client"
import React , {useEffect, useState} from 'react'
import { db } from '@/app/firebase'
import { collection,addDoc } from 'firebase/firestore';

var currentdate = new Date(); 
var datetime = "Paid on " + currentdate.getDate() + "/"
+ (currentdate.getMonth()+1)  + "/" 
+ currentdate.getFullYear() + " at "  
+ currentdate.getHours() + ":"  
+ currentdate.getMinutes() + ":" 
+ currentdate.getSeconds();

async function addTransition(name,Paid,studentName,PayToo,transitionType){    
    try{
      const docRef = addDoc(collection(db,"transition"),{
        Name:name,
        Paid:(Paid),
        date:datetime,
        studentName:studentName,
        transitionTo:PayToo,
        transitionType:transitionType
      });
      return true;
    } catch(error){
      console.error("Error adding Data :",error);
      return false;
    }
    await refresh()

  }
  
async function refresh(){
    window.location.reload()
}

export default function StaffTransition(props) {
    const [name,setName]=useState(props.UserMember);
    const [PayToo,setPayToo]=useState("Faizan Mirza");
    const[Paid,setPaid]=useState("");
    const[date,setdate]=useState(datetime);
    const[transitionType,setTransitionType]=useState("");
    const[studentName,setstudentName]=useState("");
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const addData = await addTransition(name,Paid,studentName,PayToo,transitionType);
        if(addData){
          setName("")
          setPaid("")
          setdate("")
          setstudentName("")
          setPayToo("")
          setTransitionType("")
        }
        alert("Transition Save Successfully")
      }
       
     


    return (
  <>
  <div className="card mb-3 mx-2">
    <div className="card-body">
      <form  onSubmit={handleSubmit}>

      <div className="row">
            {
              (props.UserMember == "Faizan Mirza") ?
              <> 
                <div className="col-12 col-md-6">
                  <label htmlFor="UpdatedBy" className="form-label"><b>Payee Name</b></label>
                  <select className="form-select shadow-none" id="UpdatedBy"  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  >
                    <option className='py-1' value="None" >Select Payee Name</option>
                    <option className='py-1' value="Amit Raghav">Amit Raghav</option>
                    <option className='py-1' value="Ishwar Singh">Ishwar Singh</option>
                  </select>
                </div>
                
              </>:<>
                <div className="col-12 col-md-6">
                  <label htmlFor="Name" className="form-label"><b>Payee Name</b></label>
                  <input type="text" className="form-control shadow-none" readOnly
                  placeholder="Enter Student Name" id="Name" value={name || ""} 
                  onChange={(e)=>setName(e.target.value)}/>
                </div>
              </>
            }

            <div className="col-12 col-md-6">
              <label htmlFor="studentName" className="form-label"><b>Against Student</b></label>
              <input type="text" className="form-control shadow-none"
               placeholder="Enter Student Name" id="studentName" value={studentName || ""} 
               onChange={(e)=>setstudentName(e.target.value)}/>
            </div>
  
      </div>

      <div className="row mt-2">
          
          <div className="col-12 col-md-6"> 
                  <label htmlFor="Paid" className="form-label"><b>Amount</b></label>
                  <input type="text" className="form-control shadow-none"  required
                  id="Paid" value={Paid || ""} maxLength={4} placeholder='0000'
                  onChange={(e)=>setPaid(e.target.value)}/>
          </div>
          
          <div className="col-12 col-md-6">
                <label htmlFor="transitionType" className="form-label"><b>Transition Type</b></label>
                <select className="form-select shadow-none" id="transitionType"  required
                value={transitionType}
                onChange={(e)=>setTransitionType(e.target.value)}
                >
                  <option className='py-1' value="None" >Select Cash / UPI</option>
                  <option className='py-1' value="Cash">Cash</option>
                  <option className='py-1' value="UPI">UPI</option>
                </select>
          </div>

    </div>
    <div className="row mt-2">

          <div className="col-12 col-md-6"> 
                  <label htmlFor="Time" className="form-label"><b>TimeStamp</b></label>
                  <input type="text" className="form-control shadow-none"  readOnly
                  id="Time" value={datetime || ""} maxLength={4} placeholder='0000'
                  />
          </div>
  
    </div>
      <div className="row mt-3">
        <div className="col">
          <button type="submit" className="btn btn-primary" onClick={props.cardUpdate}>
             Update 
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
  
  </>
  )
}
