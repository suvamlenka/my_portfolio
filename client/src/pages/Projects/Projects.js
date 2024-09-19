
import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
        <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    // src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    // alt="project1"
                    src="https://res.cloudinary.com/dsphccyru/image/upload/v1726232892/bgImg_d02af7.jpg"
                     alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     FIND MY NOTES
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/suvamlenka/find-my-notes"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>




            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FRONT-WEB</span>
                  <img
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    // alt="project2"
                    src="https://thumbs.dreamstime.com/z/frontend-development-web-banner-concept-website-interface-frontend-development-web-banner-concept-website-interface-design-159250288.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3"> 
                  <span className="card-detail-badge">REACT</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">HTML</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">FRONTEND</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/suvamlenka/frontend-project"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN FULLSTACK</span>
                  <img
                    // src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    // alt="project3"
                    src="https://as2.ftcdn.net/v2/jpg/01/23/05/91/1000_F_123059127_bYRfTByneigw4xYHtEPzOWQvyScFSyNu.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">NodeJS</span>
                  <span className="card-detail-badge">EXPRESS</span>
                  <span className="card-detail-badge">REACT</span>
                  <span className="card-detail-badge">MONGODB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">TODO-LIST</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/suvamlenka/Todo-List">
                    View
                  </a>
                </div>
              </div>
            </div>

            </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;








