import React from 'react'
import './Home.css'
import { ContactCard } from './ContactCard'
import Pdf from '../../images/cv.pdf';

export const Home = ({ imageB }) => {
    return (
        <div id={imageB} className="section">
            <div className="title-group">
                <h1 className="hello">Hello World!</h1>
                <small>This is Hiba Mouhoub.<br />~Insert Coffee and let your mind wander~</small>
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
                        href={Pdf}
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
