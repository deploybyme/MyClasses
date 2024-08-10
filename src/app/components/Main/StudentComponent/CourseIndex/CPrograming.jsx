import React from 'react'

export default function CPrograming() {
  return (
    <>
  <section className="py-2 mt-4 mx-1 rounded timebox">
  <h3 className="fw-bold p-2 mx-4 my-3 bg-light border-dark rounded border-bottom">Core C / C++ Index</h3>
    <ul className="timeline ps-1">

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">Introduction</h5>
            <div className="list-group me-1">
                 
                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Introduction to C
                </p>
                <label className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                   C is a powerful general-purpose programming language known for its efficiency
                    and flexibility. It's commonly used in system programming, embedded systems, 
                    and creating high-performance applications.It was created in the 1970s by 
                     <b> Dennis Ritchie </b>  
                    and remains very widely used and influential
                </label>


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Structure of C
                </p>
                <label className="list-group-item border-0 rounded">

                <p className='bg-dark p-3 rounded'>
                <code className='text-light'>
                    #include &lt;stdio.h&gt;
                    <br />
                    int main&#40;&#41;
                    <br />
                    &#123;
                    <br />
                       &nbsp;  printf&#40;" hello world "&#41;;
                    <br />
                      &nbsp;  return 0;
                    <br />
                    &#125;
                  </code >
                </p>

                  <div className="row border-bottom border-top mt-4 m-1">
                    <div className="col-3 ">                       
                      <b>#</b>
                    </div>
                    <div className="col-9">
                          is pre-processor directive
                    </div>
                  </div>

                  <div className="row border-bottom m-1">
                    <div className="col-3">
                      <b>include</b>      
                    </div>
                    <div className="col-9 ">
                      means attachment which attach header files from C library
                    </div>
                  </div>

                  <div className="row border-bottom m-1">
                    <div className="col-3">
                      <b>stdio.h</b> 
                    </div>
                    <div className="col-9 ">
                      is a C Header File
                    </div>
                  </div>

                  <div className="row border-bottom m-1">
                    <div className="col-3">
                    <b>main&#40;&#41;</b> 
                    </div>
                    <div className="col-9 ">
                    is main function in C, is the entry point of a program where the execution of a program starts.
                    </div>
                  </div>

                  <div className="row m-1 border-bottom">
                    <div className="col-3">
                    <b>printf&#40;&#41;</b> 
                    </div>
                    <div className="col-9 ">
                     is a C standard library function that formats text and writes it to standard output.
                    </div>
                  </div>

                  <div className="row m-1">
                    <div className="col-3">
                    <b>return</b> 
                    </div>
                    <div className="col-9 ">
                    ends the execution of a function and returns the control to the function from where it was called.
                    </div>
                  </div>

                </label>


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Keywords is C
                </p>
                <label className="list-group-item border-0 rounded">

                
                    <div className='pt-2'>
                    <b>Keywords</b> are predefined, reserved words used in programming 
                    that have special meanings to the compiler. 
                    Keywords are part of the syntax and they cannot be used as an identifier.
                    <br /><br />
                    Here is a list of all keywords allowed in ANSI C. 
                    </div>

                    <div className="row">
                        <div className="col-3 bh-highlight rounded border keyfont">auto</div>
                        <div className="col-3 bh-highlight rounded border keyfont">double</div>
                        <div className="col-3 bh-highlight rounded border keyfont">int</div>
                        <div className="col-3 bh-highlight rounded border keyfont">struct</div>
                    </div>

                    <div className="row">
                        <div className="col-3 bh-highlight rounded border keyfont">break</div>
                        <div className="col-3 bh-highlight rounded border keyfont">else</div>
                        <div className="col-3 bh-highlight rounded border keyfont">long</div>
                        <div className="col-3 bh-highlight rounded border keyfont">switch</div>
                    </div>

                    <div className="row">
                        <div className="col-3 bh-highlight rounded border keyfont">case</div>
                        <div className="col-3 bh-highlight rounded border keyfont">enum</div>
                        <div className="col-3 bh-highlight rounded border keyfont">register</div>
                        <div className="col-3 bh-highlight rounded border keyfont">typedef</div>
                    </div>

                    <div className="row">
                        <div className="col-3 bh-highlight rounded border keyfont">char</div>
                        <div className="col-3 bh-highlight rounded border keyfont">extern</div>
                        <div className="col-3 bh-highlight rounded border keyfont">return</div>
                        <div className="col-3 bh-highlight rounded border keyfont">union</div>
                    </div>

                    <div className="row">
                      <div className="col-3 bh-highlight rounded border keyfont">continue</div>
                      <div className="col-3 bh-highlight rounded border keyfont">for</div>
                      <div className="col-3 bh-highlight rounded border keyfont">signed</div>
                      <div className="col-3 bh-highlight rounded border keyfont">void</div>
                    </div>
                    <div className="row">
                      <div className="col-3 bh-highlight rounded border keyfont">do</div>
                      <div className="col-3 bh-highlight rounded border keyfont">if</div>
                      <div className="col-3 bh-highlight rounded border keyfont">static</div>
                      <div className="col-3 bh-highlight rounded border keyfont">while</div>
                    </div>
                    <div className="row">
                      <div className="col-3 bh-highlight rounded border keyfont">default</div>
                      <div className="col-3 bh-highlight rounded border keyfont">goto</div>
                      <div className="col-3 bh-highlight rounded border keyfont">sizeof</div>
                      <div className="col-3 bh-highlight rounded border keyfont">volatile</div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-3 bh-highlight rounded border keyfont">const</div>
                      <div className="col-3 bh-highlight rounded border keyfont">float</div>
                      <div className="col-3 bh-highlight rounded border keyfont">short</div>
                      <div className="col-3 bh-highlight rounded border keyfont">unsigned</div>
                    </div>

                </label>


            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C Fundamentals</h5>
        <div className="list-group me-1">


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Variables, Constants and Literals
                </p>
                <label className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                  <p>
                  In programming, a <b>variable</b> is a container &#40;storage area&#41; to hold data.
                  <br />
                  To indicate the storage area, each variable should be given a unique name &#40;<b>Identifier</b>&#41;.
                  </p>
                  <b>syntax of variable declaration and initiation</b>
                  <p className='bg-dark text-light rounded mt-2 p-2'>
                      data_type &nbsp; variable_name &nbsp; = &nbsp; value;
                  </p>
                  <b>Example:</b>
                  <p className='bg-dark rounded mt-2 p-2'>
                    <code className='text-light'>
                       int age = 25;
                       <br />
                       float marks = 85.78;
                       <br />
                       char grade = 'A'
                    </code>
                  </p>
                </label>



                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Data Types
                </label>


                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Input Output (I/O)
                </label>


                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Operators
                </label>


            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C Flow Control</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  if...else Statements
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Switch Statements
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  goto Statement
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  while and do...while Loop
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  for Loop
                </label>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Functions</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Functions
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  User-defined Functions
                </label>
          </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Arrays</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Onedimentional Arrays
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Multidimentional Arrays
                </label>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Pointers</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Pointers
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  References
                </label>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Structures</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Structures
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Member Function in Structures
                </label>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ File Handling</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Opening and Closing a File
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Write to a File
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Read From a File
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Append to a Text File
                </label>
              </div>
      </li>


    </ul>
  </section>


    </>
  )
}
