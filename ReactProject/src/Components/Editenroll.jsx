import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editenroll = () => {
    let [enroll, setenroll] = useState({
        name: "",
        email: "",
        code: "",
        mobile: "",
        course: "",
        location: "",
    
      })
    
      let { name, email, code, mobile, course, location } = enroll
    
      let handleChange = (e) => {
        let { name, value } = e.target
        setenroll({ ...enroll, [name]: value })
      }
    let {id}=useParams()
      let navigate=useNavigate()
      useEffect(()=>{
        let fetchDetails=async()=>{
          let {data}= await axios.get(`http://localhost:3000/enroll/${id}`)
          console.log(data);
        }
        fetchDetails()
      },[id])
      let handleSubmit = async(e) => {
        e.preventDefault()
        // alert("enrolled successfully,we'll contact you further")
        try {
          let payload = {name, email, code, mobile, course, location }
          let { data } = await axios.put(`http://localhost:3000/enroll/${id}`, payload)
          navigate("/details")
          console.log({ data });
          console.log({ ...enroll });
        }
        catch (err) {
          console.log(err);
        }
      }
  return (
    <div>
        <section id='parent'>
        <div id='card1'>
          <div>
          <div className='head3'><h1 align="center">COURSE ENROLL FORM</h1></div> <br /><br />
          <div id='enrolldiv'>
            <form action="" onSubmit={handleSubmit}>
              <input type="text" name="name" value={name} size="30" id="" placeholder='enter your name' onChange={handleChange} />
              <br /><br />
              <input type="email" name="email" value={email} id="" size="30" placeholder='enter your email' onChange={handleChange} />
              <br /><br />
              <select name="code" onChange={handleChange} >
                
                <option value="+1" >+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input type="tel" name="mobile" value={mobile} onChange={handleChange} id="" size="23" placeholder='enter Mobile number' />
              <br /><br />
              <select name="course" id="select" onChange={handleChange}>
                <option>select preferred course</option>
                <option value="Java Full Stack" >Java Full Stack</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Devops">Devops</option>
              </select>
              <br /><br />
              <select name="location" id="select" onChange={handleChange}>
                <option >select preferred location</option>
                <option value="Bangalore" >Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mysuru">Mysuru</option>
              </select>
              <br /><br />
              <div align="center"><button id='conbtn'>Submit</button></div>
            </form>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default Editenroll