import React from 'react'
import './Home.css'
import { ContactCard } from './ContactCard'

export const Home = ({ imageB }) => {
    return (
        <div id={imageB} className="section">
            <div className="title-group">
                <h1 className="hello">Hello World!</h1>
                <small>This is Hiba. Former potato.<br /> Currently, I'm a toast.</small>
                <div className="container">
                    <ContactCard
                        faceId="ig"
                        aId="goig"
                        fab="fab fa-instagram fa-2x"
                        href="https://www.instagram.com/powerinz/"
                    />

                    <ContactCard
                        faceId="twitter"
                        aId="gotwitter"
                        fab="fab fa-twitter fa-2x"
                        href="https://twitter.com/_powerinz"
                    />

                    <ContactCard
                        faceId="cv"
                        aId="gocv"
                        fab="fas fa-file-invoice fa-2x"
                        href="#"
                    />

                    <ContactCard
                        faceId="linkedin"
                        aId="golinkedin"
                        fab="fab fa-linkedin fa-2x"
                        href="https://www.linkedin.com/in/hibamouhoub/"
                    />

                    <ContactCard
                        faceId="github"
                        aId="gogithub"
                        fab="fab fa-github fa-2x"
                        href="https://github.com/hibamouhoub"
                    />
                </div>
            </div>
        </div>
    )
}
