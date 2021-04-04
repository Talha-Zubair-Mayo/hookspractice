import React, { useEffect, useReducer, useRef, useState } from "react";
//import ComA from "./UseContext/ComA";
import "./App.css";
import {BrowserRouter , Route, Router} from  "react-router-dom";
import Nav from "./myapp/nav";
import About from "./myapp/about";
import Index from "./myapp/index";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* #1: React Hooks in Hindi | When & Why to use useState() Hook in React */

// const App = ()=>
// {
//   /*  Usestate Hook */

//     const [Myname , Setname] = useState("i Am Initial Value");

//   //  var val = "Hello world I am Annonymous"
//     const clickme = () =>
//     {
//         // Now setting The New Value And Replacing it with initial value
//       Setname(`I Am Replaced By Initial Value`);

//     }
//   return<>

//     <h1>{Myname}</h1>
//     <button className="btn" onClick={clickme}> Click Me</button>
//   </>
// }

// export default App;

/* #2 React Hook Challenge No. 1 👉 How to Toggle the Data onClick using Hook */

// const App = ()=>
// {
//   /*  Usestate Hook */

//     const [Myname , Setname] = useState('i Am First Value');

//     const clickme = () =>
//     {
//       let val = Myname;

//       /* Using if else */

//       // if (val === 'i Am First Value' ) {

//       //   Setname(`I Am Second Value`);
//       // }
//       // else{
//       //   Setname(`i Am First Value`);
//       // }

//       /* Using ternary */

//       (val === 'i Am First Value' ) ?  Setname(`I Am Second Value`) : Setname(`i Am First Value`)
//     }
//   return<>

//     <h1>{Myname}</h1>
//     <button className="btn" onClick={clickme}> Click Me</button>
//   </>
// }

// export default App;

/* #3: React Hooks Rules You Must Follow to Master React & MERN */

/*
    Rule:1 => Always Write It Inside component or function.
    Rule:2 => Component name must be PasCal Case (First Letter Must Be Capital/UpperCase).
    Rule:3 => We can Directly import or we can directly write it using React.hookname.
    Rule:4 => Don't Call Hooks Inside Loops , conditions , or nested functions.
*/

/*  Rule:2 => Component name must be PasCal Case (First Letter Must Be Capital/UpperCase)

    First Letter Of Our Componet Is Capital 

*/
// const App = () => {

//   /*  Rule:1 => Always Write It Inside component or function.  */
//     // const [Myname, Setname] = useState("i Am First Value");

//     /*  Rule:3 => We can Directly import or we can directly write it using React.hookname. */
//      const [Myname, Setname] = React.useState("i Am First Value");

//   const clickme = () => {

//   };
//   return (
//     <>
//       <h1>{Myname}</h1>
//       <button className="btn" onClick={clickme}>
//         Click Me
//       </button>
//     </>
//   );
// };

// export default App;

/* #4  How to work with Array using UseState Hook in React */
// const App = () => {
//   const BioData = [
//     {
//       id: 0,
//       name: "Talha",
//       lname: "Zubair MaYo",
//       age: 24,
//     },
//     {
//       id: 1,
//       name: "Usama",
//       lname: "Zubair MaYo",
//       age: 22,
//     },
//   ];
//   /* Storing Array Inside UseState */

//   const [MyArray, SetArray] = useState(BioData);

//   var val = MyArray;
//   const clickme = () => {

//     (val === BioData) ? SetArray([]) : SetArray(BioData);

//   };
//   return (
//     <>
//       {/* <h1 className="h1style" > Hello I Am Heading {BioData.name} </h1> */}

//       {/* Mapping The array */}
//       {MyArray.map((val) => {
//         return (
//           <h1 className="h1style" key={val.id}>
//             Hello I Am Heading {val.name} {val.lname} and My Age Is {val.age}
//           </h1>
//         );
//       })}

//       <button className="btn" onClick={clickme}>
//         Click Me
//       </button>
//     </>
//   );
// };

// export default App;

/* #5: What is Three Dots { ... } 🤔 & Handle Objects using UseState Hook In React */

// const App = () => {
//   const BioData = [
//     {
//       id: 0,
//       name: "Talha",
//       lname: "Zubair MaYo",
//       age: 24,
//     },
//     {
//       id: 1,
//       name: "Usama",
//       lname: "Zubair MaYo",
//       age: 22,
//     },
//   ];

//   const [MyObject, SetObject] = useState(
//     {
//       name: "Talha",
//       lname: "Zubair MaYo",
//       age: 24
//     }
//   );

//   const clickme = () => {

//     // SetObject(
//     //   {
//     //     name: "Usama",
//     //     lname: "Zubair MaYo",
//     //     age: 22
//     //   }
//     // )

