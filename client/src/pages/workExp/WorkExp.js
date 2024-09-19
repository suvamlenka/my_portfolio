
import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <> {/*fragment*/}
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               MERN Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                xyz, 
              </h4>
              <p>
              Hi, I’m [Suvam Lenka], a passionate web developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
              I enjoy building full-stack applications and solving real-world problems through coding.
              Currently, I’m looking for opportunities to apply my skills and continue learning in a dynamic environment
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;