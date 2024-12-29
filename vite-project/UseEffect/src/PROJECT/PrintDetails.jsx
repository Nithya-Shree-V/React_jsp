import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PrintDetails = ({name,subject,id}) => {

  return (
    <div id='printdetails'>
        <h4>Name: {name}</h4>
        <h4>Subject: {subject}</h4>
        <Link to={`/edit/${id}`}><button>EDIT</button></Link> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to={`/delete/${id}` } ><button>DELETE</button></Link>
        
    </div>
  )
}

export default PrintDetails