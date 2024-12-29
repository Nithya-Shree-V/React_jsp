import axios from 'axios'
import React, { useState } from 'react'

const Enquiry = () => {
    let[data,setdata]=useState({
        name:"",
        email:"",
        code:"",
        mobile:"",
        message:""
    })

    let {name,email,code,mobile,message}=data

    let handleState=(e)=>{
        let { name, value } = e.target
        setdata({...data, [name]:value})
    }
    
    let handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let enquiryDetails={name,email,code,mobile,message}
            let {enquiry}= await axios.post("http://localhost:5001/enquiry",enquiryDetails)
            console.log(enquiry);
            console.log({ ...data });
        }
        catch (err) {
            console.log(err);
        }
    }

    let handleOnclick=()=>{
        alert("your enquiry has been submitted")
    }
  return (
    <div id='enquirycard'>
        <div>
                    <div className='head1'><h1 align="center">Enquiry</h1></div> <br />
                    <div id='enqfun'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" value={name} id="" size="30" placeholder='enter your name' onChange={handleState}  />
                            <br /><br />
                            <input type="email" name="email" value={email} id="" size="30" placeholder='enter your email' onChange={handleState} />
                            <br /><br />
                            <select name="code" id="" onChange={handleState}>
                                <option value="+91" >+91</option>
                                <option value="+44">+44</option>
                                <option value="+1">+1</option>
                            </select>
                            <input type="tel" name="mobile" value={mobile} id="" size="23" placeholder='enter Mobile number' onChange={handleState}/>
                            <br /><br />
                            <textarea name="message" value={message} id="" cols="29" rows="10" placeholder='enter your message' onChange={handleState}></textarea>
                            <br /><br />
                            <div align="center"><button id='conbtn' onClick={handleOnclick}>Submit</button></div>
                        </form>
                    </div>
                </div>
    </div>
  )
}

export default Enquiry