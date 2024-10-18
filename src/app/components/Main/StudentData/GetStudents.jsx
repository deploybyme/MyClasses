'use client'
import React ,{useState , useEffect} from 'react'
import { db } from '@/app/firebase'
import { doc, collection, getDocs, updateDoc,deleteDoc} from 'firebase/firestore'


export default function GetStudents(props) {

  const[fetchData,setfetchData]=useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const [ToggleStudent, setToggleStudent] = useState(true);
 
  const[id,setId]=useState();
  const[updateName,setUpdateName]=useState();
  const[UpdateFatherName,setUpdateFatherName]=useState();
  const[UpdatePhone,setUpdatePhone]=useState();
  const[UpdateTotalPaid,setUpdateTotalPaid]=useState();
  const[UpdateCourse,setUpdateCourse]=useState();
  const[UpdateCourseFee,setUpdateCourseFee]=useState();
  const[UpdateAdmissionDate,setUpdateAdmissionDate]=useState();
  const[studentType,setstudentType]=useState("New");
  
  
  
// Create Database reference --------------------------------------------------------------------
    const dbref = collection(db,"StudentRegister")
    // Get Data -------------------------------------------------------------------------------------
const fetchFirebaseDatabase = async () => {
  try {
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id, ...doc.data()
    }));

    // Filter data based on search term
    const filteredData = fetchdata.filter((data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()
    ))

    setfetchData(filteredData)
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

useEffect(() => {
  fetchFirebaseDatabase();
}, [searchTerm]);

// Delete ----------------------------------------------------------------------------------------------
  const del = async (id)=>{


    const deleteRef = doc(dbref, id);

    let confirm = window.confirm("Do you want to delete Student Record ? ");
    if(confirm){
    try {
      await deleteDoc(deleteRef);
      alert("Delete Record Successfully");
      window.location.reload()  
      
    } catch (error) {
      alert(`Error Occurs ${error}`);
    }
    }

  }

//Pass Value to form -------------------------------------------------------------------------------------
const passData = async (id) => {
  const matchId = fetchData.find((data)=>{
    return data.id === id
  })
  // console.log(matchId)
  setUpdateName(matchId.name)
  setUpdatePhone(matchId.phone)
  setUpdateFatherName(matchId.fatherName)
  setUpdateTotalPaid(matchId.totalPaid)
  setUpdateCourse(matchId.course)
  setUpdateCourseFee(matchId.courseFee)
  setUpdateAdmissionDate(matchId.admissionDate)
  setId(matchId.id) 
  setstudentType(matchId.studentType)
}

// Update -----------------------------------------------------------------------------------------------
const update = async ()=>{

  const updateRef = doc(dbref,id)
  try {
      await updateDoc(updateRef ,{
        name:updateName,
        phone:UpdatePhone,
        fatherName:UpdateFatherName,
        balance:(UpdateCourseFee-UpdateTotalPaid),
        course:UpdateCourse,
        courseFee:UpdateCourseFee,
        admissionDate:UpdateAdmissionDate,
        studentType:studentType
    })
    alert("Data Update Successfully");
  } catch (error) {
    alert("Error Occurs");
  }
  await refresh()
}

