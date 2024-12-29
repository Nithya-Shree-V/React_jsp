import React, { useState } from 'react'
import pic1 from 'C:\\Users\\Administrator\\Pictures\\Screenshots\\Screenshot (9).png'
import pic2 from 'C:\\Users\\Administrator\\Pictures\\Screenshots\\Screenshot (8).png'
import pic3 from 'C:\\Users\\Administrator\\Pictures\\Screenshots\\Screenshot (11).png'

const Images= () => {
    let [image,setimage]=useState(pic1)
    let [count,setcount]=useState(1)
    // let images=[pic1,pic2,pic3];
    
    let change=()=>{
      // setimage((image+1) % images.length)
      if(count<3){
        setcount(count+1)  //use it and increment
        if(count==1){
          setimage(pic2)
        }
        if(count ==2){
          setimage(pic3)
        }

      }
    }
  return (
    <div>
      {/* images[image] */}
        <img src={image} alt="" height="300px" width="600px" /> <br />
        <button onClick={change}>change {count}</button>
       
    </div>
  )
}

export default Images



// import React, { Fragment, useRef, useState } from 'react'
// import pic1 from './pictures/img1.png'
// import pic2 from './pictures/img2.png'
// import pic3 from './pictures/img3.png'
// import pic4 from './pictures/img4.png'
// import pic5 from './pictures/img5.png'

// const App = () => {

//   let array=[pic1,pic2,pic3,pic4,pic5]

//   let [state,setstate]=useState(array)
  
//   let imgref=useRef()

//   let picChange=()=>{
//     state.map((x,y)=>{
//         console.log(x);
//         return <Fragment key={y}>
//            imgref.current.src=array[y];
//         </Fragment>
//         // imgref.current.src=x;
//         // imgref.current.src=array[y]

//     })
//   }



//   return (
//     <div>
//       <img ref={imgref} src={pic1} alt="" height="300px" width="600px" /> 
//       <br />
//       <button onClick={picChange}>click</button>

//     </div>
//   )
// }

// export default App

