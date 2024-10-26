import React from 'react'

export default function Profile(props) {
  return (
    <>
<div>
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card" style={{position: "sticky", top: 75+"px"}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    
                  <div className="rounded-circle bg-light avatar fs-1 fw-bold d-flex align-items-center justify-content-center"
                    style={{height:100+"px",width:100+"px",cursor:"pointer"}}>
                        {((props.Name).charAt(0).toUpperCase())}
                    </div>

                    <div className="mt-3">
                      <h4>{props.Name}</h4>
                      <p className="text-secondary mb-1">{props.Course}</p>
                      <p className="text-muted font-size-sm">Acharya Computer Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Name}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Father's Name</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.fatherName}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Phone}
                    </div>
                  </div>
                 
                 
                  {/* <hr/> 
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-primary">Edit</a>
                    </div>
                  </div> */}


                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-12 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Performance Status</h6>
                    
                        {
                            (props.Course==="C and C++ Programing")?(
                                <>
                            <small className='my-2 p-0'>Class Performance</small>
                            <div className="progress px-0 border border-secondary" style={{ height: 20 + "px" }}>
                              <div className="progress-bar bg-secondary" role="progressbar"
                                style={{ width: Number((props.ClassPerformance / 20) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                {Number(props.ClassPerformance) || 0} / 20
                              </div>
                            </div>

                            <small className='my-2 p-0'>Theory Performance</small>
                            <div className="progress px-0 border border-primary" style={{ height: 20 + "px" }}>
                              <div className="progress-bar" role="progressbar"
                                style={{ width: Number((props.TheoryMarks / 80) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                {Number(props.TheoryMarks) || 0} / 80
                              </div>
                            </div>

                            <small className='my-2 p-0'>Overall Performance</small>
                            <div className="progress px-0 border border-warning" style={{ height: 20 + "px" }}>
                              <div className="progress-bar bg-warning text-dark" role="progressbar"
                                style={{ width: Number(((props.ClassPerformance + props.TheoryMarks) / 100) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                {Number(props.ClassPerformance + props.TheoryMarks) || 0} / 100
                              </div>
                            </div>
                                </>
                            ):(
                                (props.Course==="FrontEnd Development")?(
                                    <>
                                <small className='my-2 p-0'>Class Performance</small>
                                <div className="progress px-0 border border-secondary" style={{ height: 20 + "px" }}>
                                  <div className="progress-bar bg-secondary" role="progressbar"
                                    style={{ width: Number((props.ClassPerformance / 20) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    {Number(props.ClassPerformance) || 0} / 20
                                  </div>
                                </div>

                                <small className='my-2 p-0'>Theory Performance</small>
                                <div className="progress px-0 border border-primary" style={{ height: 20 + "px" }}>
                                  <div className="progress-bar" role="progressbar"
                                    style={{ width: Number((props.TheoryMarks / 80) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    {Number(props.TheoryMarks) || 0} / 50
                                  </div>
                                </div>

                                <small className='my-2 p-0'>Project Performance</small>
                                <div className="progress px-0 border border-warning" style={{ height: 20 + "px" }}>
                                  <div className="progress-bar bg-warning text-dark" role="progressbar"
                                    style={{ width: Number(props.ProjectMarks) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    {Number(props.ProjectMarks) || 0} / 30
                                  </div>
                                </div>

                                <small className='my-2 p-0'>Overall Performance</small>
                                <div className="progress px-0 border border-warning" style={{ height: 20 + "px" }}>
                                  <div className="progress-bar bg-warning text-dark" role="progressbar"
                                    style={{ width: Number(((props.ClassPerformance + props.TheoryMarks + props.ProjectMarks) / 100) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    {Number(props.ClassPerformance + props.TheoryMarks + props.ProjectMarks)}
                                  </div>
                                </div>
                                    </>
                                ):(
                                  (props.Course==="JavaScript")?(
                                    <>
                                    <small className='my-2 p-0'>Class Performance</small>
                                    <div className="progress px-0 border border-secondary" style={{ height: 20 + "px" }}>
                                      <div className="progress-bar bg-secondary" role="progressbar"
                                        style={{ width: Number((props.ClassPerformance / 20) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {Number(props.ClassPerformance) || 0} / 20
                                      </div>
                                    </div>

                                    <small className='my-2 p-0'>Theory Performance</small>
                                    <div className="progress px-0 border border-primary" style={{ height: 20 + "px" }}>
                                      <div className="progress-bar" role="progressbar"
                                        style={{ width: Number((props.TheoryMarks / 80) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {Number(props.TheoryMarks) || 0} / 80
                                      </div>
                                    </div>

                                    <small className='my-2 p-0'>Overall Performance</small>
                                    <div className="progress px-0 border border-warning" style={{ height: 20 + "px" }}>
                                      <div className="progress-bar bg-warning text-dark" role="progressbar"
                                        style={{ width: Number(((props.ClassPerformance + props.TheoryMarks) / 100) * 100) + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {Number(props.ClassPerformance + props.TheoryMarks) || 0} / 100
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
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
    </>
  )
}
