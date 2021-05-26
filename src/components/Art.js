import React from 'react'
import './Home.css'
import './Art.css'
import {Picture} from './Picture'
import images from '../images/images'

export const Art = ({ imageB }) => {

    const pictures = images.map(image =>{
        console.log(image)
        return <Picture imageURL= {image} date='01-04-2021'/>
    })
    
    return (
        <div id={imageB}>
            <div className="section">
                <div className="title-group">
                    <h1 className="artH1">
                        Memories
                    </h1>
                </div>
                <div class="card-grid">
                    {pictures}
                </div>
            </div>
            
        </div>

    )
}
