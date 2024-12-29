import React from 'react'
import pic from 'C:\\Users\\Administrator\\Desktop\\React_JSP\\vite-project\\src\\pictures\\img1.png'

const Parent = (Compo) => {

    let user=()=>{
        return <Compo data={{name:"nithya",place:"bangalore",age:21,img:pic}} array={["apple","orange","mango","watermeleon"]}></Compo>
        
    }

    return user
}

export default Parent


// ------------------------------------App.JSX------------------
// import React from 'react'
// import Child1 from './HOC/Child1'
// import Child2 from './HOC/Child2'
// import Child3 from './HOC/Child3'

// const App = () => {
//   return (
//     <div>
//       <Child1></Child1>
//       <Child2></Child2>
//       <Child3></Child3>
//     </div>
//   )
// }

// export default App