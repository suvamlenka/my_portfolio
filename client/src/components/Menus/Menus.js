
import React from 'react'
import './Menus.css'
import Zoom from "react-reveal/Zoom" // use for animation
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc'

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
           <Zoom>
            <div className="navbar-profile-pic">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                 src="https://res.cloudinary.com/dsphccyru/image/upload/v1726145426/Picsart_24-01-21_22-55-05-097_ejdsa9.jpg"
                 alt="profile pic"
              />
            </div>
          </Zoom>

          <Fade left>

          <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link">

                        <Link to="home"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={100} >
                        <FcHome title="Home" />
                          Home
                        </Link>
                    </div>


                    <div className="nav-link">
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                    </div>



                    <div className="nav-link">
                    <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                    </div>

                    

                    <div className="nav-link">
                    <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                    </div>

                    

                    <div className="nav-link">
                    <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                    </div>



                    <div className="nav-link">
                    <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                    </div>


                    <div className="nav-link">
                    <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                    </div>

                </div>
                </div>
                </Fade>
                </>
    ) : (
       <>
       <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link">
                 <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
                </div>



                <div className="nav-link"> 
                 <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
                </div>


                 <div className="nav-link">
                 <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
                </div>

                    
                    <div className="nav-link">
                    <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
                 </div>

                    

                    <div className="nav-link">
                    <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
                </div>


                    <div className="nav-link">
                       <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
                    </div>


                    <div className="nav-link">
                    <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
                    </div>
                </div>
            </div>
       </>

    )}
      
    </>
  );
};

export default Menus
