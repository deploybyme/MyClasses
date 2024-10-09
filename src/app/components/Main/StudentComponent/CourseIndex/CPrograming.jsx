import React from 'react'




export default function CPrograming() {


  return (
    <>

      <a id="TopButton" href="#C/C++">
        <button className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
          </svg>
        </button>
      </a>
      <h3 id="C/C++" className="fw-bold p-2 my-3 text-light bg-dark">Core C and C++</h3>

      <ul className="list-group-item border-0 rounded-0 bg-dark text-light p-4" style={{lineHeight:2}}>
      <h4>INDEX</h4>
          <li>
            <a href="#introduction" className="text-warning text-decoration-none">Introduction</a>
              <ul>
                  <li>
                      <a href="#Csyntax" className="text-decoration-none">Structure of C</a>
                  </li>
                  <li>
                      <a href="#Keywords" className="text-decoration-none">Keywords is C</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#Fundamentals" className="text-warning text-decoration-none">Fundamentals</a>
              <ul>
                  <li>
                      <a href="#Variables" className="text-decoration-none">Variables, Constants and Literals</a>
                  </li>
                  <li>
                      <a href="#DataTypes" className="text-decoration-none">C Data Types</a>
                  </li>
                  <li>
                      <a href="#InputOutput" className="text-decoration-none">Input Output</a>
                  </li>
                  <li>
                      <a href="#Operators" className="text-decoration-none">Operators</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#FlowControl" className="text-warning text-decoration-none">Flow Control</a>
            <ul>
                  <li>
                      <a href="#ifElse" className="text-decoration-none">If Else Statements</a>
                  </li>
                  <li>
                      <a href="#Switch" className="text-decoration-none">Switch Statements</a>
                  </li>
                  <li>
                      <a href="#Goto" className="text-decoration-none">Goto Statement</a>
                  </li>
                  <li>
                      <a href="#Loop" className="text-decoration-none">while, do...while and for Loop</a>
                  </li>
            </ul>
          </li>
          <li>
            <a href="#Functions" className="text-warning text-decoration-none">Functions</a>
          </li>
          <li>
            <a href="#Arrays" className="text-warning text-decoration-none">Arrays</a>
          </li>
          <li>
            <a href="#Pointers" className="text-warning text-decoration-none">Pointers</a>
          </li>
          <li>
            <a href="#Structures" className="text-warning text-decoration-none">Structures</a>
          </li>
          <li>
            <a href="#FileHandling" className="text-warning text-decoration-none">File Handling</a>
          </li>
      </ul>

      <section className="py-2 mt-4 mx-1 rounded text-light bg-dark bg-gradient">

        {/* ======================================  Introduction  =========================================== */}

<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='introduction'>Introduction</h5>
        <div className="list-group mb-5">

          <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
            C is a powerful general-purpose programming language known for its efficiency
            and flexibility. It's commonly used in system programming, embedded systems,
            and creating high-performance applications.It was created in the 1970s by
            <a className='text-link' style={{ cursor: "pointer" }}> Dennis Ritchie </a>
            and remains very widely used and influential
          </div>

          <p className="pt-5 m-3 fw-bold" id="Csyntax">
            Structure of C
          </p>
          <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4 ">

            <p className='rounded p-2' id="CodeBox">
              <code className='text-dark'>
                {` #include <stdio.h>                   `} <br />
                {` int main(){                          `} <br />
                &nbsp;{`      printf(" Hello World! "); `} <br />
                &nbsp;{`      return 0;                 `} <br />
                {` }                                    `} <br />
              </code >
            </p>

            <div className="row border-bottom border-top mt-4 m-1">
              <div className="col-3 ">
                <b className=' text-warning '>#</b>
              </div>
              <div className="col-9">
                is pre-processor directive
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>include</b>
              </div>
              <div className="col-9 ">
                means attachment which attach header files from C library
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>stdio.h</b>
              </div>
              <div className="col-9 ">
                is a C Header File
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>main{'()'}</b>
              </div>
              <div className="col-9 ">
                is main function in C, is the entry point of a program where the execution of a program starts.
              </div>
            </div>

            <div className="row m-1 border-bottom">
              <div className="col-3">
                <b className=' text-warning '>printf{'()'}</b>
              </div>
              <div className="col-9 ">
                is a C standard library function that formats text and writes it to standard output.
              </div>
            </div>

            <div className="row m-1">
              <div className="col-3">
                <b className=' text-warning '>return</b>
              </div>
              <div className="col-9 ">
                ends the execution of a function and returns the control to the function from where it was called.
              </div>
            </div>

          </div>

          <p className="pt-5 m-3 fw-bold" id="Keywords">
            Keywords is C
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4">
            <div>
              <b className="text-primary">Keywords</b> are predefined, reserved words used in programming
              that have special meanings to the compiler.
              Keywords are part of the syntax and they cannot be used as an identifier.
              <br /><br />
              Here is a list of all keywords allowed in ANSI C.
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">auto</div>
              <div className="col-3 bh-highlight  keyfont">double</div>
              <div className="col-3 bh-highlight  keyfont">int</div>
              <div className="col-3 bh-highlight  keyfont">struct</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">break</div>
              <div className="col-3 bh-highlight  keyfont">else</div>
              <div className="col-3 bh-highlight  keyfont">long</div>
              <div className="col-3 bh-highlight  keyfont">switch</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">case</div>
              <div className="col-3 bh-highlight  keyfont">enum</div>
              <div className="col-3 bh-highlight  keyfont">register</div>
              <div className="col-3 bh-highlight  keyfont">typedef</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">char</div>
              <div className="col-3 bh-highlight  keyfont">extern</div>
              <div className="col-3 bh-highlight  keyfont">return</div>
              <div className="col-3 bh-highlight  keyfont">union</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">continue</div>
              <div className="col-3 bh-highlight  keyfont">for</div>
              <div className="col-3 bh-highlight  keyfont">signed</div>
              <div className="col-3 bh-highlight  keyfont">void</div>
            </div>
            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">do</div>
              <div className="col-3 bh-highlight  keyfont">if</div>
              <div className="col-3 bh-highlight  keyfont">static</div>
              <div className="col-3 bh-highlight  keyfont">while</div>
            </div>
            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">default</div>
              <div className="col-3 bh-highlight  keyfont">goto</div>
              <div className="col-3 bh-highlight  keyfont">sizeof</div>
              <div className="col-3 bh-highlight  keyfont">volatile</div>
            </div>
            <div className="row mb-3">
              <div className="col-3 bh-highlight  keyfont">const</div>
              <div className="col-3 bh-highlight  keyfont">float</div>
              <div className="col-3 bh-highlight  keyfont">short</div>
              <div className="col-3 bh-highlight  keyfont">unsigned</div>
            </div>

          </div>

        </div>
        {/* ======================================  /Introduction  =========================================== */}
        {/* =======================================  Fundamentals  =========================================== */}

<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='Fundamentals'>C Fundamentals</h5>
        <div className="list-group">

          <p className="pt-5 m-3 fw-bold" id="Variables">
            Variables, Constants and Literals
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <p>
              In programming, a <b className="text-primary">variable</b> is a container {"("}storage area{")"} to hold data.
              <br />
              To indicate the storage area, each variable should be given a unique name {"("}<b>Identifier</b>{")"}.
            </p>
            <b>syntax of variable declaration and initiation</b>
            <p className='rounded my-2 p-2 ' id="CodeBox">
              data_type &nbsp; variable_name &nbsp; = &nbsp; value;
            </p>
            <b>Example:</b>
            <p className='bg-black rounded mt-2 p-2'>
              <code className='text-light' style={{ fontSize: "large" }}>
                <span style={{ color: "magenta" }}>int</span> age = <span style={{ color: "orange" }}>25</span>;
                <br />
                <span style={{ color: "magenta" }}>float</span> marks = <span style={{ color: "orange" }}>87.79</span>;
                <br />
                <span style={{ color: "magenta" }}>char</span> grade = <span style={{ color: "lightgreen" }}>'A'</span>;
              </code>
            </p>
          </div>

          <p className="pt-5 m-3 fw-bold" id="DataTypes">
            C Data Types
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <p>
              In C programming, data types are declarations for variables.
              This determines the type and size of data associated with variables. For example,
            </p>

            <p className='rounded mt-2 p-2' id="CodeBox">
              <span style={{ color: "magenta" }}>int</span> myVar ;
            </p>

            <p>
              Here, <span className='p-1 bh-highlight border rounded'>myVar</span> is a variable of <span className='p-1 bh-highlight border rounded'>int</span> (integer) data type. The size of int is 4 bytes.
            </p>

            <div>

              <h5 className="border-bottom">Basic Data types</h5>
              <p>
                Here's a table containing commonly used types in C programming for quick access.
              </p>
              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-4 py-2">Types</div>
                  <div className="col-4 py-2">Size</div>
                  <div className="col-4 py-2">Format Specifier</div>
                </div>
                <div className="row border border-bottom-0">
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>int</span>
                  </div>
                  <div className="col-4 py-2">at least 2, usually 4</div>
                  <div className="col-4 py-2" style={{ lineHeight: 2 }}>
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

          <p className="pt-5 m-3 fw-bold" id="InputOutput">
            Input Output (I/O)
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <div>

              <h3 className="border-bottom">C output</h3>
              <p>
                In C programming,<span className='p-1 bh-highlight border rounded'>printf( )</span> is one of the main output function.
                The function sends formatted output to the screen. For example,
              </p>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                printf{"("}<span style={{ color: "#009500" }}>" Text content "</span>{")"};
              </p>
              <p className='bg-black p-3 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" C Programming "</span>{")"};
                  <br />
                  <span style={{ color: '#ffffaf' }}>// Displays the string inside quotations</span>
                  <br />
                  &nbsp; <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

            </div>

            <div className='my-3'>
              <h6>Output of type variables</h6>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                printf{"("}<span style={{ color: "#009500" }}>" Content + FS "</span>, Variable_name{")"};
              </p>

              <p className='bg-black p-3 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>int</span> number1 = <span style={{ color: "orange" }}>1290</span>;
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>float</span> number2 = <span style={{ color: "orange" }}>857.233</span>;
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>char</span> alphabet = <span style={{ color: "lightgreen" }}>'F'</span>;
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Number1 = %d \n"</span>, number1{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Number1 = %f \n"</span>,number2{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Alphabet = %c \n"</span>,alphabet{")"};
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

              <h6>Output :</h6>
              <p className='bg-black p-3 rounded'>
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
              <h3 className="mt-5">C Input</h3>
              <p style={{ lineHeight: 2 }}>
                In C programming, <span className='p-1 bh-highlight border rounded'>scanf( )</span> is one of the commonly used function to take input from the user.
                The <span className='p-1 bh-highlight border rounded'>scanf( )</span> function reads formatted input from the standard input such as keyboards
              </p>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                scanf{"("}<span style={{ color: "#009500" }}>" Format Specifier "</span>, &variable_name{")"} ;
              </p>

              <p className='bg-black p-2 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>int</span> num;
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Enter Number : "</span>{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %d "</span>,&num{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Your Number is %d "</span>,num{")"};
                  <br />
                  &nbsp;   <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

              <h6>Output :</h6>
              <p className='bg-black p-3 rounded' id="CodeBox">
                <code className='text-light'>
                  Enter Number : 45
                  <br />
                  Your Number is 45
                </code >
              </p>
            </div>

            <div>
              <h5>Format Specifiers for I/O</h5>
              <p>
                As you can see from the above examples, we use
              </p>
              <ul type="square" style={{ lineHeight: 2 }}>
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

          <p className="pt-5 m-3 fw-bold" id="Operators">
            Operators
          </p>
          <div className="list-group-item border-0 ronded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <div>
              <p>
                An <b className="text-primary">operator</b> is a symbol that operates on a value or a variable to perform specific task.
                <br />
                <b>For example:</b>  + is an operator to perform addition.
                <br />C has a wide range of operators to
                perform various operations.
              </p>
              <h5>Arithmetic Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                An arithmetic operator performs mathematical operations such as addition, subtraction,
                multiplication, division etc on numerical values (constants and variables)
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
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
              <p style={{ lineHeight: 2 }}>
                C programming has two operators increment <span className='p-1 bh-highlight border rounded'>++</span> and decrement <span className='p-1 bh-highlight border rounded'>--</span> to change the value of an operand (constant or variable) by 1.
                Increment <span className='p-1 bh-highlight border rounded'>++</span> increases the value by 1 whereas decrement <span className='p-1 bh-highlight border rounded'>--</span> decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
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
              <p style={{ lineHeight: 2 }}>
                An assignment operator is used for assigning a value to a variable. The most common assignment operator is
                <span className='p-1 bh-highlight border rounded'>=</span>
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
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
              <p style={{ lineHeight: 2 }}>
                A relational operator checks the relationship between two operands. If the relation is true,
                it returns 1; if the relation is false, it returns value 0.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
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
                  <div className="col-4 py-2"> {">"} </div>
                  <div className="col-4 py-2"> Greater than </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {">"} 3</span> is evaluated to 1
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> {"<"} </div>
                  <div className="col-4 py-2"> Less than </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {"<"} 3</span> is evaluated to 0
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
                  <div className="col-4 py-2"> {">"}= </div>
                  <div className="col-4 py-2"> Greater than or equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {">"}= 3</span> is evaluated to 1
                  </div>
                </div>

                <div className="row border rounded-bottom mb-5">
                  <div className="col-4 py-2"> {"<"}= </div>
                  <div className="col-4 py-2"> Less than or equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {"<"}= 3</span> is evaluated to 0
                  </div>
                </div>

              </div>

              <h5>Logical Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false.
                Logical operators are commonly used in decision making in C programming.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black"}}>
                  <div className="col-4 py-2">Operator</div>
                  <div className="col-4 py-2">Meaning</div>
                  <div className="col-4 py-2">Example</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> && </div>
                  <div className="col-4 py-2"> Logical AND. True only if all operands are true </div>
                  <div className="col-4 py-2">
                    If c = 5 and d = 2 then, expression
                    <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>&&</span>  <span>(d{">"}5)</span> )</div>  equals to 0.
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> || </div>
                  <div className="col-4 py-2"> Logical OR. True only if either one operand is true </div>
                  <div className="col-4 py-2">
                    If c = 5 and d = 2 then, expression
                    <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>||</span>  <span>(d{">"}5)</span> )</div>  equals to 1.
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
        {/* ======================================  /Fundamentals  =========================================== */}
        {/* =======================================  Flow Control  =========================================== */}

