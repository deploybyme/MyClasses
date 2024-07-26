'use client'
import React ,{useState , useEffect} from 'react'
import { db } from '@/app/firebase'
import { doc, collection, getDocs, updateDoc,deleteDoc} from 'firebase/firestore'


export default function Profile(props) {
  const[updateName,setUpdateName]=useState();
  const[UpdateFatherName,setUpdateFatherName]=useState();
  const[UpdatePhone,setUpdatePhone]=useState();
  const[UpdateCourse,setUpdateCourse]=useState();
  const[UpdateAdmissionDate,setUpdateAdmissionDate]=useState();

  const[fetchData,setfetchData]=useState([]);
  const[id,setId]=useState();

    // Create Database reference --------------------------------------------------------------------
    const dbref = collection(db,"StudentRegister")
    const fetchFirebaseDatabase = async () => {
      try {
        const snapshot = await getDocs(dbref);
        const fetchdata = snapshot.docs.map((doc) => ({
          id: doc.id, ...doc.data()
        }));
        
        setfetchData(fetchdata);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };


    useEffect(() => {
      fetchFirebaseDatabase();
    }, []);    

//Pass Value to form -------------------------------------------------------------------------------------
const passData = async (id) => {
  const matchId = fetchData.find((data)=>{
    return data.id === id
  })
  console.log(matchId)
  setUpdateName(matchId.name)
  setUpdatePhone(matchId.phone)
  setUpdateFatherName(matchId.fatherName)
  setUpdateTotalPaid(matchId.totalPaid)
  setUpdateCourse(matchId.course)
  setUpdateCourseFee(matchId.courseFee)
  setUpdateAdmissionDate(matchId.admissionDate)
  setId(matchId.id) 
}


// Update -----------------------------------------------------------------------------------------------
const update = async ()=>{

  const updateRef = doc(dbref,props.Id)
  try {
      await updateDoc(updateRef ,{
      name:updateName,
      phone:UpdatePhone,
      fatherName:UpdateFatherName,
      course:UpdateCourse,
      admissionDate:UpdateAdmissionDate,
    })
    alert("updateData Successfully");

    window.location.reload()
  } catch (error) {
    alert("Error Occurs");
  }
}



  return (
    <>
    
    <div className='d-flex justify-content-center'>
      <div className="rounded-circle bg-light avatar fs-1 fw-bold d-flex align-items-center justify-content-center"
      style={{height:100+"px",width:100+"px"}}
      >{((props.Name).charAt(0).toUpperCase())}</div>
      </div>
      <div className="text-center justify-self-center bg-light rounded mt-2">
          <b className='fs-3'>{props.Name}</b>
      </div>
    <div className='d-flex justify-content-center'>
        <div className='w-100'>
          <div className="row my-3">
              <div className="col-12">
                  <div className="list-group">
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Email</b></div>
                        <div className="col-12 col-sm-6">{props.Email}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Phone</b></div>

                        <div className="col-12 col-sm-6">{props.Phone}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Father's Name</b></div>
                        <div className="col-12 col-sm-6">{props.fatherName}</div>
                      </div>
                    </button>

                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Course </b></div>

                        <div className="col-12 col-sm-6">{props.Course}</div>
                      </div>
                    </button>  

                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Admission Date </b></div>

                        <div className="col-12 col-sm-6">{props.AdmissionDate}</div>
                      </div>
                    </button>

                    {/* <div  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 text-end">
                        <button type="button" className='btn btn-primary' 
                                      data-bs-toggle="modal" data-bs-target="#updateDataModal"
                                      // onClick={() => {passData(props.Id)}}
                          >Edit Details
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>  
                
              </div>  

          </div>   
        </div>      



    </div>


  {/* -------------------Update Modal--------------------
                                        <div className="modal fade" id="updateDataModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="updateDataModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-lg">
                              <div className="modal-content">
                              <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="updateDataModalLabel">Update Your Details</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">


      
                                  <form>

                                    <div className="row">

                                      <div className="col-12 col-md-6">
                                        <label htmlFor="Name" className="form-label">Student Name</label>
                                        <input type="text" className="form-control shadow-none"
                                        placeholder="Enter Student Name" id="Name" required  
                                        value={updateName || ""}
                                        onChange={(e)=>setUpdateName(e.target.value)}
                                        />
                                      </div>

                                      <div className="col-12 col-md-6">
                                        <label htmlFor="Phone" className="form-label">Student Phone</label>
                                        <input type="text" className="form-control shadow-none" 
                                        placeholder="Enter Student Phone" id="Phone" maxLength={10} required
                                        value={UpdatePhone || ""}
                                        onChange={(e)=>setUpdatePhone(e.target.value)}
                                        />
                                      </div>

                                    </div>

                                    <div className="row mt-lg-3 mt-2">

                                      <div className="col-12 col-md-6">
                                        <label htmlFor="Father_Name" className="form-label">Father' Name</label>
                                        <input type="text" className="form-control shadow-none" 
                                        placeholder="Enter Father's Name" id="Father_Name" required 
                                        value={UpdateFatherName || ""} 
                                        onChange={(e)=>setUpdateFatherName(e.target.value)}
                                        />
                                      </div>

                                    </div>

                                    <div className="row mt-lg-3 mt-2">


                                        <div className="col-12 col-md-6">
                                          <label htmlFor="Course" className="form-label">Course</label>
                                          <select className="form-select shadow-none" id="Course"  required
                                          value={UpdateCourse || ""}
                                          onChange={(e)=>setUpdateCourse(e.target.value)}
                                          >
                                            <option className='py-1' value="None" >Select Course</option>
                                            <option className='py-1' value="FrontEnd Development">FrontEnd Development</option>
                                            <option className='py-1' value="C and C++ Programing">C / C++ Programing</option>
                                            <option className='py-1' value="JavaScript">JavaScript</option>
                                          </select>
                                        </div>

                                        <div className="col-12 col-md-6">
                                          <label htmlFor="Admission_date" className="form-label">Date of Admission</label>
                                          <input type="date" className="form-control shadow-none" 
                                          id="Admission_date" required
                                          value={UpdateAdmissionDate || ""}
                                          onChange={(e)=>setUpdateAdmissionDate(e.target.value)}
                                          />
                                        </div>
                                        

                                    </div>
                                
                                  </form>   
    
  

                              </div>
                              <div className="modal-footer">
                              <button className='btn btn-primary mx-2' 
                              // onClick={update}
                              >Update</button>
                              </div>
                              </div>
                          </div>
                </div>
  --------------------------------------------------- */} 
    </>
  )
}
