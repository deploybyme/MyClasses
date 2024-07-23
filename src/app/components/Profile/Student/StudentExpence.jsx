'use client'
import React ,{useState , useEffect} from 'react'
import { db } from '@/app/firebase'
import { doc, collection, getDocs, updateDoc,deleteDoc} from 'firebase/firestore'


export default function StudentExpence(props) {

  var currentdate = new Date(); 
  var datetime = "Paid on " + currentdate.getDate() + "/"
  + (currentdate.getMonth()+1)  + "/" 
  + currentdate.getFullYear() + " at "  
  + currentdate.getHours() + ":"  
  + currentdate.getMinutes() + ":" 
  + currentdate.getSeconds();
  
  
  const[Pay,setPay]=useState("")
  const[updateName,setUpdateName]=useState();
  const[UpdateCourse,setUpdateCourse]=useState();
  const[TotalPaid,setTotalPaid]=useState();
  const[Balance,setBalance]=useState();

  
  
  const[fetchData,setfetchData]=useState([]);
  const[id,setId]=useState();

    // Create Database reference --------------------------------------------------------------------
    const dbref = collection(db,"StudentRegister")
    // Get Data -------------------------------------------------------------------------------------
      const fetchFirebaseDatabase = async () =>{
        const snapshot = await getDocs(dbref)
        const fetchdata = snapshot.docs.map((doc =>({
          id:doc.id, ...doc.data()
        })))
        setfetchData(fetchdata)
              // console.log(fetchdata)
      }

  useEffect(()=>{
    fetchFirebaseDatabase()
  },[])


//Pass Value to form -------------------------------------------------------------------------------------
const passData = async (id) => {
  const matchId = fetchData.find((data)=>{
    return data.id === id
  })
  // console.log(matchId)
  setUpdateName(matchId.name)
  setUpdateCourse(matchId.course)
  setTotalPaid(matchId.totalPaid)
  setBalance(matchId.balance)
  setId(matchId.id)
}

// Update -----------------------------------------------------------------------------------------------
const update = async ()=>{
  
  const updateRef = doc(dbref,id)
  try {
    let add = Number(TotalPaid)+Number(Pay)
      await updateDoc(updateRef ,{
      totalPaid:add,
      TimeStamp:datetime,
      balance:Balance-Pay
    })
    alert("updateData Successfully");

    window.location.reload()
  } catch (error) {
    alert("Error Occurs");
  }
}


  return (
    <>
           <div className='container'>
           {
            fetchData.map( (data,index) => 
            {
            return(
            
              <div key={data.id} className="accordion shadow-0 mt-1 overflow-hidden">
                <div className="accordion-item ">
                  <h2 className="accordion-header rounded-0">
                    <div className="accordion-button rounded-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${data.id}StudentDetails`} aria-expanded="false" aria-controls="collapseTwo">
                      
                    <div className="row w-100 my-2">
                        <div className="col-12 col-md-6">
                          <b>{data.name}</b> <small>so/do {data.fatherName}</small>
                        </div>

                        <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-2">
                          <b>Balance : {data.balance}</b>
                        </div>
                    </div>
                      
                    </div>
                  </h2>
                  <div id={`${data.id}StudentDetails`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                    <div className="row mt-1 w-100">
                        <div className="col-12 col-md-6">
                          <div className="row">
                            <div className="col-4"><b>Course Fee</b></div>
                            <div className="col-2"><b>:</b></div>
                            <div className="col-4">{data.courseFee}</div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                        <div className="row">
                            <div className="col-4"><b>Paid</b></div>
                            <div className="col-2"><b>:</b></div>
                            <div className="col-4">{data.totalPaid}</div>
                          </div>
                        </div>
                    </div>

                    <div className="row mt-1 w-100">
                        <div className="col-12 col-md-6">
                          <b>Date of Admission</b>
                        </div>

                        <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                          {data.admissionDate}
                        </div>
                    </div>

                    <div className="row mt-1 w-100">
                        <div className="col-12 col-md-6">
                          <b>Last Payment on </b>
                        </div>

                        <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                          {data.TimeStamp}
                        </div>
                    </div>

 

                            <div className="row mt-2">
                            <div className="col d-flex justify-content-end">
                              
                                    <button type="button" className='btn btn-primary mt-2' 
                                    data-bs-toggle="modal" data-bs-target="#updateDataModal"
                                     onClick={() => {passData(data.id)}}
                                    >
                                    Update</button>
                            </div>

                    </div>
                    </div>
                  </div>
                </div>
             
              {/* -------------------Update Modal-------------------- */}
              <div className="modal fade" id="updateDataModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                            <input type="text" className="form-control shadow-none"  disabled
                                            id={`name${index}`} value={updateName || ""} 
                                            onChange={()=>setUpdateName(updateName)}/>
                                    </div>
                                    <div className="col-12 col-md-6"> 
                                            <label htmlFor={`course${index}`} className="form-label"><b>Course</b></label>
                                            <input type="text" className="form-control shadow-none"  disabled
                                            id={`course${index}`} value={UpdateCourse || ""} 
                                            onChange={()=>setUpdateCourse(UpdateCourse)}/>
                                    </div>

                                </div>

                                <div className="row mt-2">
                                    <div className="col-12 col-md-6"> 
                                            <label htmlFor={`Paid${index}`} className="form-label"><b>Fee Paying</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`Paid${index}`} value={Pay} maxLength={4} placeholder='0000'
                                            onChange={(e)=>setPay(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6"> 
                                            <label htmlFor={`Time${index}`} className="form-label"><b>TimeStamp</b></label>
                                            <input type="text" className="form-control shadow-none"  readOnly
                                            id={`Time${index}`} value={datetime || ""}
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
                   
            )
            })
          }



  
</div>

    </>
  )
}




