import React from 'react'
import './hero.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import linkedin from '../images/linkedin.png'
import github from '../images/code.png'


function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when in view
    threshold: 0.1,    // Triggers when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const slideInVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,                          // Move to the final position
      transition: { delay:3, duration: 2, ease: "easeOut" },
    }
  };
 


  return (
   <>
   <div id='home' className="maincon">
       <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }} 
    className="left"></motion.div>
    <motion.div
     className="right">

        <motion.p  initial={{ opacity: 0 }} 
     animate={{ opacity: 1 }}
     transition={{ delay: 2, duration: 1 }}  >MOBILE APPLICATION DEVELOPER</motion.p>
        <motion.span
        // initial={{ opacity: 0 }} 
        // animate={{ opacity: 1 }}
        // transition={{ delay: 3, duration: 1 }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        
        className="head">Adrika Dwivedi <span></span></motion.span>
        <motion.p 
        //   initial={{ opacity: 0 }} 
        // animate={{ opacity: 1 }}
        // transition={{ delay: 5, duration: 1 }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInVariants}
        
        >
     A talented mobile application developer, adept at creating intuitive and efficient apps for both iOS and Android platforms. With a strong focus on user experience and functionality, she consistently delivers high-quality solutions that meet modern mobile development standards.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}  className="loc">
            <p>India</p>
            <p>Uttar Pradesh , Varanasi</p>
            <p>adrikad97@gmail.com</p>
            <a href="https://www.linkedin.com/in/adrika-dwiv/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/adrikaDwivedi"><img src={github} alt="" /></a>
        </motion.div>
    </motion.div>
   
 
   </div>
   </>
  )
}

export default Hero
