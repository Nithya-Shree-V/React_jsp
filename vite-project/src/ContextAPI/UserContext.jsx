import React, { createContext } from "react";

export let userContext=createContext()

let UserProvider=({children})=>{

    return <userContext.Provider value={{name:"nithya",place:"bangalore"}}>
        {children}
    </userContext.Provider>

}
export default UserProvider



// ------------------------------------App.JSX-------------------------
// import React from 'react'
// import UserProvider from './ContextAPI/UserContext'
// import Home from './ContextAPI/Home'
// import Login from './ContextAPI/Login'


// const App = () => {
//   return (
//     <div>
//       <UserProvider>
//         <Home></Home>
//         <Login></Login>
//       </UserProvider>

//     </div>
//   )
// }

// export default App