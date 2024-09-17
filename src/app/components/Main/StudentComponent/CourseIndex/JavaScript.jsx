import React from 'react'

export default function JavaScript() {
  return (

    <>  
  <section className="py-2 mt-4 mx-1 rounded timebox">
  <h3 className="fw-bold p-2 mx-4 my-3 bg-light border-dark rounded border-bottom">Core JavaScript Index</h3>
    <ul className="timeline ps-1">

      <li className="timeline-item mb-5">
          <h5 className="fw-bold ps-3">Introduction</h5>
              <div className="list-group me-1">
                  
                  <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                    Introduction to Javascript
                  </p>
                  <div className="list-group-item border-0 rounded py-4" style={{textAlign:"justify"}}>
                  <p>
                    <b>JavaScript</b> is a versatile, high-level programming language that is widely 
                    supported across all major operating systems.
                  </p>
                  <p>
                      <b> JavaScript (ECMAScript) </b> was invented by <b>Brendan Eich</b> in <b>1995</b>.
                  </p>

                  <p>
                  It was developed for Netscape 2, and became the ECMA-262 standard in 1997.
                  After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop
                  JavaScript for the Firefox browser. Mozilla's latest version was 1.8.5. (Identical to ES5).
                  Internet Explorer (IE4) was the first browser to support ECMA-262 Edition 1 (ES1).
                  </p>

                  </div>

                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  JS Variables & Constants
                </p>
                <div className="list-group-item border-0 rounded py-4" style={{textAlign:"justify"}}>
                  <p>
                  In programming, a <b>variable</b> is a container &#40;storage area&#41; to hold data.
                  <br />
                  To indicate the storage area, each variable should be given a unique name &#40;<b>Identifier</b>&#41;.
                  </p>
                  
                  <b>there are three methods to declare variables :</b>
                  <ul>
                    <li><b>var</b></li>
                    <li><b>let</b></li>
                    <li><b>const</b></li>
                  </ul>
                  <b>syntax : </b>
                  <p className='rounded mt-2 p-2' style={{background: "lightgrey",fontSize:12+"px"}}>
                    <b>
                  <span style={{color:"magenta"}}>method</span> &nbsp; variable_name &nbsp; = &nbsp; <span style={{color:"orange"}}>value</span>
                    </b>
                  </p>
                  <b>Example:</b>
                  <p className='bg-dark rounded mt-2 p-2' style={{textAlign:"left"}}>
                    <code className='text-light' >
                    <span style={{color:'#ffffaf'}}>// declare variable and assign value to it</span>
                      <br />
                      <span style={{color:"magenta"}}>var</span> age = <span style={{color:"orange"}}>25</span>
                       <br />
                       <span style={{color:"magenta"}}>let</span> marks = <span style={{color:"orange"}}>87.79</span>
                       <br />
                       <span style={{color:"magenta"}}>const</span> course = <span style={{color:"lightgreen"}}>'Javascript'</span>
                       <br /><br />
                       <span style={{color:'#ffffaf'}}>// getting output to console</span>
                       <br />
                       <span className='text-warning'>console</span>.log(
                        <span style={{color:"lightgreen"}}>'Age is'</span> , age)
                       
                       <br />
                       <span className='text-warning'>console</span>.log(
                       <span style={{color:"lightgreen"}}>'Marks is'</span> , marks)
                       
                       <br />
                       <span style={{color:"magenta"}}>console</span>.<span className='text-warning'>log</span>
                       <span style={{color:"lightgreen"}}>'Course is'</span> , course)
                    </code>
                  </p>

                  <h6>Output :</h6>
                      <p className='bg-dark p-3 rounded'>
                      <code className='text-light'>

                            Age is 25
                            <br />    
                            Marks is 87.79
                            <br />    
                            Course is Javascript

                        </code >
                      </p>


                </div>

                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                    JavaScript console.log()
                </p>
                <div className="list-group-item border-0 rounded py-4" style={{textAlign:"justify"}}>
                  <p>
                  In JavaScript, the console.log() method displays messages or variables in the browser's console.
                  </p>
                  
                  <b>Here's a quick example of console.log().</b>
                  <p className='bg-dark rounded mt-2 p-2' style={{textAlign:"left"}}>
                    <code className='text-light' >
                       <span style={{color:"magenta"}}>let</span> msg = <span style={{color:"lightgreen"}}>'Hello, JavaScript!'</span>
                       <br />
                       <span className='text-warning'>console</span>.log(msg)
                       <br />
                       <br />
                       <span style={{color:'#ffffaf'}}>// output : Hello, JavaScript!</span>
                       <br />
                    </code>
                  </p>

                </div>

                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  JavaScript Data Types
                </p>
                <div className="list-group-item border-0 rounded py-4" style={{textAlign:"left"}}>
                  <p>Data types represent the different kinds of values we can use in JavaScript.</p>
                  <p>JavaScript data types are divided into primitive and non-primitive types.</p>
                  <ul>
                    <li><b>Primitive Data Types : </b>
                    <p style={{lineHeight:2}}>
                    They can hold a single simple value. 
                    <br />
                    <span className='p-1 bh-highlight border rounded'>String</span> <br />
                    <span className='p-1 bh-highlight border rounded'>Number</span> <br />
                    <span className='p-1 bh-highlight border rounded'>BigInt</span> <br />
                    <span className='p-1 bh-highlight border rounded'>Boolean</span> <br />
                    <span className='p-1 bh-highlight border rounded'>undefined</span> <br />
                    <span className='p-1 bh-highlight border rounded'>null</span>
                    and <span className='p-1 bh-highlight border rounded'> Symbol</span> <br />
                     are primitive data types.
                    </p>
                    </li>
                    <li><b>Non-Primitive Data Types : </b>
                    They can hold multiple values.
                    <br />
                    <span className='p-1 bh-highlight border rounded'>Objects</span> <br />
                      are non-primitive data types.
                    </li>
                  </ul>

                </div>

              </div>
      </li>


      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3"> JS Introduction</h5>
            <div className="list-group me-1">
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   JavaScript Operators
                 </label>
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   JavaScript Comments
                 </label>
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   JavaScript Type Conversion
                 </label>
                 

               </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">JS Control Flow</h5>
        <div className="list-group me-1">
        <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript if...else Statement
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript switch...case Statement
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript while and do...while Loop
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript for loop
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript break Statement
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript continue Statement
                </label>
            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">JS Functions</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Function and Function Expressions
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Variable Scope
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Hoisting
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Recursion
                </label>
          </div>
      </li>


      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">JS Document Object Model</h5>

        <div className="list-group me-1">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  Selecting elements
                </p>
                   <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                     getElementById()
                   </label>
                   <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                     getElementsByName() 
                   </label>
                   <label className="list-group-item border-0">
                     <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    getElementsByTagName() 
                   </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    getElementsByClassName()
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                     querySelector() 
                   </label>
                   <label className="list-group-item border-0">
                     <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                     querySelectoAllr() 
                  </label>


                <p className="text-muted mb-2 mt-3 fw-bold">
                   Manipulating elements
                </p>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                       innerHTML
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      innerText
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      createElement()
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      innerHTML vs createElement 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      append() 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      appendChild()
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      after()
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      DocumentFragment 
                      
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      prepend() 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      insertAdjacentHTML() 
                    </label>                
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      replaceChild()  
                    </label>                
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      cloneNode() 
                    </label>                
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      removeChild() 
                    </label>                
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      insertBefore()  
                    </label> 
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      insertAfter() helper function
                    </label> 



                <p className="text-muted mb-2 mt-3 fw-bold">
                   Working with Attributes
                </p>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    HTML Attributes & DOM Object’s Properties
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    setAttribute()
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    getAttribute() 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    removeAttribute()
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    hasAttribute()
                  </label>


                <p className="text-muted mb-2 mt-3 fw-bold">
                    Manipulating Element’s Styles
                </p>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      style property 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      getComputedStyle() 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      className property  
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      classList property 
                    </label>
                    <label className="list-group-item border-0">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      Element’s width & height
                    </label>


                <p className="text-muted mb-2 mt-3 fw-bold">
                    Manipulating Element’s Styles
                </p>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    JavaScript events
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Handling events 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Page Load Events  
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    load event
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    DOMContentLoaded 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    beforeunload event 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    unload event 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Mouse events
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Keyboard events 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Scroll events
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    scrollIntoView  
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Focus Events  
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    haschange event 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Event Delegation 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    dispatchEvent 
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    Custom Events  
                  </label>
                  <label className="list-group-item border-0">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    MutationObserver  
                  </label>



                <p className="text-muted mb-2 mt-3 fw-bold">
                  Scripting Web Forms
                </p>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Form 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Radio Button 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Checkbox   
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Select box 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Add / Remove Options 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Removing Items from 'select' element conditionally
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Handling change event  
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Handling input event 
                </label>

              </div>
      </li>


      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">JS Types</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Objects
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Array
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Multidimensional Array
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript for...in loop
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Arrow Function
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Map
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript CallBack Function
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Javscript async/await
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  JavaScript Promise and Promise Chaining
                </label>
              </div>
      </li>

    </ul>
  </section>

    </>
  )
}
