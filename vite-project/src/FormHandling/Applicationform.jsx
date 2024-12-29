import React, { useState } from 'react'


const Applicationform = () => {
    let [state, setState] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        lang: [],
        qualification: ""

    })

    let { fname, lname, gender, email, lang, qualification } = state

    let handleChange = (e) => {
        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleLang = (e) => {
        lang.push(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        try {
            console.log({ ...state });
            console.log({ ...lang });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div id='parent'>

            <div id='card'>
                <div>

                    <h1 align="center">Registration form</h1>

                    <form action="" method="get" onSubmit={handleSubmit}>
                        <label htmlFor="">Student Name: </label><br />
                        <input type="text" name="fname" id="" placeholder='firstname' value={fname} onChange={handleChange} /> <span>&nbsp;</span>
                        <input type="text" name="lname" id="" placeholder='lastname' value={lname} onChange={handleChange} />
                        <br /><br />


                        <label htmlFor="">Gender: </label>
                        MALE<input type="radio" name="gender" value="male" id="" onChange={handleChange} /> <span>&nbsp;</span>
                        FEMALE<input type="radio" name="gender" id="" value="female" onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="">Student E-Mail: </label>
                        <input type="email" name="email" id="" value={email} onChange={handleChange} placeholder='example@gmail.com' />
                        <br /><br />

                        <label htmlFor="">Languages known: </label> <br />
                        <input type="checkbox" name="lang" value="kannada" id="" onClick={handleLang} />KANNADA<br />
                        <input type="checkbox" name="lang" value="telugu" id="" onClick={handleLang} />TELUGU<br />
                        <input type="checkbox" name="lang" value="english" id="" onClick={handleLang} />ENGLISH<br />
                        <input type="checkbox" name="lang" value="hindi" id="" onClick={handleLang} />HINDI<br />
                        <br />

                        <label htmlFor="">Qualification: </label>
                        <select name="qualification" id="" onChange={handleChange}>
                            <option>select</option>
                            <option value="BTech">BTech</option>
                            <option value="BE">BE</option>
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                        </select>
                   

                    <br /><br />

                    <center>
                        <button id='btn'>SUBMIT</button>
                    </center>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Applicationform

//---------------------APP.JSX--------------------------------------------------
// import React from 'react'
// import "./App.css"
// import Applicationform from './FormHandling/Applicationform'

// const App = () => {
//   return (
//     <div>
//       <Applicationform></Applicationform>
//     </div>
//   )
// }

// export default App

// =============================APP.CSS=======================
// body{
//     background-image: repeating-linear-gradient(to left,rgb(244, 221, 221),pink,plum)
// }
// #parent{
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
// }
// #card{
//     height: 450px;
//     width:400px;
//     background-color: white;
//     position: relative;
//     top:30px;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
// }
// #btn{
//     /* background-color: rgb(240, 196, 217); */
//     background-color: rgb(145, 145, 245);
//     border-radius: 10px;
//     height: 30px;
//     width: 150px;
// }