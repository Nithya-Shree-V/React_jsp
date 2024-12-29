import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    let[data,setdata]=useState({
        name:"",
        email:"",
        code:"",
        message:""
    })

    let {name,email,code,message}=data

    let handleState=(e)=>{
        let { name, value } = e.target
        setdata({...data, [name]:value})
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        try {
            console.log({ ...data });
        }
        catch (err) {
            console.log(err);
        }
    }
    let divref=useRef()
    let handleEnquiry = () => {
        divref.current.innerHTML=`
     <div >
     <br/>
                    <h1 align="center">Enquiry</h1> <br />
                    <div id='enqfun'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" value=${name} id="" size="30" placeholder='enter your name' onChange={handleState}  />
                            <br /><br />
                            <input type="email" name="email" value=${email} id="" size="30" placeholder='enter your email' onChange={handleState} />
                            <br /><br />
                            <select name="code" id="" onChange={handleState}>
                                <option value="+91" >+91</option>
                                <option value="+44">+44</option>
                                <option value="+1">+1</option>
                            </select>
                            <input type="tel" name="mobile" value=${mobile} id="" size="23" placeholder='enter Mobile number' onChange={handleState}/>
                            <br /><br />
                            <textarea name="message" value=${message} id="" cols="29" rows="10" placeholder='enter your message' onChange={handleState}></textarea>
                            <br /><br />
                            <div align="center"><button id='conbtn'>Submit</button></div>
                        </form>
                    </div>
                </div>
    `
    }

    return (
        <div>
            <section id='contactcard'>
            <div>
                <h2 id='head'>Contact us</h2>
                <br />
                <div id='content'>
                    <div>Have some questions?</div>
                    <div>Please feel free to ask any questions or if you have any queries. Our team will respond to all your as soon as possible</div>
                    <br />
                    <div ><Link to="/enquiry"><button id='conbtn'>Get In touch</button></Link></div>
                <br />
                </div>
                <div ref={divref}></div>
            </div> 
            </section>
        </div>
    )
}

export default Contact