//      SetObject(
//       {
//         ...MyObject,
//         age: 22
//       }
//     )

//   };
//   return (
//     <>

//      <h1 className="h1style" > Name: {MyObject.name} & LastName: {MyObject.lname}  & Age:{MyObject.age}</h1>
//     <button className="btn" onClick={clickme}>
//        Update
//       </button>
//     </>
//   );
// };

// export default App;

/*#6 React Hook Challenge #2: Create a Basic TODO List | New Tips to get Data */

// const App = () => {
//   const BioData = [
//     {
//       id: 0,
//       name: "Talha",
//       lname: "Zubair MaYo",
//       age: 24,
//     },
//     {
//       id: 1,
//       name: "Usama",
//       lname: "Zubair MaYo",
//       age: 22,
//     },
//   ];
//   /* Storing Array Inside UseState */

//   const [MyArray, SetArray] = useState(BioData);
//   const clickme = () => {

//     SetArray([])

//   };

//   const remove = (id)=>
//   {

//     const NewArray = MyArray.filter((curr) =>
//     {
//       return curr.id !== id;
//     })

//     SetArray(NewArray);
//   }
//   return (
//     <>
//       {/* <h1 className="h1style" > Hello I Am Heading {BioData.name} </h1> */}

//       {/* Mapping The array */}
//       {MyArray.map((val) => {
//         return (
//          <>
//          <h1 className="h1style" key={val.id}>
//             Name: {val.name} {val.lname} &  {val.age}
//             <button className="btnInner" onClick={ () => remove(val.id)}>Remove </button>
//           </h1>

//          </>
//         );
//       })}

//       <button className="btn" onClick={clickme}>
//        Clear All
//       </button>
//     </>
//   );
// };

// export default App;

/*#8: Short Circuit Evaluation with React | Logical && and || Operators */

// const App = () => {

//   /* Storing Array Inside UseState */

//   const [demo, SetArray] = useState("useState Initial Value");

//   return (
//     <>
//       {/* <h1 className="h1style">
//           Hello I Am {demo || "Talha"}
//       </h1>
//       <h1 className="h1style">
//           Hello I Am {demo && "Talha"}
//       </h1> */}

//       {/* Now Changing the Position Of Demo */}

//       {/* <h1 className="h1style">
//           Hello I Am {"Talha" || demo}
//       </h1>
//       <h1 className="h1style">
//           Hello I Am {demo && "Talha"}
//       </h1> */}

//        <h1 className="h1style">
//         {demo ||
//              <>
//               Hellooo I Am Here Because UseState Value is null
//            </>
//           }
//       </h1>
//       <h1 className="h1style">
//           Hello I Am {demo && "Talha"}
//       </h1>

//   </>
//   );
// };

// export default App;

/*#9: Create Login Form with React in Hindi | Handling Basic Form with React Hook */

// const App = () => {

//   const [email , changemail] = useState("");
//   const [pass , changepass] = useState("");
//   const [Entry , SetEntry] = useState([]);

//   const EmailFunc = (e)=>
//   {
//     changemail(e.target.value);
//   }

//   const PasswordFunc = (e)=>
//   {
//     changepass(e.target.value);
//   }

//   const submitt = (e)=>
//   {
//     e.preventDefault();
//     const Newww = {email:email , pass:pass}

//     if (email && pass) {
//       SetEntry([...Entry , Newww ]);
//       changemail("");
//       changepass("");
//     }
//     else{
//       alert(`Please Fill the Form First`);
//     }

//   }

//   return (
//     <>

//       <form action="" onSubmit={submitt}>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" value={email} onChange={EmailFunc} />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" name="password" id="password"  value={pass} onChange={PasswordFunc} />
//       </div>
//         <button type="submit">Login</button>
//       </form>

//       <div>
//                 {
//                     Entry.map((curElem) => {
//                         const { id, email, pass } = curElem;
//                         return (
//                             <div className="showDataStyle" key={id}>
//                                 <p>{email}</p>
//                                 <p>{pass}</p>
//                             </div>
//                         )
//                     })
//                 }
//           </div>

//      </>
//   );
// };

// export default App;

/*#11: Create Login Form with React i | Handling Basic Form with React Hook with multiple Inputs */
// const App = () => {
//   const [Fdata, SetFdata] = useState({
//     emaill: "",
//     pass: "",
//     roll: "",
//   });

//   const [Entry, SetEntry] = useState([]);

//   const submitt = (e) => {
//     e.preventDefault();
//     const Newww = { email: Fdata.emaill, pass: Fdata.pass, roll: Fdata.roll };

//     SetEntry([...Entry, Newww]);
//   };

//   const inputhandler = (e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     const nameee = e.target.name;
//     const { name, value } = e.target;
//     SetFdata((pre) => {
//       return {
//         ...pre,
//         [name]: value,
//       };
//     });
//   };

