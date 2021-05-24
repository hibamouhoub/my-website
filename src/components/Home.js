import React from 'react'
import './Home.css'

export const Home = ({imageB}) => {
    return (
        <div id={imageB} className="section">
          <div className="title-group">
              <h1>Hello World!</h1>
              <small>Welcome to my website</small><br/>
              <button className="resume">my resumé</button><br/>
              <a href="https://github.com/hibamouhoub/"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/hibamouhoub/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/powerinz/"><i className="fab fa-instagram"></i></a>
          </div>
      </div>
    )
}
