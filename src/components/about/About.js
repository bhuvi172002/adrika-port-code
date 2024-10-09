import React from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import p1 from '../images/c.png'
import p2 from '../images/boot.png'
import p3 from '../images/css.png'
import p4 from '../images/git.png'
import p5 from '../images/github.png'
import p6 from '../images/html.png'
import p7 from '../images/js.png'
import p8 from '../images/php.png'
import p9 from '../images/react.png'
import p10 from '../images/rn.png'
import './about.css'





function About() {

    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // Optional: triggers only once when in view
      threshold: 0.1,    // How much of the element should be visible before triggering
    });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    const boxVariants = {
      hidden: { opacity: 0, y: 300 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      }
    };


  return (
    <motion.div 
    ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    
    id='about' className='aboutcon'>
      <div className="s_heading">
        <h1> <i>Skills</i> </h1>
      </div>
      <div className="sk_con">
        <div className="circard">
          <div className="circle">
               <img src={p1} alt="" />
          </div>
          <h3>C++</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p2} alt="" />
          </div>
          <h3>Bootstrap</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p3} alt="" />
          </div>
          <h3>CSS</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p4} alt="" />
          </div>
          <h3>Git</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p5} alt="" />
          </div>
          <h3>GitHub</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p6} alt="" />
          </div>
          <h3>HTML</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p7} alt="" />
          </div>
          <h3>JAVA SCRIPT</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p8} alt="" />
          </div>
          <h3>PHP</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p9} alt="" />
          </div>
          <h3>Reat</h3>

        </div>
        <div className="circard">
          <div className="circle">
               <img src={p10} alt="" />
          </div>
          <h3>React Native</h3>

        </div>
           
      </div>
    </motion.div>
  )
}

export default About