//   return (
//     <>
//       <form action="" onSubmit={submitt}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="emaill"
//             id="email"
//             value={Fdata.emaill}
//             onChange={inputhandler}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="pass"
//             id="password"
//             value={Fdata.pass}
//             onChange={inputhandler}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Roll Number</label>
//           <input
//             type="text"
//             name="roll"
//             id="roll"
//             value={Fdata.roll}
//             onChange={inputhandler}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>

//       <div>
//         {Entry.map((curElem) => {
//           const { id, email, pass , roll } = curElem;
//           return (
//             <div className="showDataStyle" key={id}>
//               <p>{email}</p>
//               <p>{pass}</p>
//               <p>{roll}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;

/* #12: React useEffect Hook in React */

// const App = () => {

//   const [count , setCount] = useState(0)

//   useEffect(() => {
//     console.log("Hello I am Because of useEffect");
//     document.title= `Chat (${count})`;

//   })
//   const incre =()=>
//   {
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <h1 className="h1style">{count}</h1>
//       <button className="btn" onClick={incre}>Click Me  </button>
//     </>
//   );
// };
// export default App;

/* #13: React useEffect Hook Challenge no. 3 */

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count > 1) {
//       document.title = `Chat (${count})`;
//     }
//     else{
//       document.title = `Chat`;
//     }
//   });
//   const incre = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h1 className="h1style">{count}</h1>
//       <button className="btn" onClick={incre}>
//         Click Me
//       </button>
//     </>
//   );
// };
// export default App;

/*#14: Understanding the useEffect Dependency List Array in React Hook */

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count > 0) {
//       document.title = `Chat (${count})`;
//     }
//     else{
//       document.title = `Chat`;
//     }
//   } , [count]);
//   const incre = () => {
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <h1 className="h1style">{count}</h1>
//       <button className="btn" onClick={incre}>
//         Click Me
//       </button>
//     </>
//   );
// };
// export default App;

/* #15: React Hook useEffect CleanUp Function */

// const App = () => {
//   const [count, setCount] = useState(window.screen.width);

//   const width = () => {
//     setCount(window.screen.width);
//   };

//   useEffect(() => {
//     console.log(`Add Event`);
//     window.addEventListener("resize", width);

//     /*Clean Up Function  */
//     return () => {
//       console.log(`Removed`);
//       window.addEventListener("resize", width);
//     };
//   });
//   return (
//     <>
//       <h1>Hello Window Resolution Is:</h1>
//       <h1>{count}</h1>
//     </>
//   );
// };
// export default App;

/* #18: Ref & useRef Hooks | Controlled and Uncontrolled Form Components */

// const App = () => {

//     const Name = useRef(null);
//     const[show, setShow] = useState(false);

//     const submit = (e)=>
//     {
//         e.preventDefault();

//        const Namee = Name.current.value;
//        Namee === "" ? alert("plz fill the data") : setShow(true);
//     }

//   return (
//     <>
//       <div>
//         <form action="" onSubmit={submit}>
//           <div>
//             <label htmlFor="luckyName">enter your luckyName</label>
//             <input type="text" id="luckyName"  ref={Name}/>
//           </div>
//           <br />
//           <button>Submit</button>
//         </form>
//         <p> { show ? `your lucky name is ${Name.current.value}` : ""} </p>
//       </div>
//     </>
//   );
// };
// export default App;

/*#20: What is useReducer Hook in React */

// const App = () => {

//   const initialState = 0;

//     const reducer = (state , action)=>
//     {
//       if (action.type === "INCREMENT")
//       {
//         return state +1;
//       }
//       else if (action.type === "DECREMENT")
//       {

//         return state -1;
//       }
//       return state;  
//     }
  

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       <div>
//         <p>{state}</p>
//         <div className="btnStylePosition">
//           <button onClick={()=> dispatch({type: "INCREMENT"})}> Inc </button>
//           <button onClick={()=> dispatch({type: "DECREMENT"})}> Dec </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

/*#22: Create Your Own Custom Hooks in React */

// const App = ()=>
// {

//   return<>

//       <ComA />

//   </>
// }

// export default App;
// const App = ()=>
// {

//   return<>
    
     
//             <BrowserRouter>
//             <Nav />
//              <Route path="/index">
//                 <Index />
//              </Route>
//              <Route path="/About">
//                 <About />
//              </Route>
            
//              </BrowserRouter>
//   </>
// }

// export default App;

/* #24: React-Toastify | React Toast Notifications  */

const App = ()=>
{

  const toasti = ()=>
  {
    toast.success('Loged in', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return<>
    
    <h1>Hello Login Please</h1>

    <button className="btn"  onClick={toasti}>login please </button>

    <ToastContainer />
    
  </>
}

export default App;