async function refresh(){
  window.location.reload()
}


  return (
  
      <>
        <div className='container my-3 py-3 border-dark'>
          <div className="row">
            <div className="col-md-5 col-12">
              <input 
                className="form-control shadow-none ps-3 border-dark rounded-pill" 
                type="search" 
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
            <div className='container' key="accordian">
          {
              fetchData.map( (data,index) => 
              {
              return(
                
                (data.studentType === (props.studentType))?
                <div key={data.id} className="accordion shadow-0 mt-1 overflow-hidden" id={`StudentDetails${index}`}>
                  <div  className="accordion-item">
                    <h2 className="accordion-header">
                      <div className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#Collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                        
                      <div className="row w-100">
                          <div className="col-12 col-md-6  d-flex align-items-center">
                            <span className="rounded-circle text-dark avatar fw-bold d-flex align-items-center justify-content-center me-2" style={{background:`rgb(${(Math.pow((data.name).charCodeAt(2),7)%200)+100},${(Math.pow((data.name).charCodeAt(1),7)%200)+100},${(Math.pow((data.name).charCodeAt(3),7)%200)+100})`}}>{((data.name).charAt(0).toUpperCase())}</span>
                            <b>{data.name}</b>
                          
                          </div>

                          <div className="col-12 col-md-6 text-start text-md-end mt-2">
                            <b>Course : </b>{data.course}
                          </div>
                      </div>
                        
                      </div>
                    </h2>
                    <div id={`Collapse${index}`} className="accordion-collapse collapse" data-bs-parent={`#StudentDetails${index}`}>
                      <div className="accordion-body">

                      <div className="row mt-1 w-100 pb-2 border-bottom">
                          <div className="col-12 col-md-6">
                            <div className="row">
                              <div className="col-4"><b>Paid</b></div>
                              <div className="col-2"><b>:</b></div>
                              <div className="col-4">{data.totalPaid}</div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                          <div className="row">
                              <div className="col-4"><b>Balance</b></div>
                              <div className="col-2"><b>:</b></div>
                              <div className="col-4">{data.balance}</div>
                            </div>
                          </div>
                      </div>

                      <div className="row mt-1 w-100">
                          <div className="col-12 col-md-6">
                            <b>Email</b>
                          </div>

                          <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                            {data.email}
                          </div>
                      </div>

                      <div className="row mt-1 w-100">
                          <div className="col-12 col-md-6">
                            <b>Father's Name</b>
                          </div>

                          <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                            {data.fatherName}
                          </div>
                      </div>

                      <div className="row mt-1 w-100">
                          <div className="col-12 col-md-6">
                            <b>Phone Number</b>
                          </div>

                          <div className="col-12 col-md-6 text-start text-md-end mt-sm-0 mt-1">
                            {data.phone}
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
  

                              <div className="row mt-2">
                              <div className="col d-flex justify-content-end">
                                
                                      <button type="button" className='btn btn-primary mt-2' 
                                      data-bs-toggle="modal" data-bs-target="#updateDataModal"
                                      onClick={() => {passData(data.id)}}
                                      >
                                      Update</button>
                                      <button type="button" className='btn btn-danger mt-2 mx-2'
                                      onClick={() => {del(data.id)}}
                                      >delete</button>
                              </div>

                      </div>
                      </div>
                    </div>
                  </div>



              {/* -------------------Update Modal-------------------- */}
              <div className="modal fade" id="updateDataModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="updateDataModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-lg">
                              <div className="modal-content">
                              <div className="modal-header">
                                  <h1 className="modal-title fs-5" id={`updateDataModalLabel${index}`}>Update Student Details</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">


      
                                  <form>

                                    <div className="row">

                                      <div className="col-12 col-md-6">
                                        <label htmlFor={`Name${index}`} className="form-label">Student Name</label>
                                        <input type="text" className="form-control shadow-none"
                                        placeholder="Enter Student Name" id={`Name${index}`} required  
                                        value={updateName || ""}
                                        onChange={(e)=>setUpdateName(e.target.value)}
                                        />
                                      </div>

                                      <div className="col-12 col-md-6">
                                        <label htmlFor={`Phone${index}`} className="form-label">Student Phone</label>
                                        <input type="text" className="form-control shadow-none" 
                                        placeholder="Enter Student Phone" id={`Phone${index}`} maxLength={10} required
                                        value={UpdatePhone || ""}
                                        onChange={(e)=>setUpdatePhone(e.target.value)}
                                        />
                                      </div>

                                    </div>

                                    <div className="row mt-lg-3 mt-2">

                                      <div className="col-12 col-md-6">
                                        <label htmlFor={`Father_Name${index}`} className="form-label">Father' Name</label>
                                        <input type="text" className="form-control shadow-none" 
                                        placeholder="Enter Father's Name" id={`Father_Name${index}`} required 
                                        value={UpdateFatherName || ""} 
                                        onChange={(e)=>setUpdateFatherName(e.target.value)}
                                        />
                                      </div>

                                      <div className="col-12 col-md-6"> 
                                          <label htmlFor={`Fee${index}`} className="form-label">Course Fee</label>
                                          <input type="text" className="form-control shadow-none bg-dark text-light"  required
                                          id={`Fee${index}`} maxLength={4} placeholder='4000'
                                          value={UpdateCourseFee || ""}
                                          onChange={(e)=>setUpdateCourseFee(e.target.value)}
                                          />
                                      </div>

                                    </div>

                                    <div className="row mt-lg-3 mt-2">


                                        <div className="col-12 col-md-6">
                                          <label htmlFor={`Course${index}`} className="form-label">Course</label>
                                          <select className="form-select shadow-none" id={`Course${index}`}  required
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
                                          <label htmlFor={`Admission_date${index}`} className="form-label">Date of Admission</label>
                                          <input type="date" className="form-control shadow-none" 
                                          id={`Admission_date${index}`} required
                                          value={UpdateAdmissionDate || ""}
                                          onChange={(e)=>setUpdateAdmissionDate(e.target.value)}
                                          />
                                        </div>
                                        

                                    </div>

                                    <div className="row mt-lg-3 mt-2">


                                        <div className="col-12 col-md-6">
                                          <label htmlFor={`StudentType${index}`} className="form-label">Student Type</label>
                                          <select className="form-select shadow-none" id={`StudentType${index}`}  required
                                          value={studentType || ""}
                                          onChange={(e)=>setstudentType(e.target.value)}
                                          >
                                            <option className='py-1' value="none" >Choose</option>
                                            <option className='py-1' value="New" >New</option>
                                            <option className='py-1' value="Old">Old</option>
                                          </select>
                                        </div>

                                        

                                    </div>                                
                                  </form>   
    
  

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
                :  "" 
              )
              })
          }
      </div>
      </>

  )
}
