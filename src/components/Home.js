import React from 'react'
import './Home.css'
import { ContactCard } from './ContactCard'

export const Home = ({ imageB }) => {
    return (
        <div id={imageB} className="section">
            <div className="title-group">
                <h1>Hello World!</h1>
                <small>Welcome to my life</small>
                <div class="container">
                    <ContactCard
                        faceId="ig"
                        aId="goig"
                        fab="fab fa-instagram fa-2x"
                        href="#"
                    />

                    <ContactCard
                        faceId="twitter"
                        aId="gotwitter"
                        fab="fab fa-twitter fa-2x"
                        href="#"
                    />

                    <ContactCard
                        faceId="cv"
                        aId="gocv"
                        fab="fas fa-file-invoice fa-3x"
                        href="#"
                    />

                    <ContactCard
                        faceId="linkedin"
                        aId="golinkedin"
                        fab="fab fa-linkedin fa-2x"
                        href="#"
                    />

                    <ContactCard
                        faceId="github"
                        aId="gogithub"
                        fab="fab fa-github fa-2x"
                        href="#"
                    />
                </div>
            </div>
        </div>
    )
}
