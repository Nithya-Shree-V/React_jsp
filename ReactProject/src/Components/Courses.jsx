import React from 'react'
import { Link } from 'react-router-dom'


const Courses = () => {
  return (
    <div id='coursediv'>
    <div id='courses'>
      <div id='container'>
            <div id='heading'><h3>Courses</h3></div>
            <div id='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quidem accusantium architecto totam nobis quas optio mollitia! Reprehenderit, obcaecati deleniti! Dolor molestiae cum beatae reprehenderit aliquam possimus quasi provident adipisci!</div>
      </div>
    </div>  
    <br /> 
    <div id='cardscontainer'>
      <div id='cards'>
          <div id='head'><h4>Java Full Stack</h4></div>
          <div id='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rem aliquid veniam in sit voluptatum vel, nihil, odit ipsa omnis sapiente non accusamus atque provident odio id perspiciatis pariatur laboriosam!</div>
           <br />
           <div id='enroll'><Link to="/enroll"><button>Enroll</button></Link></div>
      </div>
      <div id='cards'>
          <div id='head'><h4>MERN Stack</h4></div>
          <div id='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rem aliquid veniam in sit voluptatum vel, nihil, odit ipsa omnis sapiente non accusamus atque provident odio id perspiciatis pariatur laboriosam!</div>
          <br />
          <div id='enroll'><Link to="/enroll"><button>Enroll</button></Link></div>
      </div>
      <div id='cards'>
          <div id='head'><h4>Devops</h4></div>
          <div id='content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt rem aliquid veniam in sit voluptatum vel, nihil, odit ipsa omnis sapiente non accusamus atque provident odio id perspiciatis pariatur laboriosam!</div>
          <br />
          <div id='enroll'><Link to="/enroll"><button>Enroll</button></Link></div>
      </div>
      
    </div>
    
    </div>
   
  )
}

export default Courses

