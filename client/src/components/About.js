import React from 'react'
import Anna_about from '../imagesFolder/Anna_about.jpeg'
import Brooke_about from '../imagesFolder/Brooke_about2.jpg'
import Cindy_about from '../imagesFolder/Cindy_about.jpg'

const About = () => {
  return (
    <div className="about-container">
    <div className='about'>
    <h1>About</h1>
    <p>
       Welcome to our Plant App. This project is meant for plant lovers! Create an account or login upon opening the app. Add a plant post and interact with others through commenting on the global plants part of the application. Like, edit, and delete posts and comments at your leisure!
    </p>
    
    <h2>Application Coding Details</h2>
    <p>
        This application utilizes elements of React (JavaScript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience. An individual users data persists to a backend database so that any changes that user has made will persist as the page is updated.
    </p>

    <h3>Phase 4 Requirements Met Through this Project</h3>
      <ul>
        <li>Uses a Rails API backend with a React frontend.</li>
        <li>Has at least three models on the backend, that include the following:</li>
          <ul>
            <li>At least two one-to-many relationships.</li>
            <li>At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Has a joins table. This joins table has a user submittable attribute.</li>
          </ul>
        <li>Has full CRUD actions for at least one resource.</li>
        <li>Has a minimum of create and read actions for EACH resource.</li>
        <li>Has at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.</li>
        <li>Implements authentication/authorization, including password protection. A user must be able to: -sign up with a new user account, -log in to the site with a secure password and stay logged in via user ID in the session hash, and log out of the site.</li>
      </ul>
    <h2>About the Creators</h2>
    <p>
      Anna Schmidt, Brooke Ross, Cindy Qu, and Mustafa Rizvi are all nearing the end of their 15 week, extremely rigorous online program. With Flatirons school, they have attended classes online Monday through Friday from 9am-5pm since August 29th 2022. They have a projected graduation date of December 9th, with a certificate in full stack Software Engineering. Through this program and its many challenges they have been learning to code with Ruby on Rails. With this program, they are able to showcase their hard work and passion! Plus their love of cute house plants. Connect with any of them below via LinkedIn.
    </p>
    <h3>Connect with them all on LinkedIn here: </h3>
        
    <div className="about-photos">
        <div className= "about-information">
            <img src={Anna_about} alt="Anna" />
            <a href="https://www.linkedin.com/in/annaschmidt1697/" target="_blank">Anna <i className="fa-brands fa-linkedin" /></a> 
            <p>Anna's favorite plant is... a Tillandsia!</p>
        </div>
        <div className="about-information"> 
            <img src= {Brooke_about} alt="Brooke"/>
            <a href="https://www.linkedin.com/in/brooke-ross-se/" target="_blank" >Brooke <i className="fa-brands fa-linkedin" /></a> 
            <p>Brooke's favorite plant is... a Myrtillocactus geometrizans!</p>
        </div>           
        <div className="about-information"> 
            <img src={Cindy_about} alt="Cindy" />
            <a href="https://www.linkedin.com/in/cindy-qu/" target="_blank" >Cindy <i className="fa-brands fa-linkedin" /></a>
            <p>Cindys's favorite plant is... a Asplenium nidus variegated!</p>
        </div>
        <div className="about-information">
            {/* <img src={Mustafa_about} alt="Mustafa" />  */}
            <a href="https://www.linkedin.com/in/mustafa-rizvi-970494138/" target="_blank" >Mustafa <i className="fa-brands fa-linkedin" /></a>
            <p>Mustafa's favorite plant is... a fiddle leaf fig!</p>
        </div>

    </div>

  </div>
</div>
  )
}

export default About