import { useState,useRef,useEffect } from 'react'
import {Canvas} from "@react-three/fiber"
import Model from './Components/Model'
import Typed from "typed.js";
import emailjs from "@emailjs/browser"
import "./App.css"
import Contactme from './Components/Contactme';
import Footer from './Components/Footer';




function App() {



    const textRef = useRef(null);
    useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
            "Heyyy I'm <span class='name'>Raktim Nandi</span>",
            "<span class='role'>AI Enthusiast</span>",
            "<span class='role'>Full Stack Developer</span>",
            "<span class='role'>Problem Solver</span>",
            
        
      ],
      contentType:"html",
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      // showCursor: true,
      
    });

    return () => {
      typed.destroy(); 
    };
  }, []);







  return (
    <main>
      <Canvas style={{
        height:"100vh",
        width:"100vw",
        top:0,
        left:0,
        position:"fixed",
        zIndex:5,
        background:"transparent"
        
      }}>
        <Model>
          
        </Model>
      </Canvas>
      <section className="section1">

        <div className="littleinfo">
          <div className="heading">
            <h1 id="info" ref={textRef}></h1>
          </div>

          <div className="digital">
            <a href="https://leetcode.com/u/FWul2oC4nD/" target='_blank'><img id="leetcode" src="/leetcode.webp"></img></a>
            <a href="https://github.com/Raktim611" target='_blank'><img id="github" src="/Github.png"></img></a>
          </div>
         
         
          
        </div>

        <img id="me" src="/me.jpeg" alt="photo_identification"></img>
      
      </section>

      <section className="section2">
        {/* <h1>About Me</h1> */}

        <div className="leftside">
            <h1>Hey I'm Raktim Nandi</h1>
            <br></br>
            <br></br>
            <h2><i>I'm a 20 year old</i> <br></br><i>Engineering Undergraduate</i></h2>
            <br></br>
            <br></br>
            <h2><i>Currently I'm pursuing my</i><br></br><i>undergraduation from</i> <br></br> <i>NSHM Institute of Engineering and Technology</i></h2>
            <br></br>
            <br></br>
            <h2><i>Currently I'm in my 3rd year </i><br></br> <i>of my Engineering</i></h2>
        </div>


        <div className="middleside">
          <h2>I have interest in Full Stack Development especially <br></br> Backend Development</h2>
          <br></br>
          <br></br>
          <h2>Aspiring AI Engineer </h2>
          <br></br>
          <br></br>
          <h2>Learning DSA</h2>


        </div>


        <div className="rightside">
          <div className="first">
            <i class="fa-solid fa-laptop"></i>
            <p>Web Application Development</p>
          </div>
            
          <div className="second">
           <i class="fa-solid fa-robot"></i>
           <p>AI Enthusiast</p>
          </div>

          <div className="third">
            <i class="fa-solid fa-circle-exclamation"></i>
            <p>Problem Solver</p>
          </div>


        </div>
      </section>

      <section className="section3">
        <h1>My Skills</h1>
        <div className="maindiv">
          <div className="html">
            <img src="/html.png" alt="html_logo"></img>
            <p>HTML</p>
          </div>

          <div className="css">
            <img src="/css.webp" alt="css_logo"></img>
            <p>CSS</p>
          </div>

          <div className="js">
            <img src="/js.png" alt="js_logo"></img>
            <p>Java Script</p>
          </div>

          <div className="threejs">
            <img src="/threejs.png" alt="threejs_logo"></img>
            <p>Three.JS</p>
          </div>
          
          <div className="mongo">
            <img src="/mongodb.png" alt="mongodb_logo"></img>
            <p>MongoDB</p>
          </div>

          <div className="express">
            <img src="/express.png" alt="express_logo"></img>
            <p>Express.JS</p>
          </div>

          <div className="react">
            <img src="/react.webp" alt="react_logo"></img>
            <p>React.JS</p>
          </div>

          <div className="node">
            <img src="/Node.png" alt="Node_logo"></img>
            <p>Node.JS</p>
          </div>

          <div className="cpp">
            <img src="/c++.webp" alt="c++_logo"></img>
            <p>C++</p>
          </div>

          <div className="python">
            <img src="/python.webp" alt="python_logo"></img>
            <p>Python</p>
          </div>
        </div>
      </section>
      <section className="section4">
        <h1>My Projects</h1>
        <div className="projects">
          {/* <div className="firstproject">
            <h1>Wanderlust</h1>

          </div> */}

          <div className="secondproject">
            <img src="/campuslink.jpeg" alt="logo"></img>
            <h2>CampusLink is a true <br></br>social media app where you can post you achievements ,connect to other people,comment on someones post</h2>
            <button>
              <a href="https://campus-link-jade.vercel.app/" target='_blank'>Quick Demo</a>
              <i class="fa-solid fa-circle-play"></i>
            </button>
          </div>

          <div className="thirdproject">
            <img src="/dogstudio.jpeg" alt="dogstudio_logo"></img>
            <h2>Dogstudio is a 3D website <br></br>Made it just to practice to practice 3d Web Development.</h2>
            <button>
              <a href="https://dogstudio-seven.vercel.app/"  target='_blank'>Quick Demo</a>
              <i class="fa-solid fa-circle-play"></i>
            </button>
          </div>

          <div className="fourthproject">
            <img src="/JustPlay.jpeg" alt="justplay_logo"></img>
            <h2>JustPlay is a free music<br></br> streaming platform build for music lovers.<br></br>This will be live in few weeks</h2>
          </div>
          
        </div>

      </section>


      <section className="section5">
        <h1>Contact Me</h1>
        <Contactme/>
        <Footer/>
      </section>

      
    </main>
  )
}

export default App
