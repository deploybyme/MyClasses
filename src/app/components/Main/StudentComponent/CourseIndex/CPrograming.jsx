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
                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                   C is a powerful general-purpose programming language known for its efficiency
                    and flexibility. It's commonly used in system programming, embedded systems, 
                    and creating high-performance applications.It was created in the 1970s by 
                     <b> Dennis Ritchie </b>  
                    and remains very widely used and influential
                </div>


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Structure of C
                </p>
                <div className="list-group-item border-0 rounded">

                  <p className='bg-dark p-3 rounded'>
                  <code className='text-light'>
                      <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                      <br />
                      <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                      <br />
                      &#123;   
                      <br />    
                        &nbsp; &nbsp; &nbsp;   <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Hello World! "</span>&#41;;
                      <br />
                        &nbsp; &nbsp; &nbsp;    <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
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

                </div>


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  Keywords is C
                </p>
                <div className="list-group-item border-0 rounded">

                
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

                </div>


            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C Fundamentals</h5>
        <div className="list-group me-1">


                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  Variables, Constants and Literals
                </p>
                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                  <p>
                  In programming, a <b>variable</b> is a container &#40;storage area&#41; to hold data.
                  <br />
                  To indicate the storage area, each variable should be given a unique name &#40;<b>Identifier</b>&#41;.
                  </p>
                  <b>syntax of variable declaration and initiation</b>
                  <p className='bg-dark text-light rounded mt-2 p-2' style={{fontSize:12+"px"}}>
                  <span style={{color:"magenta"}}>data_type</span> &nbsp; variable_name &nbsp; = &nbsp; <span style={{color:"orange"}}>value</span>;
                  </p>
                  <b>Example:</b>
                  <p className='bg-dark rounded mt-2 p-2'>
                    <code className='text-light'>
                      <span style={{color:"magenta"}}>int</span> age = <span style={{color:"orange"}}>25</span>;
                       <br />
                       <span style={{color:"magenta"}}>float</span> marks = <span style={{color:"orange"}}>87.79</span>;
                       <br />
                       <span style={{color:"magenta"}}>char</span> grade = <span style={{color:"lightgreen"}}>'A'</span>;
                    </code>
                  </p>
                </div>


                <p className="mb-2 mt-3   text-dark fw-bold textShadow">
                  C Data Types
                </p>
                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                <p className='mt-3'>
                In C programming, data types are declarations for variables. 
                This determines the type and size of data associated with variables. For example,
                </p>
                <p className='bg-dark text-light rounded mt-2 p-2'>
                <span style={{color:"magenta"}}>int</span> myVar ;
                </p>
                <p>
                Here, <span className='p-1 bh-highlight border rounded'>myVar</span> is a variable of <span className='p-1 bh-highlight border rounded'>int</span> (integer) data type. The size of int is 4 bytes.
                </p>
                <div>
                  <h5>Basic Data types</h5>
                  <p>
                  Here's a table containing commonly used types in C programming for quick access.
                  </p>
                  <div style={{textAlign:"left"}}>
                    <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                      <div className="col-4 py-2">Types</div>
                      <div className="col-4 py-2">Size</div>
                      <div className="col-4 py-2">Format Specifier</div>
                    </div>
                    <div className="row border border-bottom-0">
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>int</span>
                      </div>
                      <div className="col-4 py-2">at least 2, usually 4</div>
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>%d</span> ,  
                      <span className='mx-1 p-1 bh-highlight border rounded'>%i</span>
                      </div>
                    </div>
                    <div className="row border border-bottom-0">
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>char</span>
                      </div>
                      <div className="col-4 py-2">1</div>
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>%c</span>
                      </div>
                    </div>

                    <div className="row border border-bottom-0">
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>float</span>
                      </div>
                      <div className="col-4 py-2">4</div>
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>%f</span>
                      </div>
                    </div>

                    <div className="row border rounded-bottom mb-3">
                      <div className="col-4 py-2">
                      <span className='p-1 bh-highlight border rounded'>double</span>
                      </div>
                      <div className="col-4 py-2">8</div>
                      <div className="col-4 py-2">
                        <span className='p-1 bh-highlight border rounded'>%lf</span>
                      </div>
                    </div>
                  </div>
                    
                </div>
                </div>



                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  Input Output (I/O)
                </p>
                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                  <div className='my-3'>
                    <h3>C output</h3>
                    <p>
                    In C programming,<span className='p-1 bh-highlight border rounded'>printf( )</span> is one of the main output function. 
                    The function sends formatted output to the screen. For example,
                    </p>
                    <h6>Syntax :</h6>
                      <p className='bg-dark text-light rounded mt-2 p-2' style={{fontSize:15+"px"}}>
                        <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Text content "</span>&#41;;
                      </p>

                      <p className='bg-dark p-3 rounded' style={{textAlign:"start"}}>
                      <code className='text-light'>
                          <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                          <br />
                          <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                          <br />
                          &#123; 
                          <br />    
                                 &nbsp; <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" C Programming "</span>&#41;;
                          <br />
                                 <span style={{color:'#ffffaf'}}>// Displays the string inside quotations</span>
                          <br />
                                 &nbsp; <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                          <br />
                          &#125;
                        </code >
                      </p>
                  </div>

                  <div className='my-3'>
                    <h6>Output of type variables</h6>

                    <h6>Syntax :</h6>
                      <p className='bg-dark text-light rounded mt-2 p-2' style={{fontSize:15+"px"}}>
                        <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Content + FS "</span>, Variable_name&#41;;
                      </p>

                      <p className='bg-dark p-3 rounded' style={{textAlign:"start"}}>
                      <code className='text-light'>
                          <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                          <br />
                          <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                          <br />
                          &#123;      
                          <br />
                            &nbsp;  <span style={{color:"magenta"}}>int</span> number1 = <span style={{color:"orange"}}>1290</span>;
                          <br />         
                            &nbsp;  <span style={{color:"magenta"}}>float</span> number2 = <span style={{color:"orange"}}>857.233</span>;
                          <br />
                            &nbsp;  <span style={{color:"magenta"}}>char</span> alphabet = <span style={{color:"lightgreen"}}>'F'</span>;
                          <br />    
                            &nbsp;  <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>"Number1 = %d \n"</span>, number1&#41;;
                            <br />    
                            &nbsp;  <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>"Number1 = %f \n"</span>,number2&#41;;
                            <br />    
                            &nbsp;  <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>"Alphabet = %c \n"</span>,alphabet&#41;;
                          <br />
                            &nbsp;  <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                          <br />
                          &#125;
                        </code >
                      </p>

                      <h6>Output :</h6>
                      <p className='bg-dark p-3 rounded'>
                      <code className='text-light'>

                            Number1 = 1290
                            <br />    
                            Number2 = 857.233
                            <br />    
                            Alphabet = F

                        </code >
                      </p>

                  </div>

                  <div className='my-3'>
                    <h3>C Input</h3>
                    <p style={{lineHeight:2}}>
                    In C programming, <span className='p-1 bh-highlight border rounded'>scanf( )</span> is one of the commonly used function to take input from the user.
                     The <span className='p-1 bh-highlight border rounded'>scanf( )</span> function reads formatted input from the standard input such as keyboards
                    </p>

                    <h6>Syntax :</h6>
                      <p className='bg-dark text-light rounded mt-2 p-2' style={{fontSize:15+"px"}}>
                        <span className='text-warning'>scanf</span>&#40;<span style={{color:"lightgreen"}}>" FS "</span>, &variable_name&#41; ;
                      </p>

                      <p className='bg-dark p-2 rounded' style={{textAlign:"start"}}>
                      <code className='text-light'>
                          <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                          <br />
                          <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                          <br />
                          &#123; 
                          <br />    
                            &nbsp;  <span style={{color:"magenta"}}>int</span> num;
                          <br />    
                            &nbsp;  <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>"Enter Number : "</span>&#41;;                          
                          <br />    
                            &nbsp;  <span className='text-warning'>scanf</span>&#40;<span style={{color:"lightgreen"}}>" %d "</span>,&num&#41;;
                            <br />    
                            &nbsp;  <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>"Your Number is %d "</span>,num&#41;; 
                          <br />
                            &nbsp;   <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                          <br />
                          &#125;
                        </code >
                      </p>
                      <h6>Output :</h6>
                      <p className='bg-dark p-3 rounded'>
                      <code className='text-light'>
                            Enter Number : 45
                            <br />
                            Your Number is 45

                        </code >
                      </p>
                  </div>   

                  <div className='my-3'>
                    <h5>Format Specifiers for I/O</h5>
                    <p>
                    As you can see from the above examples, we use
                    </p>
                    <ul type="square" style={{lineHeight:2}}>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>%d</span> for <span className='p-1 bh-highlight border rounded'>int</span>
                      </li>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>%c</span> for <span className='p-1 bh-highlight border rounded'>char</span>
                      </li>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>%f</span> for <span className='p-1 bh-highlight border rounded'>float</span>
                      </li>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>%lf</span> for <span className='p-1 bh-highlight border rounded'>double</span>
                      </li>
                    </ul>

                  </div>                  

                </div>




                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  Operators
                </p>
                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                  <div className='my-3'>
                    <p>
                    An <b>operator</b> is a symbol that operates on a value or a variable to perform specific task. 
                    <br />
                    <b>For example:</b>  + is an operator to perform addition.
                    <br />C has a wide range of operators to
                      perform various operations.
                    </p>
                    <h5>Arithmetic Operators :</h5>
                      <p style={{lineHeight:2}}>
                      An arithmetic operator performs mathematical operations such as addition, subtraction, 
                      multiplication, division etc on numerical values (constants and variables) 
                      </p>

                    <div style={{textAlign:"left"}}>
                      <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                        <div className="col-6 py-2">Operator</div>
                        <div className="col-6 py-2">Meaning</div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-6 py-2"> + </div>
                        <div className="col-6 py-2"> addition </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-6 py-2"> - </div>
                        <div className="col-6 py-2"> subtraction </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-6 py-2"> * </div>
                        <div className="col-6 py-2"> multiplication </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-6 py-2"> / </div>
                        <div className="col-6 py-2"> division </div>
                      </div>

                      <div className="row border rounded-bottom mb-5">
                        <div className="col-6 py-2"> % </div>
                        <div className="col-6 py-2"> remainder</div>
                      </div>
                    </div>                      

                    <h5>Increment and Decrement Operators :</h5>
                        <p style={{lineHeight:2}}>
                        C programming has two operators increment <span className='p-1 bh-highlight border rounded'>++</span> and decrement <span className='p-1 bh-highlight border rounded'>--</span> to change the value of an operand (constant or variable) by 1.
                        Increment <span className='p-1 bh-highlight border rounded'>++</span> increases the value by 1 whereas decrement <span className='p-1 bh-highlight border rounded'>--</span> decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand. 
                        </p>

                    <div style={{textAlign:"left"}}>
                      <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                        <div className="col-4 py-2">Operator</div>
                        <div className="col-4 py-2">Example</div>
                        <div className="col-4 py-2">Same as</div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> ++ </div>
                        <div className="col-4 py-2"> x++ </div>
                        <div className="col-4 py-2"> x = x + 1 </div>
                      </div>

                      <div className="row border rounded-bottom mb-5">
                        <div className="col-4 py-2"> -- </div>
                        <div className="col-4 py-2"> x-- </div>
                        <div className="col-4 py-2"> x = x - 1 </div>
                      </div>

                    </div>

                    <h5>Assignment Operators :</h5>
                        <p style={{lineHeight:2}}>
                        An assignment operator is used for assigning a value to a variable. The most common assignment operator is 
                        <span className='p-1 bh-highlight border rounded'>=</span>
                        </p>

                    <div style={{textAlign:"left"}}>
                      <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                        <div className="col-4 py-2">Operator</div>
                        <div className="col-4 py-2">Example</div>
                        <div className="col-4 py-2">Same as</div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> = </div>
                        <div className="col-4 py-2"> a = b </div>
                        <div className="col-4 py-2"> a = b </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> += </div>
                        <div className="col-4 py-2"> a += b </div>
                        <div className="col-4 py-2"> a = a + b </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> -= </div>
                        <div className="col-4 py-2"> a -= b </div>
                        <div className="col-4 py-2"> a = a - b </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> *= </div>
                        <div className="col-4 py-2"> a *= b </div>
                        <div className="col-4 py-2"> a = a * b </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> /= </div>
                        <div className="col-4 py-2"> a /= b </div>
                        <div className="col-4 py-2"> a = a / b </div>
                      </div>

                      <div className="row border rounded-bottom mb-5">
                        <div className="col-4 py-2"> %= </div>
                        <div className="col-4 py-2"> a %= b </div>
                        <div className="col-4 py-2"> a = a % b </div>
                      </div>

                    </div>

                    <h5>Relational Operators :</h5>
                        <p style={{lineHeight:2}}>
                        A relational operator checks the relationship between two operands. If the relation is true, 
                        it returns 1; if the relation is false, it returns value 0.
                        </p>

                    <div style={{textAlign:"left"}}>
                      <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                        <div className="col-4 py-2">Operator</div>
                        <div className="col-4 py-2">Meaning</div>
                        <div className="col-4 py-2">Example</div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> == </div>
                        <div className="col-4 py-2"> Equal to </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 == 3</span> is evaluated to 0 
                        </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> &gt; </div>
                        <div className="col-4 py-2"> Greater than </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 &gt; 3</span> is evaluated to 1 
                        </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> &lt; </div>
                        <div className="col-4 py-2"> Less than </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 &lt; 3</span> is evaluated to 0 
                        </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> != </div>
                        <div className="col-4 py-2"> Not equal to </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 != 3</span> is evaluated to 1 
                        </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> &gt;= </div>
                        <div className="col-4 py-2"> Greater than or equal to </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 &gt;= 3</span> is evaluated to 1 
                        </div>
                      </div>

                      <div className="row border rounded-bottom mb-5">
                        <div className="col-4 py-2"> &lt;= </div>
                        <div className="col-4 py-2"> Less than or equal to </div>
                        <div className="col-4 py-2"> 
                          <span className='p-1 bh-highlight border rounded'>5 &lt;= 3</span> is evaluated to 0 
                        </div>
                      </div>

                    </div> 

                    <h5>Logical Operators :</h5>
                        <p style={{lineHeight:2}}>
                        An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false. 
                        Logical operators are commonly used in decision making in C programming.
                        </p>

                    <div style={{textAlign:"left"}}>
                      <div className="row border border-bottom-0 rounded-top" style={{background:"lightgrey"}}>
                        <div className="col-4 py-2">Operator</div>
                        <div className="col-4 py-2">Meaning</div>
                        <div className="col-4 py-2">Example</div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> && </div>
                        <div className="col-4 py-2"> Logical AND. True only if all operands are true </div>
                        <div className="col-4 py-2"> 
                            If c = 5 and d = 2 then, expression
                          <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>&&</span>  <span>(d&gt;5)</span> )</div>  equals to 0.
                        </div>
                      </div>

                      <div className="row border border-bottom-0">
                        <div className="col-4 py-2"> || </div>
                        <div className="col-4 py-2"> Logical OR. True only if either one operand is true </div>
                        <div className="col-4 py-2"> 
                            If c = 5 and d = 2 then, expression 
                          <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>||</span>  <span>(d&gt;5)</span> )</div>  equals to 1.
                        </div>
                      </div>

                      <div className="row border rounded-bottom mb-3">
                        <div className="col-4 py-2"> ! </div>
                        <div className="col-4 py-2"> Logical NOT. True only if the operand is 0 </div>
                        <div className="col-4 py-2"> 
                            If c = 5 then, expression 
                          <div className='p-1 bh-highlight border rounded'>!(c==5)</div> equals to 0.
                        </div>
                      </div>

                    </div> 

                  </div>               

                </div>


            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C Flow Control</h5>
        <div className="list-group me-1">

                <p className="mb-2 mt-3  text-dark fw-bold textShadow">
                  If Else Statements
                </p>

                <div className="list-group-item border-0 rounded" style={{textAlign:"justify"}}>
                    <p>
                        There are following type of if..else Statements
                    </p>
                    <ul className='mb-4' type="square" style={{lineHeight:2}}>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>if</span>...
                      </li>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>if</span>...<span className='p-1 bh-highlight border rounded'>else</span>
                      </li>
                      <li>
                      <span className='p-1 bh-highlight border rounded'>if</span>...<span className='p-1 bh-highlight border rounded'>else if</span>....<span className='p-1 bh-highlight border rounded'>else</span>
                      </li>
                    </ul>

                  <b>if Statement syntax:</b>
                  <p className='rounded mt-2 p-2' style={{background: "lightgrey"}}>
                    <code className='text-dark'>
                      <span style={{color:"magenta"}}>if</span> ( condition ) 
                       <br />
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// code</span>
                       <br />
                       &#125; 
                    </code>
                  </p>

                  <b>Example :</b>
                  <p className='bg-dark rounded mt-2 p-2'>
                    <code className='text-light'>

                    <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                      <br />
                      <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                      <br />
                      &#123;   
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>int</span> age = <span style={{color:"orange"}}>25</span>;    
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>if</span> ( age &gt; <span style={{color:"orange"}}>18</span> ) 
                                <br />
                      &nbsp;    &#123; 
                                <br />
                      &nbsp;    &nbsp;   <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" You are Adult "</span>&#41;;
                                <br />
                      &nbsp;    &#125; 

                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                      <br />
                      &#125;
                    </code>
                  </p>

                  <b>Output :</b>
                  <p className='bg-dark rounded mt-2 mb-4 p-2'>
                    <code className='text-light'>
                    You are Adult 
                    </code>
                  </p>

                  <b>if..else Statement syntax:</b>
                  <p className='rounded mt-2 p-2' style={{background: "lightgrey"}}>
                    <code className='text-dark'>
                      <span style={{color:"magenta"}}>if</span> ( condition ) 
                       <br />
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// run code if condition is true</span>
                       <br />
                       &#125;
                       <br />
                       <span style={{color:"magenta"}}>else </span>
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// run code if condition is false</span>
                       <br />
                       &#125;
                    </code>
                  </p>

                  <b>Example :</b>
                  <p className='bg-dark rounded mt-2 p-2' style={{textAlign:"left"}}>
                    <code className='text-light'>

                    <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                      <br />
                      <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                      <br />
                      &#123;   
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>int</span> num = <span style={{color:"orange"}}>6</span>;    
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>if</span> ( num % <span style={{color:"orange"}}>2</span> == <span style={{color:"orange"}}>0</span>  ) 
                                <br />
                      &nbsp;    &#123; 
                                <br />
                      &nbsp;    &nbsp;   <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" %d is an even num "</span>,num&#41;;
                                <br />
                      &nbsp;    &#125; 
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}> else </span> 
                      &#123; 
                                <br />
                      &nbsp;    &nbsp;   <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" %d is an odd num "</span>,num&#41;;
                                <br />
                      &nbsp;    &#125;
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                      <br />
                      &#125;
                    </code>
                  </p>

                  <b>Output :</b>
                  <p className='bg-dark rounded mt-2 mb-4 p-2'>
                    <code className='text-light'>
                    6 is an even num 
                    </code>
                  </p>

                  <b>if..else if...else Ladder syntax:</b>
                  <p className='rounded mt-2 p-2' style={{background: "lightgrey"}}>
                    <code className='text-dark'>
                      <span style={{color:"magenta"}}>if</span> ( condition1 ) 
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// statement(s)</span>
                       <br />
                       &#125;
                       <br />
                       <span style={{color:"magenta"}}>else </span><span style={{color:"magenta"}}>if</span> ( condition2 ) 
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// statement(s)</span>
                       <br />
                       &#125;
                       <br />
                       <span style={{color:"magenta"}}>else </span><span style={{color:"magenta"}}>if</span> ( condition3 ) 
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// statement(s)</span>
                       <br />
                       &#125;
                       <br />
                       <span style={{color:"magenta"}}>else </span><span style={{color:"magenta"}}>if</span> ( condition4 ) 
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// statement(s)</span>
                       <br />
                       &#125;
                       <br />
                       <span style={{color:"magenta"}}>else </span>
                       &#123; 
                       <br />
                        &nbsp; <span style={{color: "#0900ff"}}>// statement(s)</span>
                       <br />
                       &#125;
                    </code>
                  </p>

                  <b>Example :</b>
                  <p className='bg-dark rounded mt-2 p-2' style={{textAlign:"left"}}>
                    <code className='text-light'>

                    <span style={{color:"#4eb5ff"}}>#include</span> <span style={{color:"#00c400"}}>&lt;stdio.h&gt;</span>
                      <br />
                      <span style={{color:"magenta"}}>int</span> <span style={{color:"#4eb5ff"}}>main</span>&#40;&#41;
                      <br />
                      &#123;   
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>int</span> num1 = <span style={{color:"orange"}}>22</span>, num2 = <span style={{color:"orange"}}>13</span>;    
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>if</span> ( num1 == num2  ) 
                                <br />
                      &nbsp;    &#123; 
                                <br />
                      &nbsp;    <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Result: %d = %d "</span>,num1, num2&#41;;
                                <br />
                      &nbsp;    &#125; 
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}> else </span> <span style={{color:"magenta"}}>if</span> ( num1 &gt; num2 ) 
                      &#123; 
                                <br />
                      &nbsp;    <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Result: %d &gt; %d "</span>,num1, num2&#41;;
                                <br />
                      &nbsp;    &#125;
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}> else </span>
                      &#123; 
                                <br />
                      &nbsp;    <span className='text-warning'>printf</span>&#40;<span style={{color:"lightgreen"}}>" Result: %d &lt; %d "</span>,num1, num2&#41;;
                                <br />
                      &nbsp;    &#125;
                      <br />
                      &nbsp;    <span style={{color:"magenta"}}>return</span> <span style={{color:"orange"}}>0</span>;
                      <br />
                      &#125;
                    </code>
                  </p>

                  <b>Output :</b>
                  <p className='bg-dark rounded mt-2 mb-4 p-2'>
                    <code className='text-light'>
                        Result: 22 &gt; 13 
                    </code>
                  </p>



                </div>




                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Switch Statements
                </div>


                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  goto Statement
                </div>


                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  while and do...while Loop
                </div>


                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  for Loop
                </div>

              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Functions</h5>
        <div className="list-group me-1">
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Functions
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  User-defined Functions
                </div>
          </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Arrays</h5>
        <div className="list-group me-1">
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Onedimentional Arrays
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Multidimentional Arrays
                </div>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Pointers</h5>
        <div className="list-group me-1">
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Pointers
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  References
                </div>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ Structures</h5>
        <div className="list-group me-1">
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Structures
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Member Function in Structures
                </div>
              </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">C++ File Handling</h5>
        <div className="list-group me-1">
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Opening and Closing a File
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Write to a File
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Read From a File
                </div>
                <div className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Append to a Text File
                </div>
              </div>
      </li>


    </ul>
  </section>


    </>
  )
}
