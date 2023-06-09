import photo from "../assets/212220220044.jpg";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiSupabase } from "react-icons/si";

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="blur"></div>
      <div className="left box">
        <div className="container">
          <img src={photo} alt="shanu-image" className="photo" />
          <div className="intro">
            Passionate Information Technology student, Seeking to use my
            existing skills and my eagerness to learn in to design innovative,
            cost-effective software solutions. Prolific, designer and full stack
            web developer with a passion for design and performance.
          </div>
          <div className="social">
            <a className="social-item" href="https://github.com/shanuflash">
              Github
            </a>
            <a
              className="social-item"
              href="https://www.linkedin.com/in/shanuflash"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="right box">
        <div className="container up">
          <div className="up-title">
            <span style={{ fontWeight: "700" }}>Shanu S</span>
            <span style={{ fontWeight: "200" }}>|</span>
            <span style={{ fontWeight: "500" }}>B. Tech. IT</span>
          </div>
          <div className="up-desc">Full Stack Web Developer</div>
        </div>
        <div className="container main">
          <div className="topic">
            <div className="title">Education</div>
            <div className="content">
              <div className="edu1">
                <div className="edu-title">
                  High School, Vani Vidyalaya, Chennai
                </div>
                <div className="edu-desc">2008 – 2020 | X: 84%, XII: 82%</div>
              </div>
              <div className="edu2">
                <div className="edu-title">
                  B. Tech. IT, Saveetha Engineering College, Chennai
                </div>
                <div className="edu-desc">2020 – Present | CGPA: 8.2</div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Skills</div>
            <div className="content">
              <div className="skill">
                <div className="skill-icon">
                  <FaReact style={{ color: "#61DBFB" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">React</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaJs style={{ color: "#F0DB4F" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">JavaScript</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaHtml5 style={{ color: "#e34c26" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">HTML</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaCss3Alt style={{ color: "#2965f1 " }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">CSS</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Tools</div>
            <div className="content">
              <div className="tool-row">
                <div className="skill">
                  <div className="skill-icon">
                    <TbBrandVscode
                      style={{ color: "#0078d7 " }}
                      className="icon"
                    />
                  </div>
                  <div className="skill-content tool-content">
                    <div className="skill-title">VS Code</div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-icon">
                    <FaGitAlt style={{ color: "#f34f29 " }} className="icon" />
                  </div>
                  <div className="skill-content tool-content">
                    <div className="skill-title">Git</div>
                  </div>
                </div>
              </div>
              <div className="tool-row">
                <div className="skill">
                  <div className="skill-icon">
                    <SiSupabase
                      style={{ color: "#2eaf76 " }}
                      className="icon"
                    />
                  </div>
                  <div className="skill-content tool-content">
                    <div className="skill-title">Supabase</div>
                  </div>
                </div>
                <div className="skill">
                  <div className="skill-icon">
                    <FaFigma style={{ color: "#A259FF  " }} className="icon" />
                  </div>
                  <div className="skill-content tool-content">
                    <div className="skill-title">Figma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Projects</div>
            <div className="content">
              <div className="project-item">
                <div className="project-name">
                  Drestein
                  <div className="project-tool">
                    <FaReact />
                    <SiSupabase />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <TbBrandVscode />
                  </div>
                </div>
                <div className="project-desc">
                  Landing/Registration website for a college event at Saveetha
                  Engineering College. Made using React, JavaScript, HTML, CSS
                  with a group of 3 people.
                </div>
              </div>
              <div className="project-item">
                <div className="project-name">
                  Student Profiler
                  <div className="project-tool">
                    <FaReact />
                    <SiSupabase />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <TbBrandVscode />
                  </div>
                </div>
                <div className="project-desc">
                  Dynamic student profile website for 3rd and 4th year students
                  studying at Saveetha Engineering College for Placement related
                  activities.
                </div>
              </div>
              <div className="project-item">
                <div className="project-name">
                  FreeRam
                  <div className="project-tool">
                    <FaJava />
                    <TbBrandVscode />
                  </div>
                </div>
                <div className="project-desc">
                  Automated ram cleaning utility using with a simple UI. Made
                  using JAVA with the help of Swing Framework for User Interface
                  and Windows API for processing.
                </div>
              </div>
              <div className="project-item">
                <div className="project-name">
                  Website using Kansei Engineering
                  <div className="project-tool">
                    <FaReact />
                    <FaJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                  </div>
                </div>
                <div className="project-desc">
                  Effective web development and design using Kansei Engineering
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Awards</div>
            <div className="content">
              <div className="edu1">
                <div className="edu-title">
                  Website development/design award
                </div>
                <div className="edu-desc">
                  Drestein 2022, Saveetha Engineering College
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Certification</div>
            <div className="content">
              <li className="cert-item">Hands-on with React JS </li>
              <li className="cert-item">Essentials of Cloud Computing</li>
              <li className="cert-item">Cyber Security and Ethical Hacking</li>
              <li className="cert-item">Data Science with R Programming</li>
            </div>
          </div>
          <div className="topic">
            <div className="title">Languages</div>
            <div className="content">
              <div className="skill">
                <div className="skill-content">
                  <div className="skill-title">English</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-content">
                  <div className="skill-title">தமிழ்</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-content">
                  <div className="skill-title">हिंदी</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Hobbies</div>
            <div className="content">
              <li className="hobby-item">Graphic Design</li>
              <li className="hobby-item">UI Design</li>
              <li className="hobby-item">Gaming</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
