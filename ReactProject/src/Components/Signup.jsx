import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
    let [state, setState] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        password:"",
        lang: [],
        qualification: "",
        course:""

    })

    let { fname, lname, gender, email,password, lang, qualification,course} = state

    let handleChange = (e) => {
        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleLang = (e) => {
        // lang.push(e.target.value)

        const { value, checked } = e.target;
        const updatedLang = checked
          ? [...lang, value]
          : lang.filter((langItem) => langItem !== value);
    
        setState({ ...state, lang: updatedLang });
    }

    let home=useNavigate()
    
    let handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let SignupDetails={fname, lname, gender, email,password, lang, qualification,course}
            let {data}= await axios.post("http://localhost:3000/users",SignupDetails)
            home("/login")
            console.log(data);
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
                    <div className='head2'><h1 align="center" >SIGN UP</h1></div> <br />
                    <div className='alignform'>
                    <form action="" method="get" onSubmit={handleSubmit}>
                        <label htmlFor="">Student Name: </label><br />
                        <input type="text" name="fname" id="" placeholder='firstname' value={fname} onChange={handleChange} /> <span>&nbsp;</span>
                        <input type="text" name="lname" id="" placeholder='lastname' value={lname} onChange={handleChange} />
                        <br /><br />


                        <label htmlFor="" id='spanalign'>Gender: </label>
                        <span id='spanalign'>MALE </span><input type="radio" name="gender" value="male" id="" onChange={handleChange} /> <span>&nbsp;</span>
                        <span id='spanalign'>FEMALE </span><input type="radio" name="gender" id="" value="female" onChange={handleChange} />
                        <br /><br />

                        <label htmlFor="">Student E-Mail: </label>
                        <input type="email" name="email" id="" value={email} onChange={handleChange} placeholder='example@gmail.com' />
                        <br /><br />

                        <label htmlFor="">Enter New Password: </label>
                        <input type="password" name="password" id="" value={password} onChange={handleChange} placeholder='enter password'/>
                        <br /><br />

                        <label htmlFor="">Languages known: </label> <br />
                        <input type="checkbox" name="lang" value="spanalign" id="signcheck" onClick={handleLang} /><span id='spanalign'> KANNADA</span><br />
                        <input type="checkbox" name="lang" value="telugu" id="signcheck" onClick={handleLang} /><span id='spanalign'> TELUGU</span><br />
                        <input type="checkbox" name="lang" value="english" id="signcheck" onClick={handleLang} /><span id='spanalign'> ENGLISH</span><br />
                        <input type="checkbox" name="lang" value="hindi" id="signcheck" onClick={handleLang} /><span id='spanalign'> HINDI</span><br />
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
                        <label htmlFor="">Course: </label>
                        <select name="course" id="" onChange={handleChange}>
                            <option>select</option>
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="MERN Stack">MERN Stack</option>
                            <option value="Devops ">Devops</option>
                            <option value="Android Development">Android Development</option>
                        </select>

                   

                    <br /><br />

                    <center>
                        {/* no <Link to="/"></Link> */}
                    <button id='btn' type='submit'>SUBMIT</button>
                    </center>
                    </form>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Signup