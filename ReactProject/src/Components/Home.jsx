import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Courses from './Courses'
import { ImCompass } from "react-icons/im";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import pic1 from "C:\\Users\\Administrator\\Desktop\\React_JSP\\ReactProject\\src\\pics\\MFS.jpeg"
import pic2 from "C:\\Users\\Administrator\\Desktop\\React_JSP\\ReactProject\\src\\pics\\devops.jpg"
import pic3 from "C:\\Users\\Administrator\\Desktop\\React_JSP\\ReactProject\\src\\pics\\JFS.jpeg"
import Enroll from './Enroll'
import { Outlet } from 'react-router-dom'
const images = [
  pic1, pic2, pic3
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  

  return (
    <div>
     
      <Nav></Nav>
      <br />
      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width="500px" height="400px" />
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <br />
      <section>
        <div className='homediv1'>
              <div id='div1'><h1>Invest in your career</h1></div> <br />
              <div>Get access to content in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</div>
        </div>
        <div className='homediv2'>
          <div id='homecards'>
            <div id='logos'><ImCompass /></div>
            <div>learn anything</div>
            <div>Explore any interest or trending topic, take prerequisites, and advance your skills</div>
          </div>
          <div id='homecards'>
            <div id='logos'><GiTakeMyMoney /></div>
            <div>Save money</div>
            <div>Spend less money on your learning if you plan to take multiple courses this year</div>
          </div>
          <div id='homecards'>
            <div id='logos'><GiBrain /></div>
            <div>Flexible learning</div>
            <div>Learn at your own pace, move between multiple courses, or switch to a different course</div>
          </div>
          <div id='homecards'>
            <div id='logos'><GrCertificate /></div>
            <div>Unlimited certificates</div>
            <div>Earn a certificate for every learning program that you complete at no additional cost</div>
          </div>
        </div>
      </section>
      {/* <Enroll></Enroll>
        <Login></Login>
        <Signup></Signup>
        <Contact></Contact>
<br />*/}
<br />
        <Courses></Courses> 
<br />
      <Footer></Footer>
    </div>
  )
}

export default Home