<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='FlowControl'>C Flow Control</h5>
            <div className="list-group">

              <p className="pt-5 m-3 fw-bold" id="ifElse">
                If Else Statements
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  There are following type of if..else Statements
                </p>
                <ul className='mb-4' type="square" style={{ lineHeight: 2 }}>
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

                <b className='text-decoration-underline fs-5'>if Statement syntax:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> age = <span style={{ color: "orange" }}>25</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( age {">"} <span style={{ color: "orange" }}>18</span> )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" You are Adult "</span>{")"};
                    <br />
                    &nbsp;    {"}"}

                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    You are Adult
                  </code>
                </p>

                <b className='text-decoration-underline fs-5'>if..else Statement syntax:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// run code if condition is true</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span>
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// run code if condition is false</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> num = <span style={{ color: "orange" }}>6</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( num % <span style={{ color: "orange" }}>2</span> == <span style={{ color: "orange" }}>0</span>  )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" %d is an even num "</span>,num{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span>
                    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" %d is an odd num "</span>,num{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    6 is an even num
                  </code>
                </p>

                <b className='text-decoration-underline fs-5'>if..else if...else Ladder syntax:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition1 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition2 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition3 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition4 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span>
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> num1 = <span style={{ color: "orange" }}>22</span>, num2 = <span style={{ color: "orange" }}>13</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( num1 == num2  )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d = %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span> <span style={{ color: "magenta" }}>if</span> ( num1 {">"} num2 )
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d {">"} %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span>
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d {"<"} %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    Result: 22 {">"} 13
                  </code>
                </p>



              </div>

              <p className="fw-bold bg-light text-dark mt-5 p-3" id="Switch">
                Switch Statements
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p style={{lineHeight:2}}>
                  The switch statement allows us to execute one code block among many alternatives.
                  <br />
                  You can do the same thing with the
                  <span className='p-1 bh-highlight border rounded'>if</span>...<span className='p-1 bh-highlight border rounded'>else if</span>...<span className='p-1 bh-highlight border rounded'>else</span>
                  ladder.
                  However, the syntax of the <span className='p-1 bh-highlight border rounded'>switch</span> statement is much easier to read and write.
                </p>

                <b className='text-decoration-underline fs-5'>Syntax of switch...case:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>switch </span> ( expression )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> constant1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> constant2 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>default </span>:
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>char</span> op;
                    <br />
                    &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"choose \n + : addition \n - : subtraction \n  &nbsp; : "</span>{")"};
                    <br />
                    &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %c "</span>,&op{")"};
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>switch </span> ( op )
                    <br />
                    &nbsp;  {"{"}
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> '+' :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"You select addition \n"</span>{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> '-' :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"You select subtraction \n"</span>{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>default </span>:
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"invalid selection \n"</span>{")"};
                    <br />
                    &nbsp; {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-4 p-2'>
                  <code className='text-light'>
                    choose <br />+ : addition <br />- : subtraction <br /> &nbsp; : +
                    <br />You select addition
                  </code>
                </p>

                <b className='text-decoration-underline fs-5'>Another Syntax of switch...case:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>switch </span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> 0 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// run if condition is true</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> 1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// run if condition is false</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>int</span> num;
                    <br />
                    &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Enter number : "</span>{")"};
                    <br />
                    &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %d "</span>,&num{")"};
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>switch </span> ( num{">"} 0 )
                    <br />
                    &nbsp;  {"{"}
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> 1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d is positive \n"</span>,num{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> 0 :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d is negitive \n"</span>,num{")"};
                    <br />
                    &nbsp; {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-4 p-2'>
                  <code className='text-light'>
                    Enter number : -7
                    <br /> -7  is negitive
                  </code>
                </p>

              </div>

              <p className="fw-bold bg-light text-dark mt-5 p-3" id="Goto">
                Goto Statement
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  The <span className='p-1 bh-highlight border rounded'>goto</span> statement
                  allows us to transfer control of the program to the
                  specified <span className='p-1 bh-highlight border rounded'>label</span>.
                </p>

                <b>Syntax of switch...case:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>goto </span> label;
                    <br />
                    ....  ....  ....
                    <br />
                    ....  ....  ....
                    <br />
                    label :
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                  </code>
                </p>

                <p  style={{lineHeight:2}}>
                  The <span className='p-1 bh-highlight border rounded'>label</span> is an identifier.
                  When the <span className='p-1 bh-highlight border rounded'>goto</span> statement is encountered,
                  the control of the program jumps to <span className='p-1 bh-highlight border rounded'>label :</span> and starts executing the code.
                </p>

              </div>

              <p className="fw-bold bg-light text-dark mt-5 p-3" id="Loop">
                while, do...while and for Loop
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  In programming, loops are used to repeat a block of code until a specified condition is met.
                </p>
                <p>
                  C programming has three types of loops.
                </p>
                <ol>
                  <li>do...while loop</li>
                  <li>while loop</li>
                  <li>for loop</li>
                </ol>

                <p className='pt-4 fw-bold text-decoration-underline fs-5'>do...while loop</p>
                <p  style={{lineHeight:2}}>
                  The <span className='p-1 bh-highlight border rounded'>do..while</span> loop is similar to the
                  <span className='p-1 bh-highlight border rounded'>while</span> loop with one important difference.
                  The body of <span className='p-1 bh-highlight border rounded'>do..while</span> loop is executed at least once. Only then,
                  the Condition is false.
                </p>

                <b>syntax of do..while :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>do </span>
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    <span style={{ color: "#0900ff" }}>// iteration</span>;
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>while</span>( condition );
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i = <span style={{ color: "orange" }}>0</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>do</span>
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    &nbsp; i++;
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>while</span>( i {"<"} 10 );
                    <br /><br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>
                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>


                <p className='pt-4 fw-bold text-decoration-underline fs-5'>while loop</p>
                <b>The syntax of the while loop is :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>while</span>( condition )
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    <span style={{ color: "#0900ff" }}>// iteration</span>;
                    <br />
                    {"}"}
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i = <span style={{ color: "orange" }}>0</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>while</span>( i {"<"} 10 )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    &nbsp; i++;
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>


                <p className='pt-4 fw-bold text-decoration-underline fs-5'>for loop</p>
                <b>The syntax of the while loop is :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>for</span>(initialization ; condition ; iteration)
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    {"}"}
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>for</span>( i = 1 ; i {"<"} 10 ; i++ )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>

              </div>

            </div>
        {/* ======================================  /Flow Control  =========================================== */}
        {/* =======================================  Functions  =========================================== */}
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='Functions'>C++ Functions</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Functions
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                User-defined Functions
              </div>
            </div>
        {/* =======================================  /Functions  =========================================== */}
        {/* =======================================  Arrays  =========================================== */}
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='Arrays'>C++ Arrays</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Onedimentional Arrays
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Multidimentional Arrays
              </div>
            </div>
        {/* =======================================  /Arrays  =========================================== */}
        {/* ======================================== Pointers  =========================================== */}
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='Pointers'>C++ Pointers</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Pointers
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                References
              </div>
            </div>
        {/* ======================================== /Pointers  =========================================== */}
        {/* ======================================== Structures  =========================================== */}
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='Structures'>C++ Structures</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Structures
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Member Function in Structures
              </div>
            </div>
        {/* ======================================  / Structures  =========================================== */}
        {/* =======================================  File Handling  =========================================== */}
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark" id='FileHandling'>C++ File Handling</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Opening and Closing a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Write to a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Read From a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                <input className="form-check-input rounded-pill me-1" type="checkbox" />
                Append to a Text File
              </div>
            </div>
        {/* ======================================  /File Handling  =========================================== */}

      </section>
    </>
  )
}
