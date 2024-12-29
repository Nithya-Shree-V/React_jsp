import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PrintEnroll = ({name, email, code, mobile, course, location,id}) => {
 
  return (
    <div>
    <div id='printdetails'>
        <h1 className='head4'>  DETAILS:-</h1> <br />
        <h4><span>Name:</span> {name}</h4>
        <h4><span>Email:</span> { email}</h4>
        {/* <h4><span>Code:</span> {code}</h4> */}
        <h4><span>Mobile:</span> {mobile}</h4>
        <h4><span>Course:</span> {course}</h4>
        <h4><span>Location:</span> {location}</h4>
        <br />
        <Link to={`/edit/${id}`}><button id='btn'>EDIT</button></Link> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
       
        
    </div>
    </div>
  )
}

export default PrintEnroll