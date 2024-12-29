import React, { useState } from 'react'

const App = () => {
      // 01     1
  let [count,setCount]=useState(0) 

  let change=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={change}>click</button>
    </div>
  )
}

export default App

// import React, { useState } from 'react';

// const MyComponent = () => {
//   // Declare a state variable and a function to update it
//   const [stateVariable, setStateVariable] = useState(initialValue);

//   // Function to update the state
//   const updateState = () => {
//     setStateVariable(newValue);
//   };

//   return (
//     <div>
//       <p>{stateVariable}</p>
//       <button onClick={updateState}>Update State</button>
//     </div>
//   );
// };

// export default MyComponent;
