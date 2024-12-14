import React from 'react'

export default function JavaScript() {
  return (

    <>  
  <section className="py-2 mt-4 mx-1 rounded timebox text-light bg-dark">
  <h3 className="fw-bold p-2 mx-4 my-3">Core JavaScript Index</h3>

          <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary">Introduction</h5>
              <div className="list-group mx-1">
                  
                  <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
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

                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
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

                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
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

                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
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
  



        <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary"> JS Introduction</h5>
            <div className="list-group mx-1">
                 <div className="list-group-item border-0">
                   
                   JavaScript Operators
                 </div>
                 <div className="list-group-item border-0">
                   
                   JavaScript Comments
                 </div>
                 <div className="list-group-item border-0">
                   
                   JavaScript Type Conversion
                 </div>
                 

               </div>



        <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary">JS Control Flow</h5>
        <div className="list-group mx-1">
        <div className="list-group-item border-0">
                  
                  JavaScript if...else Statement
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript switch...case Statement
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript while and do...while Loop
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript for loop
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript break Statement
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript continue Statement
                </div>
            </div>
    


        <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary">JS Functions</h5>
        <div className="list-group mx-1">
                <div className="list-group-item border-0">
                  
                  JavaScript Function and Function Expressions
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Variable Scope
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Hoisting
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Recursion
                </div>
          </div>
    



        <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary">JS Document Object Model</h5>

        <div className="list-group mx-1">
                <p className="fw-bold p-3 mt-1 mb-1 bg-white text-black">
                  Selecting elements
                </p>
                   <div className="list-group-item border-0">
                    
                     getElementById()
                   </div>
                   <div className="list-group-item border-0">
                    
                     getElementsByName() 
                   </div>
                   <div className="list-group-item border-0">
                     
                    getElementsByTagName() 
                   </div>
                  <div className="list-group-item border-0">
                    
                    getElementsByClassName()
                  </div>
                  <div className="list-group-item border-0">
                    
                     querySelector() 
                   </div>
                   <div className="list-group-item border-0">
                     
                     querySelectoAllr() 
                  </div>


                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
                   Manipulating elements
                </p>
                    <div className="list-group-item border-0">
                      
                       innerHTML
                    </div>
                    <div className="list-group-item border-0">
                      
                      innerText
                    </div>
                    <div className="list-group-item border-0">
                      
                      createElement()
                    </div>
                    <div className="list-group-item border-0">
                      
                      innerHTML vs createElement 
                    </div>
                    <div className="list-group-item border-0">
                      
                      append() 
                    </div>
                    <div className="list-group-item border-0">
                      
                      appendChild()
                    </div>
                    <div className="list-group-item border-0">
                      
                      after()
                    </div>
                    <div className="list-group-item border-0">
                      
                      DocumentFragment 
                      
                    </div>
                    <div className="list-group-item border-0">
                      
                      prepend() 
                    </div>
                    <div className="list-group-item border-0">
                      
                      insertAdjacentHTML() 
                    </div>                
                    <div className="list-group-item border-0">
                      
                      replaceChild()  
                    </div>                
                    <div className="list-group-item border-0">
                      
                      cloneNode() 
                    </div>                
                    <div className="list-group-item border-0">
                      
                      removeChild() 
                    </div>                
                    <div className="list-group-item border-0">
                      
                      insertBefore()  
                    </div> 
                    <div className="list-group-item border-0">
                      
                      insertAfter() helper function
                    </div> 



                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
                   Working with Attributes
                </p>
                  <div className="list-group-item border-0">
                    
                    HTML Attributes & DOM Object’s Properties
                  </div>
                  <div className="list-group-item border-0">
                    
                    setAttribute()
                  </div>
                  <div className="list-group-item border-0">
                    
                    getAttribute() 
                  </div>
                  <div className="list-group-item border-0">
                    
                    removeAttribute()
                  </div>
                  <div className="list-group-item border-0">
                    
                    hasAttribute()
                  </div>


                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
                    Manipulating Element’s Styles
                </p>
                    <div className="list-group-item border-0">
                      
                      style property 
                    </div>
                    <div className="list-group-item border-0">
                      
                      getComputedStyle() 
                    </div>
                    <div className="list-group-item border-0">
                      
                      className property  
                    </div>
                    <div className="list-group-item border-0">
                      
                      classList property 
                    </div>
                    <div className="list-group-item border-0">
                      
                      Element’s width & height
                    </div>


                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
                    Manipulating Element’s Styles
                </p>
                  <div className="list-group-item border-0">
                    
                    JavaScript events
                  </div>
                  <div className="list-group-item border-0">
                    
                    Handling events 
                  </div>
                  <div className="list-group-item border-0">
                    
                    Page Load Events  
                  </div>
                  <div className="list-group-item border-0">
                    
                    load event
                  </div>
                  <div className="list-group-item border-0">
                    
                    DOMContentLoaded 
                  </div>
                  <div className="list-group-item border-0">
                    
                    beforeunload event 
                  </div>
                  <div className="list-group-item border-0">
                    
                    unload event 
                  </div>
                  <div className="list-group-item border-0">
                    
                    Mouse events
                  </div>
                  <div className="list-group-item border-0">
                    
                    Keyboard events 
                  </div>
                  <div className="list-group-item border-0">
                    
                    Scroll events
                  </div>
                  <div className="list-group-item border-0">
                    
                    scrollIntoView  
                  </div>
                  <div className="list-group-item border-0">
                    
                    Focus Events  
                  </div>
                  <div className="list-group-item border-0">
                    
                    haschange event 
                  </div>
                  <div className="list-group-item border-0">
                    
                    Event Delegation 
                  </div>
                  <div className="list-group-item border-0">
                    
                    dispatchEvent 
                  </div>
                  <div className="list-group-item border-0">
                    
                    Custom Events  
                  </div>
                  <div className="list-group-item border-0">
                    
                    MutationObserver  
                  </div>



                <p className="fw-bold p-3 mt-4 mb-1 bg-dark text-light border rounded-top">
                  Scripting Web Forms
                </p>
                <div className="list-group-item border-0">
                  
                  JavaScript Form 
                </div>
                <div className="list-group-item border-0">
                  
                  Radio Button 
                </div>
                <div className="list-group-item border-0">
                  
                  Checkbox   
                </div>
                <div className="list-group-item border-0">
                  
                  Select box 
                </div>
                <div className="list-group-item border-0">
                  
                  Add / Remove Options 
                </div>
                <div className="list-group-item border-0">
                  
                  Removing Items from 'select' element conditionally
                </div>
                <div className="list-group-item border-0">
                  
                  Handling change event  
                </div>
                <div className="list-group-item border-0">
                  
                  Handling input event 
                </div>

              </div>




        <h5 className="fw-bold p-3 mt-3 mb-1 bg-black text-primary">JS Types</h5>
        <div className="list-group mx-1">
                <div className="list-group-item border-0">
                  
                  JavaScript Objects
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Array
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Multidimensional Array
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript for...in loop
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Arrow Function
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Map
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript CallBack Function
                </div>
                <div className="list-group-item border-0">
                  
                  Javscript async/await
                </div>
                <div className="list-group-item border-0">
                  
                  JavaScript Promise and Promise Chaining
                </div>
              </div>


    
  </section>

    </>
  )
}
