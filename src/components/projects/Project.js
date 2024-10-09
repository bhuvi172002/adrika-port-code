import React from 'react'
import p1 from '../images/pro1.jpg'
import p2 from '../images/project2.jpeg'

import './project.css'
function Project() {
  return (
    <div id='project' className='projectcon'>
         <div className="headcon"><h1><i>Projects</i></h1></div>
         <div className="projectmain">
                <div className="im">
                    <img src={p1} alt="" />
                </div>
                <div className="discrip">
                    <h2>
                    Kitchenkraft
                    </h2>
                       <p>
                       Discover thousands of delicious recipes at your fingertips with RecipeMaster, a React Native-based app designed to inspire your culinary journey. Whether you're a seasoned chef or a kitchen newbie, our app provides easy access to a vast collection of recipes from around the world, conveniently fetched through our robust API integration.
                       </p>
                       <a href="https://github.com/adrikaDwivedi/recipeApp.git">Visit</a>
                </div>
  
         </div>
         <div className="projectmain">
                <div className="im">
                    <img src={p2} alt="" />
                </div>
                <div className="discrip2">
                    <h2>
                    Coursified
                    </h2>
                       <p>
                       This Education App, developed using React Native, is designed to offer a seamless learning experience across multiple platforms, ensuring accessibility and user-friendliness for students and educators alike. With a clean, intuitive interface, the app enables users to access a wide range of educational resources such as video tutorials, interactive quizzes, and real-time assessments.
                       </p>
                       <a href=" https://github.com/adrikaDwivedi/eduApp.git">Visit</a>
                </div>
  
         </div>
    </div>
  )
}

export default Project
