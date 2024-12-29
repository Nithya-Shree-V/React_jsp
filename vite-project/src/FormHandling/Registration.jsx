import React, { useState } from 'react'

const Registration = () => {
    let [state,setstate]=useState({
        name:"",
        email:"",
        course:"",
        phno:"",
        subject:[]
    })

    let {name,email,course,phno,subject}=state

    let handleChange=(e)=>{
        let {name,value}=e.target

        setstate({...state,[name]:value})

    }
    let handleSubject=(e)=>{
        subject.push(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault()

        try{
            console.log({...state});
            console.log({...subject});
        }
        catch(err){
            console.log(err);
        }
    }

    let displayData=()=>{
        document.body.innerHTML=`
        <table border="1 solid black" align="center">
        <tr>
          <th>Name:</th>
          <th>email:</th>
          <th>Course:</th>
          <th>Phone number:</th>
          <th>Subject:</th>
        </tr>
        <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${course}</td>
          <td>${phno}</td>
          <td>${subject}</td>
        </tr>
      </table>
        `
        
    }
    
  return (
    <div>
        <h1>REGISTRATION FORM</h1>
        <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="">NAME: </label>
            <input type="text" name="name" id="" value={name} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">PHONE NUMBER:</label>
            <input type="tel" name="phno" id="" value={phno} onChange={handleChange} />
            <br /><br />

            <label htmlFor="">EMAIL: </label>
            <input type="email" name="email" id="" value={email} onChange={handleChange}/>
            <br /><br />

            <label htmlFor="">COURSE: </label>
            <select name="course" id="" onChange={handleChange}>
                <option>select</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
            </select>
            <br /><br />

            <label htmlFor="">SUBJECT: </label>
            JAVA <input type="checkbox" name="subject" value="java" id="" onChange={handleSubject} />
            DSA <input type="checkbox" name="subject" value="DSA" id="" onChange={handleSubject} />
            HTML <input type="checkbox" name="subject" value="HTML" id="" onChange={handleSubject}/>
            CSS <input type="checkbox" name="subject" value="CSS" id="" onChange={handleSubject} />
            JAVASCRIPT <input type="checkbox" name="subject" value="javascript" id="" onChange={handleSubject} />
            <br /><br />

            <button onClick={displayData}>SUBMIT</button>
        </form>


    </div>
  )
}

export default Registration