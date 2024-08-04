'use client'
import React ,{useState , useEffect} from 'react'
import { db } from '@/app/firebase'
import { doc, collection, getDocs, updateDoc} from 'firebase/firestore'


export default function ReportAndCertificate(props) {
  
  const[CppMarks,setCppMarks]=useState("")
  const[CMarks,setCMarks]=useState("")

  const[HtmlMarks,setHtmlMarks]=useState("")
  const[CssMarks,setCssMarks]=useState("")
  const[JsMarks,setJsMarks]=useState("")

  const[updateName,setUpdateName]=useState();
  const[UpdateCourse,setUpdateCourse]=useState();

  
  
  const[fetchData,setfetchData]=useState([]);
  const [SearchStudent, setSearchStudent] = useState('');
  const[id,setId]=useState();

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
          data.name.toLowerCase().includes(SearchStudent.toLowerCase())
        );
  
        setfetchData(filteredData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    useEffect(() => {
      fetchFirebaseDatabase();
    }, [SearchStudent]);


//Pass Value to form -------------------------------------------------------------------------------------
const passData = async (id) => {
  const matchId = fetchData.find((data)=>{
    return data.id === id
  })
  // console.log(matchId)
  setUpdateName(matchId.name)
  setUpdateCourse(matchId.course)
  setId(matchId.id)
}

// Update -----------------------------------------------------------------------------------------------
const update = async ()=>{
  
  const updateRef = doc(dbref,id)
if(UpdateCourse === "C and C++ Programing"){
    try {
        await updateDoc(updateRef ,{
        "C Marks": CMarks,
        "Cpp Marks":CppMarks,
      })
      alert("C/C++ Performance Mark Successfully");
  
      window.location.reload()
    } catch (error) {
      alert("Error Occurs");
    }
}
if(UpdateCourse === "FrontEnd Development"){
    try {
        await updateDoc(updateRef ,{
        "HTML Marks": HtmlMarks,
        "CSS Marks":CssMarks,
        "JS Marks": JsMarks
      })
      alert("FrontEnd Performance Mark Successfully");
  
      window.location.reload()
    } catch (error) {
      alert("Error Occurs");
    }
}
if(UpdateCourse === "JavaScript"){
    try {
        await updateDoc(updateRef ,{
        "JS Marks": JsMarks
      })
      alert("Javascript Performance Mark Successfully");
  
      window.location.reload()
    } catch (error) {
      alert("Error Occurs");
    }
}


}


  return (
    <>
        <div className='container my-3 py-3 border-dark '>
          <div className="row">
            <div className="col-md-5 col-12">
              <input 
                className="form-control shadow-none ps-3 border-dark rounded-pill" 
                type="search" 
                placeholder="Search by Name"
                value={SearchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
              />
            </div>
          </div>
        </div>

           <div className='container'>
           {
            fetchData.map( (data,index) => 
            {
            return(
            
              <div key={data.id} className="accordion shadow-0 mt-1 overflow-hidden">
                <div className="accordion-item ">
                  <h2 className="accordion-header">
                    <div className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#${data.id}StudentDetails`} aria-expanded="false" aria-controls="collapseTwo">
                      
                    <div className="row w-100">

                        <div className="col-12 col-md-6 d-flex align-items-center">
                        <span className="rounded-circle text-dark avatar fw-bold d-flex align-items-center justify-content-center me-2" style={{background:`rgb(${(Math.pow((data.name).charCodeAt(2),7)%200)+100},${(Math.pow((data.name).charCodeAt(1),7)%200)+100},${(Math.pow((data.name).charCodeAt(3),7)%200)+100})`}}>{((data.name).charAt(0).toUpperCase())}</span>
                          <b>{data.name}</b>
                        </div>
                        <div className="col-12 col-md-6 mt-md-0 mt-2">
                            <b className='pt-2'> son/daughter of : </b> {data.fatherName}
                        </div>
                    </div>
                      
                    </div>
                  </h2>
                  <div id={`${data.id}StudentDetails`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                    <div className="row mt-1 w-100">

                    {
                            (data.course==="C and C++ Programing")?(
                                <>
                                    <small>C Programing</small>
                                    <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["C Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["C Marks"])}
                                            </div>
                                        </div>

                                    <small>C++ Programing</small>
                                    <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["Cpp Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["Cpp Marks"])}
                                            </div>
                                    </div>
                                </>
                            ):(
                                (data.course==="FrontEnd Development")?(
                                    <>
                                        <small>HTML</small>
                                        <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["HTML Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["HTML Marks"])}
                                            </div>
                                        </div>
    
                                        <small>CSS</small>
                                        <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["CSS Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["CSS Marks"])}
                                            </div>
                                        </div>
                                        <small>Javascript</small>
                                        <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["JS Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["JS Marks"])}
                                            </div>
                                        </div>
                                    </>
                                ):(
                                  (data.course==="JavaScript")?(
                                    <>
                                        <small>Javascript</small>
                                        <div className="progress px-0" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: Number(data["JS Marks"])+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                {Number(data["JS Marks"])}
                                            </div>
                                        </div>
                                    </>
                                ):(
                                    "No Course Found"
                                )
                                )
                            )
                        }

                    </div>


 

                            <div className="row mt-2">
                            <div className="col d-flex justify-content-end">
                              
                                    <button type="button" className='btn btn-primary mt-2' 
                                    data-bs-toggle="modal" data-bs-target={`#updateDataModal${index}`}
                                     onClick={() => {passData(data.id)}}
                                    >
                                    Update</button>
                            </div>

                    </div>
                    </div>
                  </div>
                </div>
             
              {/* -------------------Update Modal-------------------- */}
              <div className="modal fade" id={`updateDataModal${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-lg">
                              <div className="modal-content">
                              <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Performance</h1>
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


{
                            (data.course==="C and C++ Programing")?(
                                <>

                                    <div className="col-12 col-md-6"> 
                                            <label htmlFor={`C${index}`} className="form-label"><b>C Programing</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`C${index}`} value={CMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setCMarks(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-6"> 
                                            <label htmlFor={`Cpp${index}`} className="form-label"><b>C++ Programing</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`Cpp${index}`} value={CppMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setCppMarks(e.target.value)}/>
                                    </div>

                                </>
                            ):(
                                (data.course==="FrontEnd Development")?(
                                    <>
                                    <div className="col-12 col-md-4"> 
                                            <label htmlFor={`HTML${index}`} className="form-label"><b>HTML</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`HTML${index}`} value={HtmlMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setHtmlMarks(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-4"> 
                                            <label htmlFor={`CSS${index}`} className="form-label"><b>CSS</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`CSS${index}`} value={CssMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setCssMarks(e.target.value)}/>
                                    </div>
                                    <div className="col-12 col-md-4"> 
                                            <label htmlFor={`JS${index}`} className="form-label"><b>Javascript</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`JS${index}`} value={JsMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setJsMarks(e.target.value)}/>
                                    </div>

                                    </>
                                ):(
                                  (data.course==="JavaScript")?(
                                    <>
                                        <div className="col-12"> 
                                            <label htmlFor={`JS${index}`} className="form-label"><b>Javascript</b></label>
                                            <input type="text" className="form-control shadow-none"  required
                                            id={`JS${index}`} value={JsMarks} maxLength={3} placeholder='00'
                                            onChange={(e)=>setJsMarks(e.target.value)}/>
                                    </div>
                                    </>
                                ):(
                                    "No Course Found"
                                )
                                )
                            )
                        }

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




